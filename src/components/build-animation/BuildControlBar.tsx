import { FastForward, Eye, EyeOff, Pause, Play, RotateCcw, SkipForward } from "lucide-react";
import { memo } from "react";
import { Agent } from "./buildAnimationTypes";

interface BuildControlBarProps {
  agents: Agent[];
  totalLayers: number;
  completedLayers: number;
  isTouring: boolean;
  onToggleTouring: () => void;
  speed: number;
  onChangeSpeed: () => void;
  isPaused: boolean;
  onTogglePause: () => void;
  onSkip: () => void;
  isComplete: boolean;
  buildDuration: number;
  onReplay: () => void;
}

function BuildControlBarComponent({
  agents,
  totalLayers,
  completedLayers,
  isTouring,
  onToggleTouring,
  speed,
  onChangeSpeed,
  isPaused,
  onTogglePause,
  onSkip,
  isComplete,
  buildDuration,
  onReplay
}: BuildControlBarProps) {
  const progressPercent =
    totalLayers > 0 ? Math.min(100, Math.round((completedLayers / totalLayers) * 100)) : 0;

  // Active avatars (first 4 agents)
  const previewAgents = agents.slice(0, 4);

  if (isComplete) {
    return (
      <aside
        aria-label="Build Finale Control Bar"
        className="fixed bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-[9995] max-w-[94vw] transition-all duration-500 animate-in fade-in slide-in-from-bottom-3">
        <div className="flex items-center gap-3 rounded-full border border-white/20 bg-[#0a0a0a]/90 px-4 py-2 text-xs sm:text-sm font-mono text-white shadow-2xl backdrop-blur-xl">
          <span className="flex h-2 w-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
          <span>
            Rebuilt by <span className="text-[#ccff00] font-bold">{agents.length}</span> agents in{" "}
            <span className="text-white font-bold">{buildDuration.toFixed(1)}s</span>
          </span>

          <span className="h-4 w-px bg-white/20" />

          <button
            type="button"
            onClick={onReplay}
            className="group flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white transition-all hover:bg-[#ccff00] hover:text-black">
            <RotateCcw size={13} className="transition-transform group-hover:-rotate-90" />
            <span>Replay</span>
          </button>
        </div>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Build Simulation Control Bar"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9995] max-w-[94vw] select-none transition-all duration-300">
      <div className="relative flex flex-wrap items-center gap-2 sm:gap-3 rounded-full border border-white/20 bg-[#0c0c0c]/90 px-3 py-2 sm:px-4 sm:py-2.5 text-xs font-mono text-neutral-200 shadow-2xl backdrop-blur-xl">
        {/* Avatars strip */}
        <div className="flex items-center -space-x-2">
          {previewAgents.map((agent) => (
            <div
              key={agent.id}
              className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#0c0c0c] text-[10px] font-bold text-white shadow-sm"
              style={{ backgroundColor: agent.color }}
              title={agent.name}>
              {agent.name.charAt(0)}
            </div>
          ))}
        </div>

        {/* Status Counter */}
        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
          <span className="font-semibold text-white">{agents.length}</span>
          <span className="text-neutral-400">agents</span>
          <span className="text-neutral-600">·</span>
          <span className="font-bold text-[#ccff00]">{completedLayers}</span>
          <span className="text-neutral-400">/ {totalLayers}</span>
        </div>

        {/* Mini progress bar */}
        <div className="hidden sm:block h-1.5 w-16 sm:w-20 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#ccff00] to-[#00f0ff] transition-all duration-150"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Separator */}
        <span className="h-4 w-px bg-white/15" />

        {/* Touring button */}
        <button
          type="button"
          onClick={onToggleTouring}
          className={`flex items-center gap-1 rounded-full px-2 py-1 text-[11px] transition-colors ${
            isTouring
              ? "bg-[#ccff00]/20 text-[#ccff00] border border-[#ccff00]/40"
              : "text-neutral-400 hover:text-white hover:bg-white/10"
          }`}
          title={isTouring ? "Touring auto-scroll is ON" : "Touring auto-scroll is OFF"}>
          {isTouring ? <Eye size={13} /> : <EyeOff size={13} />}
          <span className="hidden md:inline">{isTouring ? "Tour ON" : "Tour OFF"}</span>
        </button>

        {/* Speed button */}
        <button
          type="button"
          onClick={onChangeSpeed}
          className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-[11px] font-semibold text-white transition-colors hover:bg-white/20"
          title="Toggle build speed">
          <FastForward size={12} />
          <span>{speed}x</span>
        </button>

        {/* Pause / Play */}
        <button
          type="button"
          onClick={onTogglePause}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          title={isPaused ? "Resume build" : "Pause build"}>
          {isPaused ? <Play size={12} className="ml-0.5" /> : <Pause size={12} />}
        </button>

        {/* Skip button */}
        <button
          type="button"
          onClick={onSkip}
          className="group flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-neutral-300 transition-colors hover:bg-[#ccff00] hover:text-black"
          title="Instantly reveal all elements">
          <span>Skip</span>
          <SkipForward size={12} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </aside>
  );
}

export const BuildControlBar = memo(BuildControlBarComponent);
