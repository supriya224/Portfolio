import { memo, useEffect, useState } from "react";
import { RegistrationMark } from "./buildAnimationTypes";

interface BuildRulersProps {
  scrollY: number;
  frontierY: number;
  isComplete: boolean;
  registrationMarks: RegistrationMark[];
}

function getTickHeight(isMajor: boolean, isMid: boolean) {
  if (isMajor) return 10;
  if (isMid) return 15;
  return 18;
}

function getTickClass(isMajor: boolean, isMid: boolean) {
  if (isMajor) return "text-white/60";
  if (isMid) return "text-white/35";
  return "text-white/15";
}

function BuildRulersComponent({
  scrollY,
  frontierY,
  isComplete,
  registrationMarks
}: BuildRulersProps) {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1440,
    height: typeof window !== "undefined" ? window.innerHeight : 900
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate top ruler ticks
  const topTicks: { x: number; isMajor: boolean; isMid: boolean; label?: number }[] = [];
  const maxTop = Math.ceil(dimensions.width / 10) * 10;
  for (let x = 0; x <= maxTop; x += 10) {
    const isMajor = x % 100 === 0;
    const isMid = !isMajor && x % 50 === 0;
    topTicks.push({
      x,
      isMajor,
      isMid,
      label: isMajor ? x : undefined
    });
  }

  // Generate left ruler ticks based on scrollY
  const leftTicks: { y: number; isMajor: boolean; isMid: boolean; label?: number }[] = [];
  const startDocY = Math.floor(scrollY / 10) * 10;
  const endDocY = startDocY + dimensions.height + 40;
  for (let docY = startDocY; docY <= endDocY; docY += 10) {
    const isMajor = docY % 100 === 0;
    const isMid = !isMajor && docY % 50 === 0;
    const screenY = docY - scrollY + 24; // offset by top ruler height
    if (screenY >= 24 && screenY <= dimensions.height) {
      leftTicks.push({
        y: screenY,
        isMajor,
        isMid,
        label: isMajor ? docY : undefined
      });
    }
  }

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9985] select-none transition-opacity duration-700 ${
        isComplete ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true">
      {/* Corner origin indicator */}
      <div className="fixed top-0 left-0 w-6 h-6 bg-[#0a0a0a] border-r border-b border-white/15 flex items-center justify-center z-[9988] text-[9px] font-mono text-[#ccff00]">
        +
      </div>

      {/* Top horizontal ruler */}
      <div className="fixed top-0 left-6 right-0 h-6 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 overflow-hidden flex items-end">
        <svg
          width={dimensions.width}
          height="24"
          className="absolute inset-0 block text-neutral-400">
          {topTicks.map((tick) => (
            <g key={`top-${tick.x}`}>
              <line
                x1={tick.x}
                y1={getTickHeight(tick.isMajor, tick.isMid)}
                x2={tick.x}
                y2={24}
                stroke="currentColor"
                strokeWidth={tick.isMajor ? 1.2 : 0.8}
                className={getTickClass(tick.isMajor, tick.isMid)}
              />
              {tick.label !== undefined && tick.label > 0 && (
                <text
                  x={tick.x + 3}
                  y={10}
                  fill="currentColor"
                  className="text-white/50 text-[8px] font-mono select-none">
                  {tick.label}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Left vertical ruler */}
      <div className="fixed top-6 left-0 bottom-0 w-6 bg-[#0a0a0a]/90 backdrop-blur-md border-r border-white/10 overflow-hidden">
        <svg
          width="24"
          height={dimensions.height}
          className="absolute inset-0 block text-neutral-400">
          {leftTicks.map((tick) => (
            <g key={`left-${tick.y}-${tick.label}`}>
              <line
                x1={getTickHeight(tick.isMajor, tick.isMid)}
                y1={tick.y}
                x2={24}
                y2={tick.y}
                stroke="currentColor"
                strokeWidth={tick.isMajor ? 1.2 : 0.8}
                className={getTickClass(tick.isMajor, tick.isMid)}
              />
              {tick.label !== undefined && (
                <text
                  x={2}
                  y={tick.y - 3}
                  fill="currentColor"
                  className="text-white/50 text-[8px] font-mono select-none"
                  transform={`rotate(-90 8 ${tick.y - 2})`}>
                  {tick.label}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Scattered registration marks that fade out early */}
      {registrationMarks.map((mark) => {
        const isPassed = frontierY > mark.y + 120;
        return (
          <div
            key={mark.id}
            style={{
              position: "absolute",
              left: `${mark.x}px`,
              top: `${mark.y}px`,
              transform: "translate(-50%, -50%)"
            }}
            className={`reg-mark transition-opacity duration-500 ${
              isPassed ? "opacity-0" : "opacity-40"
            }`}>
            +
          </div>
        );
      })}
    </div>
  );
}

export const BuildRulers = memo(BuildRulersComponent);
