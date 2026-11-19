import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowLeftRight } from "lucide-react";

interface CompareSliderProps {
  triggerSweep?: boolean;
}

export default function InteractiveCompareSlider({ triggerSweep = false }: CompareSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-sweep once when triggered to demonstrate draggability
  useEffect(() => {
    if (!triggerSweep) {
      return undefined;
    }

    let startTime: number | null = null;
    const duration = 1400; // ms

    const animateSweep = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min(1, elapsed / duration);

      // Sweep waveform: 50 -> 20 -> 80 -> 50
      const sweepValue = 50 + Math.sin(t * Math.PI * 2) * 30;
      setSliderPosition(Math.max(10, Math.min(90, sweepValue)));

      if (t < 1) {
        requestAnimationFrame(animateSweep);
      } else {
        setSliderPosition(50);
      }
    };

    const frame = requestAnimationFrame(animateSweep);
    return () => {
      cancelAnimationFrame(frame);
    };
  }, [triggerSweep]);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(5, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(95, prev + 5));
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || !e.touches[0]) return;
      updatePosition(e.touches[0].clientX);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label="Interactive before after compare slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={5}
      aria-valuemax={95}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className="b relative h-64 sm:h-80 w-full overflow-hidden rounded-xl border border-black/10 dark:border-white/15 select-none cursor-ew-resize group shadow-xl bg-[#0e0e0e]"
      data-build="container">
      {/* Background (Right side): Production High-Fidelity View */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#121212] to-[#1a1a1a] text-white">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-[#ccff00] font-bold">
            02 // PRODUCTION RENDER
          </span>
          <span className="rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-[10px] text-white">
            60 FPS · WEBGL &amp; THREE.JS
          </span>
        </div>

        <div className="max-w-md">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Interactive 3D Diagnostics &amp; Telemetry
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
            Real-time multi-angle model inspection, live polygon rendering optimizations, and
            assembled thermal telemetry.
          </p>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px] text-neutral-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ccff00]" />
          <span>PRODUCTION READY ARCHITECTURE</span>
        </div>
      </div>

      {/* Foreground (Left side): Wireframe / Systems Schematic View with clip-path */}
      <div
        className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 bg-neutral-900 text-neutral-100 border-r border-[#ccff00]"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}>
        {/* Subtle schematic grid background */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ccff00 1px, transparent 1px), linear-gradient(90deg, #ccff00 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="relative flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-[#ccff00] font-bold">
            01 // WIREFRAME SCHEMATIC
          </span>
          <span className="rounded-full border border-[#ccff00]/40 bg-[#ccff00]/10 px-2.5 py-0.5 font-mono text-[10px] text-[#ccff00]">
            BLUEPRINT · ZERO DEPENDENCY
          </span>
        </div>

        <div className="relative max-w-md">
          <h3 className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-neutral-100">
            SYSTEM ARCHITECTURE &amp; TOKENS
          </h3>
          <p className="mt-2 text-xs sm:text-sm font-mono text-neutral-400 leading-relaxed">
            From mental model decomposition and ergonomics to modular state management and strict
            TypeScript tokens.
          </p>
        </div>

        <div className="relative flex items-center gap-3 font-mono text-[11px] text-neutral-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ccff00]" />
          <span>EARLY CONCEPT WIREFRAME SPEC</span>
        </div>
      </div>

      {/* Draggable Divider Handle Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-[#ccff00] pointer-events-none shadow-[0_0_12px_#ccff00]"
        style={{ left: `${sliderPosition}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-[#ccff00] text-black shadow-xl transition-transform group-hover:scale-110">
          <ArrowLeftRight size={14} strokeWidth={2.5} />
        </div>
      </div>

      {/* Micro instructions badge */}
      <div className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-neutral-400 backdrop-blur-sm pointer-events-none">
        DRAG TO REVEAL ↔
      </div>
    </div>
  );
}
