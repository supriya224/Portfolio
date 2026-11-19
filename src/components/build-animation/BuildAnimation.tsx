import { useCallback, useEffect, useRef, useState } from "react";
import { BuildControlBar } from "./BuildControlBar";
import { BuildRulers } from "./BuildRulers";
import {
  Agent,
  AGENT_ROSTER,
  BuildLayer,
  LayerType,
  Particle,
  RegistrationMark
} from "./buildAnimationTypes";

interface BuildAnimationProps {
  onBuildComplete?: () => void;
  triggerRebuild?: number;
}

const STATUS_DONE = "done";
const STATUS_BUILDING = "building";
const STATUS_PENDING = "pending";

const TYPE_CONTAINER: LayerType = "container";
const TYPE_HERO_LETTER: LayerType = "hero-letter";
const TYPE_MEDIA: LayerType = "media";
const TYPE_BUTTON: LayerType = "button";
const TYPE_TEXT: LayerType = "text";

const ATTR_DATA_BUILD = "data-build";
const DATA_BUILD_INTERACTIVE = "interactive";

const CLASS_BUILDING_ACTIVE = "building-active";
const CLASS_BUILD_PENDING = "build-pending";

function determineLayerType(el: HTMLElement): LayerType {
  const buildAttr = el.getAttribute(ATTR_DATA_BUILD);
  if (buildAttr === TYPE_HERO_LETTER) return TYPE_HERO_LETTER;
  if (el.classList.contains("b") || buildAttr === TYPE_CONTAINER || el.tagName === "SECTION") {
    return TYPE_CONTAINER;
  }
  if (
    el.tagName === "IMG" ||
    el.tagName === "SVG" ||
    el.tagName === "VIDEO" ||
    el.tagName === "CANVAS" ||
    buildAttr === TYPE_MEDIA
  ) {
    return TYPE_MEDIA;
  }
  if (el.tagName === "A" || el.tagName === "BUTTON" || buildAttr === DATA_BUILD_INTERACTIVE) {
    return TYPE_BUTTON;
  }
  return TYPE_TEXT;
}

function buildTagLabel(el: HTMLElement, rect: DOMRect): string {
  const tagName = el.tagName.toLowerCase();
  const firstClass =
    el.className && typeof el.className === "string" ? el.className.split(" ")[0] : "";
  const classStr = firstClass && !firstClass.includes(":") ? `.${firstClass.slice(0, 8)}` : "";
  return `${tagName}${classStr} · ${Math.round(rect.width)} × ${Math.round(rect.height)}`;
}

function getNextSpeed(s: number): number {
  if (s === 1) return 2;
  if (s === 2) return 4;
  return 1;
}

function applyLayerReveal(layer: BuildLayer, progress: number, agent: Agent) {
  const el = layer.element;

  if (layer.type === TYPE_TEXT || layer.type === TYPE_BUTTON) {
    el.style.opacity = "1";
    el.style.clipPath = `inset(0 ${(1 - progress) * 100}% 0 0)`;
    agent.x = layer.docLeft + layer.rect.width * progress;
    agent.y = layer.docTop + layer.rect.height * 0.65;
  } else if (layer.type === TYPE_MEDIA) {
    el.style.opacity = "1";
    const gray = (1 - progress) * 100;
    const blur = (1 - progress) * 8;
    const brightness = 1 + (1 - progress) * 0.4;
    el.style.filter = `grayscale(${gray}%) blur(${blur}px) brightness(${brightness})`;
    agent.x = layer.docLeft + layer.rect.width * 0.5;
    agent.y = layer.docTop + layer.rect.height * progress;
  } else if (layer.type === TYPE_CONTAINER) {
    el.style.opacity = "1";
    el.style.transformOrigin = "top left";
    const scale = 0.2 + 0.8 * progress;
    el.style.transform = `scale(${scale})`;
    agent.x = layer.docLeft + layer.rect.width * progress;
    agent.y = layer.docTop + layer.rect.height * progress;
  } else if (layer.type === TYPE_HERO_LETTER) {
    el.style.opacity = String(progress);
    const blur = (1 - progress) * 12;
    const translateY = (1 - progress) * 16;
    el.style.filter = `blur(${blur}px)`;
    el.style.transform = `translateY(${translateY}px)`;
    agent.x = layer.docLeft + layer.rect.width * 0.5;
    agent.y = layer.docTop + layer.rect.height * 0.8;
  }
}

function stepReinforcements(
  agents: Agent[],
  maxAgents: number,
  completedLayers: number,
  totalLayers: number,
  dt: number,
  timerRef: React.MutableRefObject<number>,
  frontierY: number
) {
  timerRef.current += dt;
  if (
    timerRef.current >= 2.2 &&
    agents.length < maxAgents &&
    completedLayers < totalLayers - 4
  ) {
    timerRef.current = 0;
    const nextIdx = agents.length;
    const roster = AGENT_ROSTER[nextIdx % AGENT_ROSTER.length];
    agents.push({
      id: `agent-${nextIdx}-${roster.name}`,
      name: roster.name,
      color: roster.color,
      x: -80,
      y: Math.random() * (window.innerHeight * 0.45) + window.scrollY + 60,
      targetX: Math.random() * (window.innerWidth * 0.6) + 100,
      targetY: frontierY + Math.random() * 150,
      state: "entering",
      taskProgress: 0,
      taskDuration: 0.4,
      restTimer: 0,
      driftAngle: Math.random() * Math.PI * 2,
      driftRadius: 20,
      driftSpeed: 1.5
    });
  }
}

function calculateFrontierY(layers: BuildLayer[], currentFrontier: number): number {
  let maxActiveTop = currentFrontier;
  layers.forEach((l) => {
    if ((l.status === STATUS_BUILDING || l.status === STATUS_DONE) && l.docTop > maxActiveTop) {
      maxActiveTop = l.docTop;
    }
  });
  return maxActiveTop;
}

function stepTouring(isTouring: boolean, frontierY: number, speed: number) {
  if (!isTouring) return;
  const targetScroll = Math.max(0, frontierY - window.innerHeight * 0.32);
  const currentScroll = window.scrollY;
  if (Math.abs(targetScroll - currentScroll) > 1.5) {
    window.scrollTo(0, currentScroll + (targetScroll - currentScroll) * 0.08 * speed);
  }
}

function assignSingleJob(layer: BuildLayer, idleAgents: Agent[]) {
  let nearestAgent: Agent | null = null;
  let minDist = Infinity;

  idleAgents.forEach((agent) => {
    if (agent.state === "idle" || agent.state === "entering") {
      const dist = Math.hypot(agent.x - layer.docLeft, agent.y - layer.docTop);
      if (dist < minDist) {
        minDist = dist;
        nearestAgent = agent;
      }
    }
  });

  if (nearestAgent) {
    const a = nearestAgent as Agent;
    layer.status = STATUS_BUILDING;
    layer.assignedAgentId = a.id;
    a.currentLayerId = layer.id;
    a.state = "flying";
    a.targetX = layer.docLeft;
    a.targetY = layer.docTop;
    a.taskProgress = 0;

    if (layer.type === TYPE_HERO_LETTER) {
      a.taskDuration = 0.28;
    } else if (layer.type === TYPE_MEDIA) {
      a.taskDuration = 0.55;
    } else if (layer.type === TYPE_CONTAINER) {
      a.taskDuration = 0.48;
    } else {
      a.taskDuration = 0.38;
    }
  }
}

function stepJobAssignments(layers: BuildLayer[], agents: Agent[], frontierY: number) {
  const availableLayers = layers.filter(
    (l) => l.status === STATUS_PENDING && l.docTop <= frontierY + 320
  );
  const idleAgents = agents.filter((a) => a.state === "idle" || a.state === "entering");

  availableLayers.forEach((layer) => {
    if (layer.status === STATUS_PENDING) {
      assignSingleJob(layer, idleAgents);
    }
  });
}

function stepAgentDrift(agent: Agent, dt: number, frontierY: number) {
  agent.driftAngle += agent.driftSpeed * dt;
  const targetX =
    window.innerWidth * 0.5 + Math.cos(agent.driftAngle) * (window.innerWidth * 0.35);
  const targetY = frontierY + 120 + Math.sin(agent.driftAngle) * agent.driftRadius;
  agent.x += (targetX - agent.x) * (0.08 * (1 + dt));
  agent.y += (targetY - agent.y) * (0.08 * (1 + dt));
  agent.state = "idle";
}

function stepAgentFlight(agent: Agent, dt: number) {
  const dx = agent.targetX - agent.x;
  const dy = agent.targetY - agent.y;
  if (Math.hypot(dx, dy) < 12) {
    agent.state = STATUS_BUILDING;
    agent.taskProgress = 0;
  } else {
    agent.x += dx * Math.min(1, dt * 7.5);
    agent.y += dy * Math.min(1, dt * 7.5);
  }
}

function stepAgentBuilding(
  agent: Agent,
  dt: number,
  layers: BuildLayer[],
  completedCounterRef: React.MutableRefObject<number>
) {
  const layer = layers.find((l) => l.id === agent.currentLayerId);
  if (!layer) {
    agent.state = "idle";
    return;
  }

  agent.taskProgress += dt / agent.taskDuration;
  const progress = Math.min(1, agent.taskProgress);
  applyLayerReveal(layer, progress, agent);

  if (progress >= 1) {
    layer.element.style.opacity = "1";
    layer.element.style.clipPath = "";
    layer.element.style.filter = "";
    layer.element.style.transform = "";
    layer.status = STATUS_DONE;
    completedCounterRef.current += 1;
    agent.state = "resting";
    agent.restTimer = 0.08;
  }
}

function stepAgentResting(agent: Agent, dt: number) {
  agent.restTimer -= dt;
  if (agent.restTimer <= 0) {
    agent.state = "idle";
    agent.currentLayerId = undefined;
  }
}

function stepSingleAgent(
  agent: Agent,
  dt: number,
  layers: BuildLayer[],
  frontierY: number,
  completedCounterRef: React.MutableRefObject<number>
) {
  if (agent.state === "entering" || agent.state === "idle") {
    stepAgentDrift(agent, dt, frontierY);
  } else if (agent.state === "flying") {
    stepAgentFlight(agent, dt);
  } else if (agent.state === STATUS_BUILDING) {
    stepAgentBuilding(agent, dt, layers, completedCounterRef);
  } else if (agent.state === "resting") {
    stepAgentResting(agent, dt);
  }
}

function stepParticlesAndFlight(agents: Agent[], particles: Particle[], dt: number) {
  agents.forEach((agent) => {
    if (agent.state === "flying-away") {
      agent.x += (agent.targetX - agent.x) * Math.min(1, dt * 4.5);
      agent.y += (agent.targetY - agent.y) * Math.min(1, dt * 4.5);

      if (Math.random() < 0.6) {
        particles.push({
          id: Math.random(),
          x: agent.x,
          y: agent.y,
          vx: (Math.random() - 0.5) * 60,
          vy: (Math.random() - 0.5) * 60,
          color: agent.color,
          size: 3 + Math.random() * 3,
          alpha: 1,
          life: 0,
          maxLife: 0.6 + Math.random() * 0.4
        });
      }
    }
  });

  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const p = particles[i];
    p.life += dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.alpha = 1 - p.life / p.maxLife;
    if (p.life >= p.maxLife) {
      particles.splice(i, 1);
    }
  }
}

function checkBuildCompletion(
  completed: number,
  total: number,
  agents: Agent[],
  isCompleteRef: React.MutableRefObject<boolean>,
  startTimeRef: React.MutableRefObject<number>,
  onComplete?: () => void
): number | null {
  if (completed >= total && total > 0 && !isCompleteRef.current) {
    isCompleteRef.current = true;
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove(CLASS_BUILDING_ACTIVE);
    }
    const duration = (performance.now() - startTimeRef.current) / 1000;
    agents.forEach((agent) => {
      agent.state = "flying-away";
      agent.targetX = window.innerWidth + 280 + Math.random() * 200;
      agent.targetY = window.scrollY - 300 - Math.random() * 200;
    });
    if (onComplete) onComplete();
    return duration;
  }
  return null;
}

function stepActiveBuild(
  agents: Agent[],
  layers: BuildLayer[],
  dt: number,
  maxAgents: number,
  completedLayersRef: React.MutableRefObject<number>,
  totalLayersRef: React.MutableRefObject<number>,
  reinforcementTimerRef: React.MutableRefObject<number>,
  frontierYRef: React.MutableRefObject<number>,
  isTouring: boolean,
  speed: number,
  isCompleteRef: React.MutableRefObject<boolean>,
  startTimeRef: React.MutableRefObject<number>,
  onComplete?: () => void
): number | null {
  stepReinforcements(
    agents,
    maxAgents,
    completedLayersRef.current,
    totalLayersRef.current,
    dt,
    reinforcementTimerRef,
    frontierYRef.current
  );

  frontierYRef.current = calculateFrontierY(layers, frontierYRef.current);
  stepTouring(isTouring, frontierYRef.current, speed);
  stepJobAssignments(layers, agents, frontierYRef.current);

  agents.forEach((agent) =>
    stepSingleAgent(agent, dt, layers, frontierYRef.current, completedLayersRef)
  );

  return checkBuildCompletion(
    completedLayersRef.current,
    totalLayersRef.current,
    agents,
    isCompleteRef,
    startTimeRef,
    onComplete
  );
}

export default function BuildAnimation({
  onBuildComplete,
  triggerRebuild
}: BuildAnimationProps) {
  const [isBypassed, setIsBypassed] = useState(() => {
    if (typeof window === "undefined") return true;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isNoBuild = window.location.search.includes("nobuild");
    const hasBuildParam = window.location.search.includes("build=true");
    if (isReduced || isNoBuild) return true;
    return !hasBuildParam;
  });
  const [isComplete, setIsComplete] = useState(false);
  const [isTouring, setIsTouring] = useState(true);
  const [speed, setSpeed] = useState<number>(1);
  const [isPaused, setIsPaused] = useState(false);
  const [buildDuration, setBuildDuration] = useState(0);

  const [layersCount, setLayersCount] = useState({ total: 0, completed: 0 });
  const [activeAgents, setActiveAgents] = useState<Agent[]>([]);
  const [activeParticles, setActiveParticles] = useState<Particle[]>([]);
  const [scrollYState, setScrollYState] = useState(0);
  const [frontierYState, setFrontierYState] = useState(0);
  const [registrationMarks, setRegistrationMarks] = useState<RegistrationMark[]>([]);

  // Simulation state refs
  const layersRef = useRef<BuildLayer[]>([]);
  const agentsRef = useRef<Agent[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const isTouringRef = useRef(true);
  const speedRef = useRef(1);
  const isPausedRef = useRef(false);
  const isCompleteRef = useRef(false);
  const buildStartTimeRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const reinforcementTimerRef = useRef<number>(0);
  const maxAgentsRef = useRef(24);
  const frontierYRef = useRef(0);
  const animFrameIdRef = useRef<number>(0);
  const totalLayersRef = useRef(0);
  const completedLayersRef = useRef(0);

  isTouringRef.current = isTouring;
  speedRef.current = speed;
  isPausedRef.current = isPaused;

  // Clean inline styles from all elements
  const cleanAllLayers = useCallback(() => {
    layersRef.current.forEach((layer) => {
      if (layer.element) {
        layer.element.style.opacity = "";
        layer.element.style.clipPath = "";
        layer.element.style.filter = "";
        layer.element.style.transform = "";
        layer.element.style.visibility = "";
      }
    });
  }, []);

  // Check bypass state
  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isNoBuild = window.location.search.includes("nobuild");
    const hasBuildParam = window.location.search.includes("build=true");

    if ((isReduced || isNoBuild || !hasBuildParam) && (!triggerRebuild || triggerRebuild === 0)) {
      setIsBypassed(true);
      document.documentElement.classList.remove(CLASS_BUILD_PENDING);
      document.documentElement.classList.remove(CLASS_BUILDING_ACTIVE);
      cleanAllLayers();
      if (onBuildComplete) onBuildComplete();
    }
    return undefined;
  }, [cleanAllLayers, onBuildComplete, triggerRebuild]);

  // Handle triggered rebuild
  useEffect(() => {
    if (triggerRebuild && triggerRebuild > 0) {
      setIsBypassed(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsTouring(true);
    }
  }, [triggerRebuild]);

  // Layer discovery
  const collectDocumentLayers = useCallback(() => {
    const rootEl = document.getElementById("root") || document.body;
    const allCandidates = rootEl.querySelectorAll<HTMLElement>(
      'h1, h2, h3, h4, h5, h6, p, img, svg, video, canvas, a, button, li, [data-build="hero-letter"], [data-build="container"], [data-build="media"], [data-build="text"], [data-build="interactive"], .b'
    );

    const collectedLayers: BuildLayer[] = [];
    const collectedElements = new Set<HTMLElement>();

    allCandidates.forEach((el, index) => {
      if (el.querySelector(`[${ATTR_DATA_BUILD}="${TYPE_HERO_LETTER}"]`)) {
        return;
      }

      let parent = el.parentElement;
      let isInsideNonContainer = false;
      while (parent && parent !== rootEl) {
        if (
          collectedElements.has(parent) &&
          !parent.classList.contains("b") &&
          parent.getAttribute(ATTR_DATA_BUILD) !== TYPE_CONTAINER
        ) {
          isInsideNonContainer = true;
          break;
        }
        parent = parent.parentElement;
      }

      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0 || isInsideNonContainer) {
        return;
      }

      collectedElements.add(el);
      const docTop = rect.top + window.scrollY;
      const docLeft = rect.left + window.scrollX;
      const type = determineLayerType(el);
      const tagLabel = buildTagLabel(el, rect);

      el.style.opacity = "0";

      collectedLayers.push({
        id: `layer-${index}-${Math.random().toString(36).slice(2, 6)}`,
        element: el,
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        },
        docTop,
        docLeft,
        type,
        tagLabel,
        status: STATUS_PENDING,
        domIndex: index
      });
    });

    collectedLayers.sort((a, b) => {
      const bandA = Math.floor(a.docTop / 60);
      const bandB = Math.floor(b.docTop / 60);
      if (bandA !== bandB) return bandA - bandB;
      return a.domIndex - b.domIndex;
    });

    return collectedLayers;
  }, []);

  // Initialize Build
  const initBuild = useCallback(() => {
    if (typeof window === "undefined") return;

    document.documentElement.classList.remove(CLASS_BUILD_PENDING);
    document.documentElement.classList.add(CLASS_BUILDING_ACTIVE);

    const isMobile = window.innerWidth < 768;
    maxAgentsRef.current = isMobile ? 8 : 26;
    const initialAgentCount = isMobile ? 6 : 12;

    const collectedLayers = collectDocumentLayers();
    layersRef.current = collectedLayers;
    totalLayersRef.current = collectedLayers.length;
    completedLayersRef.current = 0;
    setLayersCount({ total: collectedLayers.length, completed: 0 });

    const docHeight = Math.max(document.body.scrollHeight, 2400);
    const marks: RegistrationMark[] = [];
    for (let y = 140; y < docHeight; y += 320) {
      for (let x = 80; x < window.innerWidth - 60; x += 260) {
        marks.push({
          id: `mark-${x}-${y}`,
          x: x + (Math.random() * 40 - 20),
          y: y + (Math.random() * 40 - 20)
        });
      }
    }
    setRegistrationMarks(marks);

    const agents: Agent[] = [];
    for (let i = 0; i < initialAgentCount; i += 1) {
      const roster = AGENT_ROSTER[i % AGENT_ROSTER.length];
      agents.push({
        id: `agent-${i}-${roster.name}`,
        name: roster.name,
        color: roster.color,
        x: -70 - Math.random() * 120,
        y: Math.random() * (window.innerHeight * 0.45) + 60,
        targetX: Math.random() * (window.innerWidth * 0.6) + 100,
        targetY: Math.random() * 200 + 100,
        state: "entering",
        taskProgress: 0,
        taskDuration: 0.4,
        restTimer: 0,
        driftAngle: Math.random() * Math.PI * 2,
        driftRadius: 20,
        driftSpeed: 1.4
      });
    }

    agentsRef.current = agents;
    setActiveAgents([...agents]);
    frontierYRef.current = 0;
    buildStartTimeRef.current = performance.now();
    lastTimeRef.current = performance.now();
    reinforcementTimerRef.current = 0;
    isCompleteRef.current = false;
    setIsComplete(false);
  }, [collectDocumentLayers]);

  // Skip
  const handleSkip = useCallback(() => {
    cleanAllLayers();
    layersRef.current.forEach((l) => {
      l.status = STATUS_DONE;
    });
    completedLayersRef.current = totalLayersRef.current;
    setLayersCount({ total: totalLayersRef.current, completed: totalLayersRef.current });
    isCompleteRef.current = true;
    setIsComplete(true);
    document.documentElement.classList.remove(CLASS_BUILDING_ACTIVE);
    setBuildDuration((performance.now() - buildStartTimeRef.current) / 1000);
    if (onBuildComplete) onBuildComplete();
  }, [cleanAllLayers, onBuildComplete]);

  // Replay
  const handleReplay = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsTouring(true);
    initBuild();
  }, [initBuild]);

  const handleFrameStep = useCallback(
    (agents: Agent[], layers: BuildLayer[], dt: number, frameCount: number) => {
      if (!isCompleteRef.current && dt > 0) {
        const duration = stepActiveBuild(
          agents,
          layers,
          dt,
          maxAgentsRef.current,
          completedLayersRef,
          totalLayersRef,
          reinforcementTimerRef,
          frontierYRef,
          isTouringRef.current,
          speedRef.current,
          isCompleteRef,
          buildStartTimeRef,
          onBuildComplete
        );

        if (duration !== null) {
          setIsComplete(true);
          setBuildDuration(duration);
        }
      }

      if (isCompleteRef.current && dt > 0) {
        stepParticlesAndFlight(agents, particlesRef.current, dt);
      }

      if (frameCount % 2 === 0) {
        setActiveAgents([...agents]);
        setActiveParticles([...particlesRef.current]);
        setLayersCount({
          total: totalLayersRef.current,
          completed: completedLayersRef.current
        });
        setScrollYState(window.scrollY);
        setFrontierYState(frontierYRef.current);
      }
    },
    [onBuildComplete]
  );

  // Main Loop
  useEffect(() => {
    if (isBypassed) {
      return undefined;
    }

    initBuild();

    const handleInterrupt = () => {
      if (isTouringRef.current) {
        isTouringRef.current = false;
        setIsTouring(false);
      }
    };

    window.addEventListener("wheel", handleInterrupt, { passive: true });
    window.addEventListener("touchstart", handleInterrupt, { passive: true });

    let frameCount = 0;

    const loop = (now: number) => {
      const rawDelta = Math.min(0.08, (now - lastTimeRef.current) / 1000);
      lastTimeRef.current = now;
      const dt = isPausedRef.current ? 0 : rawDelta * speedRef.current;
      frameCount += 1;

      const agents = agentsRef.current;
      const layers = layersRef.current;

      handleFrameStep(agents, layers, dt, frameCount);

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener("wheel", handleInterrupt);
      window.removeEventListener("touchstart", handleInterrupt);
    };
  }, [handleFrameStep, initBuild, isBypassed]);

  if (isBypassed) {
    return null;
  }

  const activeBuildingLayers = layersRef.current.filter((l) => l.status === STATUS_BUILDING);

  return (
    <>
      <BuildRulers
        scrollY={scrollYState}
        frontierY={frontierYState}
        isComplete={isComplete}
        registrationMarks={registrationMarks}
      />

      <div
        className="pointer-events-none absolute inset-0 overflow-visible z-[9990]"
        style={{
          width: "100%",
          height: `${Math.max(document.body.scrollHeight, 2400)}px`
        }}>
        {activeBuildingLayers.map((layer) => {
          const agent = activeAgents.find((a) => a.id === layer.assignedAgentId);
          if (!agent) return null;

          return (
            <div
              key={`box-${layer.id}`}
              style={{
                position: "absolute",
                left: `${layer.docLeft}px`,
                top: `${layer.docTop}px`,
                width: `${layer.rect.width}px`,
                height: `${layer.rect.height}px`,
                borderColor: agent.color,
                backgroundColor: `${agent.color}15`
              }}
              className="border border-solid transition-opacity duration-150 select-none">
              <span
                className="absolute -top-1 -left-1 w-2 h-2 border border-white"
                style={{ backgroundColor: agent.color }}
              />
              <span
                className="absolute -top-1 -right-1 w-2 h-2 border border-white"
                style={{ backgroundColor: agent.color }}
              />
              <span
                className="absolute -bottom-1 -left-1 w-2 h-2 border border-white"
                style={{ backgroundColor: agent.color }}
              />
              <span
                className="absolute -bottom-1 -right-1 w-2 h-2 border border-white"
                style={{ backgroundColor: agent.color }}
              />

              <div
                className="absolute -top-5 left-0 flex items-center gap-1 px-1.5 py-0.5 rounded-xs font-mono text-[9px] font-bold text-white shadow-sm whitespace-nowrap"
                style={{ backgroundColor: agent.color }}>
                <span>{layer.tagLabel}</span>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/20 overflow-hidden">
                <div
                  className="h-full transition-all duration-75"
                  style={{
                    width: `${Math.min(100, Math.max(0, agent.taskProgress * 100))}%`,
                    backgroundColor: agent.color
                  }}
                />
              </div>
            </div>
          );
        })}

        {activeParticles.map((p) => (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.x}px`,
              top: `${p.y}px`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              opacity: p.alpha,
              borderRadius: "50%",
              boxShadow: `0 0 6px ${p.color}`,
              transform: "translate(-50%, -50%)"
            }}
          />
        ))}

        {activeAgents.map((agent) => (
          <div
            key={agent.id}
            style={{
              position: "absolute",
              left: `${agent.x}px`,
              top: `${agent.y}px`,
              transform: "translate3d(0, 0, 0)",
              zIndex: 9992
            }}
            className="flex items-start select-none transition-transform duration-75">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))" }}>
              <path
                d="M3 3L10.07 20.97L13.58 13.58L20.97 10.07L3 3Z"
                fill={agent.color}
                stroke="#ffffff"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>

            <div
              className="ml-1 -mt-0.5 flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-md"
              style={{
                backgroundColor: agent.color,
                filter: "drop-shadow(0px 2px 5px rgba(0,0,0,0.4))"
              }}>
              <span>{agent.name}</span>
            </div>
          </div>
        ))}
      </div>

      <BuildControlBar
        agents={activeAgents}
        totalLayers={layersCount.total}
        completedLayers={layersCount.completed}
        isTouring={isTouring}
        onToggleTouring={() => setIsTouring((prev) => !prev)}
        speed={speed}
        onChangeSpeed={() => setSpeed((prev) => getNextSpeed(prev))}
        isPaused={isPaused}
        onTogglePause={() => setIsPaused((prev) => !prev)}
        onSkip={handleSkip}
        isComplete={isComplete}
        buildDuration={buildDuration}
        onReplay={handleReplay}
      />
    </>
  );
}
