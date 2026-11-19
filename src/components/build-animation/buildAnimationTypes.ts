export type LayerType = 'hero-letter' | 'text' | 'media' | 'container' | 'button';

export interface BuildLayer {
  id: string;
  element: HTMLElement;
  rect: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  docTop: number;
  docLeft: number;
  type: LayerType;
  tagLabel: string;
  status: 'pending' | 'building' | 'done';
  assignedAgentId?: string;
  domIndex: number;
}

export interface Agent {
  id: string;
  name: string;
  color: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  state: 'entering' | 'idle' | 'flying' | 'building' | 'resting' | 'flying-away';
  currentLayerId?: string;
  taskProgress: number;
  taskDuration: number;
  restTimer: number;
  driftAngle: number;
  driftRadius: number;
  driftSpeed: number;
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
}

export interface RegistrationMark {
  x: number;
  y: number;
  id: string;
}

export const AGENT_ROSTER = [
  { name: "Nova", color: "#ccff00" },     // Electric Cyber Lime
  { name: "Pixel", color: "#00f0ff" },    // Electric Cyan
  { name: "Echo", color: "#a855f7" },     // Radiant Violet
  { name: "Aura", color: "#ec4899" },     // Hot Pink
  { name: "Flux", color: "#f59e0b" },     // Amber
  { name: "Vortex", color: "#3b82f6" },   // Electric Blue
  { name: "Kite", color: "#10b981" },     // Emerald
  { name: "Atlas", color: "#8b5cf6" },    // Violet
  { name: "Spark", color: "#f97316" },    // Orange
  { name: "Nexus", color: "#06b6d4" },    // Cyan
  { name: "Zephyr", color: "#d4ff00" },   // Neon Citron
  { name: "Cosmo", color: "#6366f1" },    // Indigo
  { name: "Orion", color: "#d946ef" },    // Fuchsia
  { name: "Cipher", color: "#0ea5e9" },   // Sky
  { name: "Halo", color: "#bbf7d0" },     // Mint
  { name: "Iris", color: "#22c55e" },     // Green
  { name: "Prism", color: "#eab308" },    // Yellow
  { name: "Sol", color: "#f43f5e" },      // Crimson
  { name: "Ray", color: "#38bdf8" },      // Light blue
  { name: "Pulse", color: "#fb923c" },    // Warm orange
  { name: "Volt", color: "#4ade80" },     // Mint
  { name: "Drift", color: "#f472b6" },    // Soft pink
  { name: "Lyra", color: "#2dd4bf" },     // Aqua
  { name: "Titan", color: "#f87171" },    // Coral
  { name: "Glide", color: "#c084fc" },    // Lilac
  { name: "Blaze", color: "#fbbf24" },    // Golden
  { name: "Aero", color: "#34d399" },     // Seafoam
  { name: "Sync", color: "#818cf8" },     // Periwinkle
  { name: "Quark", color: "#f43f5e" },    // Ruby
  { name: "Zen", color: "#10b981" },      // Jade
];

