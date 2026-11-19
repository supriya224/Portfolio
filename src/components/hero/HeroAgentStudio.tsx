import {
  Activity,
  Bot,
  Layers,
  Zap
} from "lucide-react";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";

interface AgentDef {
  id: string;
  name: string;
  role: string;
  color: string;
  task: string;
  tokenTarget: string;
  badge: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

const ACTIVE_TAB_CLASS = "bg-[#ccff00] text-black font-semibold shadow-sm";
const INACTIVE_TAB_CLASS = "text-neutral-400 hover:text-white";
const SPEC_CARD_CLASS = "rounded border border-white/10 bg-white/[0.02] p-3";
const SPEC_SUBTITLE_CLASS = "text-[10px] text-neutral-500 uppercase";
const TOKEN_CARD_INACTIVE = "border-white/[0.08] bg-black/30 hover:border-white/20";

const INITIAL_HERO_AGENTS: AgentDef[] = [
  {
    id: "nova",
    name: "Nova",
    role: "Lead UX Architect",
    color: "#ccff00", // Electric Cyber Lime
    task: "Validating information density & visual hierarchy",
    tokenTarget: "h1.typography · 132px (Display)",
    badge: "01 // UX ARCHITECTURE",
    x: 80,
    y: 50,
    targetX: 180,
    targetY: 90
  },
  {
    id: "pixel",
    name: "Pixel",
    role: "3D & Telemetry Engineer",
    color: "#00f0ff", // Electric Cyan
    task: "Optimizing 60 FPS Three.js vehicle polygon budget",
    tokenTarget: "mesh.xray · 48.2k polygons",
    badge: "02 // 3D DIAGNOSTICS",
    x: 340,
    y: 110,
    targetX: 420,
    targetY: 60
  },
  {
    id: "echo",
    name: "Echo",
    role: "Founding Systems Lead",
    color: "#a855f7", // Radiant Purple
    task: "Auditing multi-role permission matrix: Admin · PM · User",
    tokenTarget: "advitiix.roles · 4 ecosystems",
    badge: "03 // FOUNDING PRODUCT",
    x: 200,
    y: 170,
    targetX: 280,
    targetY: 190
  },
  {
    id: "spark",
    name: "Spark",
    role: "Frontend Synthesizer",
    color: "#f59e0b", // Solar Amber
    task: "Synthesizing React 18+ & Tailwind token primitives",
    tokenTarget: "react.components · 100% bespoke",
    badge: "04 // CODE SYNTHESIS",
    x: 480,
    y: 160,
    targetX: 520,
    targetY: 120
  }
];

const AGENT_TELEMETRY_LOGS = [
  { id: "log-1", agent: "Nova", text: "Token typography scale validated: Fluid 132px -> 48px responsive.", status: "VERIFIED" },
  { id: "log-2", agent: "Pixel", text: "Real-time WebGL polygon bottleneck resolved: 60 FPS locked.", status: "OPTIMIZED" },
  { id: "log-3", agent: "Echo", text: "Advitiix 0->1 multi-role flows synced: Admin, PM, User & Kiosk.", status: "DEPLOYED" },
  { id: "log-4", agent: "Spark", text: "Volvo Partner Connect 2.0 analytics components tokenized.", status: "COMPILED" },
  { id: "log-5", agent: "Nova", text: "Contrast ratio audited: 15.4:1 against deep obsidian (AAA PASS).", status: "VERIFIED" }
];

interface HeroAgentStudioProps {
  onTriggerFullRebuild: () => void;
}

export function HeroAgentStudio({ onTriggerFullRebuild }: HeroAgentStudioProps) {
  const [agents, setAgents] = useState<AgentDef[]>(INITIAL_HERO_AGENTS);
  const [activeTab, setActiveTab] = useState<"agents" | "blueprint" | "telemetry">("agents");
  const [selectedAgentId, setSelectedAgentId] = useState<string>("nova");
  const [logIndex, setLogIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Cycle telemetry logs
  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % AGENT_TELEMETRY_LOGS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  // Autonomous agent movement loop inside the hero canvas
  useEffect(() => {
    const interval = setInterval(() => {
      setAgents((prevAgents) =>
        prevAgents.map((ag) => {
          const containerWidth = containerRef.current?.clientWidth || 600;
          const containerHeight = containerRef.current?.clientHeight || 280;

          const newTargetX = Math.max(40, Math.min(containerWidth - 140, ag.targetX + (Math.random() * 80 - 40)));
          const newTargetY = Math.max(30, Math.min(containerHeight - 80, ag.targetY + (Math.random() * 60 - 30)));

          return {
            ...ag,
            x: ag.targetX,
            y: ag.targetY,
            targetX: newTargetX,
            targetY: newTargetY
          };
        })
      );
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  const selectedAgent = agents.find((a) => a.id === selectedAgentId) || agents[0];

  const handleSpotlight = useCallback((agentId: string) => {
    setSelectedAgentId(agentId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mt-12 w-full overflow-hidden rounded-2xl border border-black/10 bg-[#0e0e11] text-white shadow-2xl transition-all duration-300 dark:border-white/10 dark:bg-[#0c0c0e]">
      {/* Top Header Bar of the Agent Studio */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] bg-white/[0.02] px-5 py-3.5 backdrop-blur-md">
        {/* Left: Swarm Status Indicator */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <div className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ccff00] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ccff00]" />
          </div>
          <span className="font-bold tracking-wider text-white">SWARM_WORKSPACE</span>
          <span className="hidden sm:inline text-neutral-500">|</span>
          <span className="hidden sm:inline font-mono text-[11px] text-[#ccff00]">
            4 AUTONOMOUS AGENTS COLLABORATING
          </span>
        </div>

        {/* Right: Tab Mode Switcher + Full Rebuild Action */}
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-white/10 bg-black/40 p-0.5 text-xs font-mono">
            <button
              type="button"
              onClick={() => setActiveTab("agents")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 transition-all ${
                activeTab === "agents" ? ACTIVE_TAB_CLASS : INACTIVE_TAB_CLASS
              }`}>
              <Bot size={13} />
              <span>Agents</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("blueprint")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 transition-all ${
                activeTab === "blueprint" ? ACTIVE_TAB_CLASS : INACTIVE_TAB_CLASS
              }`}>
              <Layers size={13} />
              <span>Blueprint</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("telemetry")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 transition-all ${
                activeTab === "telemetry" ? ACTIVE_TAB_CLASS : INACTIVE_TAB_CLASS
              }`}>
              <Activity size={13} />
              <span>Telemetry</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onTriggerFullRebuild}
            className="group flex items-center gap-1.5 rounded-lg border border-[#ccff00]/40 bg-[#ccff00]/10 px-3 py-1.5 font-mono text-xs font-semibold text-[#ccff00] transition-all hover:bg-[#ccff00] hover:text-black hover:shadow-[0_0_16px_rgba(204,255,0,0.4)]"
            title="Trigger full-page multiplayer build animation">
            <Zap size={13} className="transition-transform group-hover:scale-110" />
            <span className="hidden md:inline">Full Swarm Rebuild</span>
            <span className="md:hidden">Rebuild</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative min-h-[290px] sm:min-h-[320px] p-6 bg-grid-pattern overflow-hidden">
        {/* Subtle coordinate watermark */}
        <div className="pointer-events-none absolute right-4 top-4 font-mono text-[10px] text-neutral-600">
          SPOTLIGHT: {selectedAgent.name} ({selectedAgent.role}) · LATENCY: 0.8ms
        </div>

        {/* View 1: Autonomous Agent Swarm Canvas */}
        {activeTab === "agents" && (
          <div className="relative h-full w-full">
            {/* Interactive Token Inspection Points on Canvas */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-3xl mb-12">
              <div
                className={`rounded-xl border p-4 transition-all duration-300 ${
                  selectedAgentId === "nova"
                    ? "border-[#ccff00] bg-[#ccff00]/10 shadow-[0_0_20px_rgba(204,255,0,0.15)]"
                    : TOKEN_CARD_INACTIVE
                }`}>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#ccff00] font-bold">01 // PRODUCT DESIGN</span>
                  <span className="text-[10px] text-neutral-400">FOUNDING 0→1</span>
                </div>
                <h4 className="mt-2 text-sm font-bold text-white">End-to-End Product Architecture</h4>
                <p className="mt-1 font-mono text-[11px] text-neutral-400 leading-relaxed">
                  Sole designer &amp; dev for Advitiix: Admin, PM, User, and Food Receptionist portals.
                </p>
              </div>

              <div
                className={`rounded-xl border p-4 transition-all duration-300 ${
                  selectedAgentId === "pixel"
                    ? "border-[#00f0ff] bg-[#00f0ff]/10 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                    : TOKEN_CARD_INACTIVE
                }`}>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#00f0ff] font-bold">02 // 3D &amp; TELEMETRY</span>
                  <span className="text-[10px] text-neutral-400">60 FPS WEBGL</span>
                </div>
                <h4 className="mt-2 text-sm font-bold text-white">Real-Time Vehicle Diagnostics</h4>
                <p className="mt-1 font-mono text-[11px] text-neutral-400 leading-relaxed">
                  Engineered 3D Car &amp; X-Ray component inspection solving polygon rendering bottlenecks.
                </p>
              </div>

              <div
                className={`rounded-xl border p-4 transition-all duration-300 ${
                  selectedAgentId === "echo"
                    ? "border-[#a855f7] bg-[#a855f7]/10 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                    : TOKEN_CARD_INACTIVE
                }`}>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#a855f7] font-bold">03 // ENTERPRISE DATA</span>
                  <span className="text-[10px] text-neutral-400">VOLVO 2.0</span>
                </div>
                <h4 className="mt-2 text-sm font-bold text-white">Volvo Partner Connect 2.0</h4>
                <p className="mt-1 font-mono text-[11px] text-neutral-400 leading-relaxed">
                  Mission-critical dealer operation dashboards and analytics for high-volume decisions.
                </p>
              </div>
            </div>

            {/* Dynamic Flying Autonomous Agents with SVG Cursors */}
            {agents.map((agent) => {
              const isSelected = selectedAgentId === agent.id;
              return (
                <button
                  type="button"
                  key={agent.id}
                  onClick={() => handleSpotlight(agent.id)}
                  style={{
                    transform: `translate(${agent.x}px, ${agent.y}px)`,
                    transition: "transform 2.2s cubic-bezier(0.25, 1, 0.5, 1)"
                  }}
                  className={`absolute top-0 left-0 text-left bg-transparent border-0 p-0 cursor-pointer select-none transition-opacity duration-300 ${
                    isSelected ? "z-30 scale-105" : "z-10 opacity-85 hover:opacity-100"
                  }`}>
                  {/* SVG Cursor Pointer */}
                  <div className="relative">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                      <path
                        d="M3 3L10.5 21L13.8 13.8L21 10.5L3 3Z"
                        fill={agent.color}
                        stroke="#ffffff"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* Agent Name Tag Badge */}
                    <div
                      style={{ backgroundColor: agent.color }}
                      className="absolute left-4 top-4 flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-mono font-bold text-black shadow-lg whitespace-nowrap">
                      <span>{agent.name}</span>
                      <span className="opacity-75 text-[8px]">•</span>
                      <span className="text-[9px] font-normal">{agent.role.split(" ")[0]}</span>
                    </div>

                    {/* Micro inspection box attached to agent */}
                    <div
                      style={{ borderColor: agent.color }}
                      className="absolute -top-10 -left-6 border border-dashed rounded px-2 py-0.5 bg-black/80 font-mono text-[9px] whitespace-nowrap text-white backdrop-blur-sm pointer-events-none">
                      <span className="text-neutral-400">target: </span>
                      <span style={{ color: agent.color }}>{agent.tokenTarget}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* View 2: Architectural Blueprint Specs */}
        {activeTab === "blueprint" && (
          <div className="space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[#ccff00] font-bold">SYSTEM_SPECIFICATION // MATRIX</span>
              <span className="text-neutral-400">VERSION 2.6.4</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className={SPEC_CARD_CLASS}>
                <span className={SPEC_SUBTITLE_CLASS}>ROLE ARCHITECTURE</span>
                <p className="mt-1 font-bold text-white">4 Distinct Portals</p>
                <p className="text-[11px] text-neutral-400">Admin, PM, User, Kiosk</p>
              </div>
              <div className={SPEC_CARD_CLASS}>
                <span className={SPEC_SUBTITLE_CLASS}>GRAPHICS ENGINE</span>
                <p className="mt-1 font-bold text-[#00f0ff]">Three.js / WebGL</p>
                <p className="text-[11px] text-neutral-400">60 FPS Real-Time Mesh</p>
              </div>
              <div className={SPEC_CARD_CLASS}>
                <span className={SPEC_SUBTITLE_CLASS}>DESIGN SYSTEM</span>
                <p className="mt-1 font-bold text-[#a855f7]">Token-Driven Theme</p>
                <p className="text-[11px] text-neutral-400">Adaptive Dark &amp; Light</p>
              </div>
              <div className={SPEC_CARD_CLASS}>
                <span className={SPEC_SUBTITLE_CLASS}>FRONTEND ARCHITECTURE</span>
                <p className="mt-1 font-bold text-[#f59e0b]">React 18 + TypeScript</p>
                <p className="text-[11px] text-neutral-400">100% Handcrafted Code</p>
              </div>
            </div>
          </div>
        )}

        {/* View 3: Live Swarm Telemetry Terminal */}
        {activeTab === "telemetry" && (
          <div className="font-mono text-xs space-y-2">
            <div className="flex items-center justify-between text-[11px] text-neutral-400 border-b border-white/10 pb-2">
              <span>STREAM // AGENT_COMMUNICATION_BUS</span>
              <span className="text-[#ccff00]">LIVE_FEEDS: 4</span>
            </div>
            <div className="space-y-1.5 font-mono text-[11px]">
              {AGENT_TELEMETRY_LOGS.map((log) => (
                <div
                  key={log.id}
                  className="flex items-center justify-between rounded bg-white/[0.02] px-3 py-1.5 border border-white/[0.04]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#ccff00] font-bold">[{log.agent}]</span>
                    <span className="text-neutral-300">{log.text}</span>
                  </div>
                  <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] text-[#ccff00]">
                    {log.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Agent Selector & Live Ticker Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/[0.08] bg-white/[0.02] px-5 py-3 text-xs font-mono">
        {/* Agent Badges with Click-to-Spotlight */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] text-neutral-500 uppercase tracking-widest">AGENT_ROSTER:</span>
          {agents.map((ag) => (
            <button
              key={ag.id}
              type="button"
              onClick={() => handleSpotlight(ag.id)}
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all ${
                selectedAgentId === ag.id
                  ? "border border-white/40 text-black shadow-md"
                  : "border border-white/10 bg-white/5 text-neutral-400 hover:text-white"
              }`}
              style={{
                backgroundColor: selectedAgentId === ag.id ? ag.color : undefined
              }}>
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: selectedAgentId === ag.id ? "#000000" : ag.color }}
              />
              <span>{ag.name}</span>
            </button>
          ))}
        </div>

        {/* Live dynamic telemetry ticker */}
        <div className="flex items-center gap-2 text-neutral-400 text-[11px] truncate max-w-md">
          <span className="text-[#ccff00] font-bold">LIVE:</span>
          <span className="text-neutral-300 truncate">
            {AGENT_TELEMETRY_LOGS[logIndex].agent} · {AGENT_TELEMETRY_LOGS[logIndex].text}
          </span>
        </div>
      </div>
    </div>
  );
}

export default memo(HeroAgentStudio);
