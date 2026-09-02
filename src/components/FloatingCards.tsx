import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type FloatingCardItem = {
  id: string;
  content: ReactNode;
  alt?: boolean;
};

type FloatingCardsProps = {
  cards: FloatingCardItem[];
  className?: string;
  floatDistance?: number;
  speed?: number;
  tilt?: number;
  gap?: number;
  radius?: number;
};

type CardMotion = {
  x: number;
  y: number;
  rotateX: number;
  rotateY: number;
};

type UseFloatingCardsOptions = {
  count: number;
  floatDistance: number;
  speed: number;
  tilt: number;
};

const DEFAULTS = {
  floatDistance: 10,
  speed: 1.1,
  tilt: 9,
};

function useFloatingCards({
  count,
  floatDistance,
  speed,
  tilt,
}: UseFloatingCardsOptions): CardMotion[] {
  const [motion, setMotion] = useState<CardMotion[]>(() =>
    Array.from({ length: count }, () => ({
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
    })),
  );

  const pointerRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    reducedMotionRef.current = mediaQuery.matches;

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      reducedMotionRef.current = event.matches;

      if (event.matches) {
        setMotion(
          Array.from({ length: count }, () => ({
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
          })),
        );
      }
    };

    mediaQuery.addEventListener("change", handleMotionPreference);

    if (reducedMotionRef.current) {
      return () => {
        mediaQuery.removeEventListener("change", handleMotionPreference);
      };
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = {
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      };
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = (timestamp - startTimeRef.current) / 1000;
      const { x: pointerX, y: pointerY } = pointerRef.current;

      const nextMotion = Array.from(
        { length: count },
        (_, index): CardMotion => {
          /*
           * Each card gets a slightly different phase/frequency.
           * This prevents the stack from looking mechanically synchronized.
           */
          const phase = index * 0.85;
          const frequency = 0.8 + index * 0.08;

          const y =
            Math.sin(elapsed * speed * frequency + phase) *
            floatDistance;

          const x =
            Math.sin(elapsed * speed * 0.65 + phase * 1.3) *
            floatDistance *
            0.35;

          return {
            x,
            y,
            rotateX: -pointerY * tilt,
            rotateY: pointerX * tilt,
          };
        },
      );

      setMotion(nextMotion);

      frameRef.current = window.requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      mediaQuery.removeEventListener("change", handleMotionPreference);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = null;
      startTimeRef.current = null;
    };
  }, [count, floatDistance, speed, tilt]);

  return motion;
}

export function FloatingCards({
  cards,
  className = "",
  floatDistance = DEFAULTS.floatDistance,
  speed = DEFAULTS.speed,
  tilt = DEFAULTS.tilt,
  gap = 16,
  radius = 12,
}: FloatingCardsProps) {
  const motion = useFloatingCards({
    count: cards.length,
    floatDistance,
    speed,
    tilt,
  });

  return (
    <div
      className={className}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap,
        perspective: "1000px",
        width: "100%",
      }}
    >
      {cards.map((card, index) => {
        const transform = `
          translate3d(
            ${motion[index]?.x ?? 0}px,
            ${motion[index]?.y ?? 0}px,
            0
          )
          rotateX(${motion[index]?.rotateX ?? 0}deg)
          rotateY(${motion[index]?.rotateY ?? 0}deg)
        `;

        const style: CSSProperties = {
          position: "relative",
          width: "10%",
          border: "1px solid #D8D8D2",
          borderRadius: `${radius}px`,
          background: card.alt ? "#EFEFEA" : "#FFFFFF",
          transform,
          transformStyle: "preserve-3d",
          transition:
            "transform 320ms cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform",
          fontFamily: '"Bricolage Grotesque", sans-serif',
          overflow: "hidden",
        };

        return (
          <article
            key={card.id}
            style={style}
            aria-label={`Floating card ${index + 1}`}
          >
            {card.content}
          </article>
        );
      })}
    </div>
  );
}