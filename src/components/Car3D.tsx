import { useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const systems = [
  {
    id: "01",
    name: "Cooling & Thermal Management",
    component: "Coolant & Radiator Hose Assembly",
    location: "Engine bay, front — radiator upper tank to thermostat housing",
    media: "Engine coolant (water / ethylene glycol)",
    diameter: "25–51 mm ID",
    temperatureRange: "-40°C to +135°C",
    description:
      "Carries hot coolant between radiator, engine block and water pump to regulate operating temperatures under peak driving loads."
  },
  {
    id: "02",
    name: "Air Intake & Charge Air Systems",
    component: "Turbo Intercooler & Boost Manifold",
    location: "Center powertrain intake plenum",
    media: "Compressed ambient air",
    diameter: "63–76 mm ID",
    temperatureRange: "-20°C to +180°C",
    description:
      "Conditions high-velocity charge air to maximize engine volumetric efficiency, reducing thermal lag across boost cycles."
  },
  {
    id: "03",
    name: "Fuel & Gas Delivery",
    component: "High-Pressure Direct Rail Injection",
    location: "Cylinder head manifold bank",
    media: "High-octane fuel / direct spray",
    diameter: "8–12 mm ID high-tensile steel",
    temperatureRange: "-30°C to +110°C",
    description:
      "Precision direct-injection distribution delivering up to 350 bar with millisecond pulse accuracy to reduce particulate emissions."
  }
];

const technicalSolutions = [
  {
    number: "01",
    title: "Solving Real-Time 3D Web Rendering",
    description:
      "Reduced CAD geometric mesh polycount through selective retopology and normal baking, decreasing browser memory overhead by 65% while preserving photorealistic lighting and reflections."
  },
  {
    number: "02",
    title: "Instant Dual-Mode Shaders (Assembled & X-Ray)",
    description:
      "Engineered instantaneous switching between external high-gloss paint shaders and custom ghosted semi-transparent X-ray shaders, highlighting internal mechanical components without stutter or reload."
  },
  {
    number: "03",
    title: "Interactive Component Spatial Hotspots",
    description:
      "Designed coordinate-anchored 3D hotspots that follow the vehicle camera angles seamlessly, bridging the 3D model directly to real-time engineering specifications and component inventories."
  },
  {
    number: "04",
    title: "Intuitive Multi-Camera Rig Controls",
    description:
      "Provided smooth orbital controls (Front, Side, Rear, Free 3D) with inertial dampening, making technical exploration natural for non-technical buyers and mechanics alike."
  }
];

function Car3DWireframe({ mode }: { mode: "assembled" | "xray" }) {
  const isXray = mode === "xray";

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border border-black/[0.08] bg-[#eeeae4] p-4 font-mono dark:border-white/[0.08] dark:bg-[#181818] sm:aspect-[16/9] sm:p-6">
      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      <div className="relative flex h-full flex-col justify-between">
        {/* Top Wireframe Header */}
        <div className="flex items-center justify-between border-b border-black/[0.1] pb-3 text-xs dark:border-white/[0.1]">
          <div className="flex items-center gap-3">
            <span className="font-bold text-neutral-900 dark:text-white">
              VEHICLE CAD SCHEMATIC
            </span>
            <span className="text-neutral-400">|</span>
            <span className="text-neutral-500 dark:text-neutral-400">
              {isXray ? "MODE: X-RAY DIAGNOSTICS" : "MODE: ASSEMBLED BODY"}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-neutral-400">
            <span>SCALE: 1:18</span>
            <span>·</span>
            <span>AXIS: X/Y/Z</span>
          </div>
        </div>

        {/* Center Vehicle Blueprint Wireframe SVG */}
        <div className="relative my-auto flex h-48 items-center justify-center sm:h-64">
          <svg
            viewBox="0 0 600 220"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {/* Ground datum plane */}
            <line
              x1="30"
              y1="190"
              x2="570"
              y2="190"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="6 3"
              strokeOpacity="0.25"
            />

            {/* Front & Rear Wheels */}
            <circle
              cx="140"
              cy="165"
              r="26"
              stroke="currentColor"
              strokeWidth="2"
              className="text-neutral-900 dark:text-white"
            />
            <circle
              cx="140"
              cy="165"
              r="14"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="3 3"
              strokeOpacity="0.5"
            />

            <circle
              cx="460"
              cy="165"
              r="26"
              stroke="currentColor"
              strokeWidth="2"
              className="text-neutral-900 dark:text-white"
            />
            <circle
              cx="460"
              cy="165"
              r="14"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="3 3"
              strokeOpacity="0.5"
            />

            {/* Vehicle Outer Shell Chassis Line */}
            <path
              d="M 50 165 C 50 155, 65 140, 95 135 C 120 130, 160 120, 200 95 C 240 70, 310 65, 370 70 C 430 75, 470 100, 510 125 C 540 135, 560 145, 560 165 L 530 165 C 530 145, 510 140, 486 140 C 450 140, 434 165, 434 165 L 166 165 C 166 165, 150 140, 114 140 C 90 140, 75 155, 75 165 Z"
              stroke="currentColor"
              strokeWidth={isXray ? "1" : "2.5"}
              strokeDasharray={isXray ? "4 4" : undefined}
              strokeOpacity={isXray ? 0.35 : 0.95}
              className="text-neutral-900 dark:text-white"
            />

            {/* Windshield & Cabin Wire */}
            <path
              d="M 205 95 C 235 75, 290 70, 345 74 C 385 78, 410 95, 425 115"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeOpacity={isXray ? 0.25 : 0.6}
            />

            {/* X-Ray Internal Subsystems Wireframe Components */}
            {isXray && (
              <g className="text-neutral-950 dark:text-white">
                {/* 01 Cooling & Radiator Box (Front) */}
                <rect
                  x="80"
                  y="125"
                  width="40"
                  height="30"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  fill="currentColor"
                  fillOpacity="0.08"
                />
                <line
                  x1="80"
                  y1="135"
                  x2="120"
                  y2="135"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="145"
                  x2="120"
                  y2="145"
                  stroke="currentColor"
                  strokeWidth="1"
                />

                {/* Hotspot Indicator Callout for Cooling */}
                <circle cx="100" cy="115" r="4" fill="currentColor" />
                <line
                  x1="100"
                  y1="115"
                  x2="100"
                  y2="40"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <line
                  x1="100"
                  y1="40"
                  x2="175"
                  y2="40"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <text
                  x="180"
                  y="43"
                  fontFamily="monospace"
                  fontSize="9"
                  fill="currentColor">
                  01 COOLING &amp; RADIATOR
                </text>

                {/* 02 Engine & Turbo Center Block */}
                <rect
                  x="200"
                  y="110"
                  width="65"
                  height="45"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  fillOpacity="0.1"
                />
                <circle
                  cx="232"
                  cy="132"
                  r="14"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />

                {/* Hotspot Callout for Engine/Air */}
                <circle cx="232" cy="110" r="4" fill="currentColor" />
                <line
                  x1="232"
                  y1="110"
                  x2="232"
                  y2="25"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <line
                  x1="232"
                  y1="25"
                  x2="305"
                  y2="25"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <text
                  x="310"
                  y="28"
                  fontFamily="monospace"
                  fontSize="9"
                  fill="currentColor">
                  02 CHARGE AIR &amp; MANIFOLD
                </text>

                {/* 03 High Pressure Fuel Rail (Rear-mid) */}
                <rect
                  x="290"
                  y="118"
                  width="45"
                  height="22"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="290"
                  y1="129"
                  x2="335"
                  y2="129"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
              </g>
            )}

            {/* Coordinate markers */}
            <text
              x="50"
              y="205"
              fontFamily="monospace"
              fontSize="8"
              fill="currentColor"
              fillOpacity="0.4">
              [+0.00, +0.00]
            </text>
            <text
              x="520"
              y="205"
              fontFamily="monospace"
              fontSize="8"
              fill="currentColor"
              fillOpacity="0.4">
              [+4.86M]
            </text>
          </svg>
        </div>

        {/* Bottom Wireframe Footer */}
        <div className="flex items-center justify-between border-t border-black/[0.08] pt-2.5 text-[10px] text-neutral-400 dark:border-white/[0.08]">
          <span>SCHEMATIC 02 · 3D DUAL-MODE SHADER GEOMETRY</span>
          <span>NDA PROTECTED</span>
        </div>
      </div>
    </div>
  );
}

export default function Car3DDesign() {
  const [mode, setMode] = useState<"assembled" | "xray">("xray");
  const [selectedSystem, setSelectedSystem] = useState(0);

  const currentSystem = systems[selectedSystem];

  return (
    <main className="min-h-screen bg-[#f7f5f2] text-neutral-950 transition-colors duration-300 dark:bg-[#111111] dark:text-neutral-100">
      <div className="mx-auto min-h-screen w-full max-w-[1200px] border-x border-black/[0.06] dark:border-white/[0.07]">
        {/* Navigation Breadcrumb */}
        <section className="px-6 pb-2 pt-8 sm:px-10 sm:pb-8 sm:pt-10 lg:px-14">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-neutral-950 dark:hover:text-white">
            <ArrowLeft
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Back to Home
          </Link>
        </section>

        {/* Hero Section */}
        <section className="px-6 pb-16 pt-6 sm:px-10 sm:pb-24 lg:px-14">
          {/* Confidential Notice */}
          <p className="max-w-3xl pb-6 font-mono text-xs uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500">
            Confidential automotive project · Production 3D CAD assets protected under NDA ·
            Wireframe interaction model documented
          </p>

          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 sm:text-[13px]">
            <span className="h-2 w-2 rounded-full bg-neutral-950 dark:bg-white" />
            Interactive 3D · Web Experience
          </div>

          <h1 className="mt-7 max-w-[980px] font-serif text-[42px] leading-[1.0] tracking-[-0.04em] sm:text-[64px] lg:text-[80px]">
            3D Vehicle Configurator &amp; Real-time X-Ray Diagnostics.
          </h1>

          <p className="mt-8 max-w-[720px] text-lg leading-8 text-neutral-500 dark:text-neutral-400 sm:text-xl">
            An interactive 3D automotive exploration and component diagnostics platform,
            solving real-time 3D model performance bottlenecks while delivering
            seamless dual-mode assembled and X-ray system inspection.
          </p>

          {/* Meta Grid */}
          <div className="mt-14 grid grid-cols-2 gap-y-7 border-y border-black/[0.08] py-6 dark:border-white/[0.08] sm:grid-cols-4 sm:py-7">
            <div className="border-r border-black/[0.06] pr-4 dark:border-white/[0.06]">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[12px]">
                Role
              </p>
              <p className="mt-2 text-[14px] font-medium sm:text-[15px]">
                Product Designer &amp; Technologist
              </p>
            </div>

            <div className="border-r border-black/[0.06] px-4 dark:border-white/[0.06]">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[12px]">
                Product
              </p>
              <p className="mt-2 text-[14px] font-medium sm:text-[15px]">
                Automotive 3D Experience
              </p>
            </div>

            <div className="border-r border-black/[0.06] px-4 dark:border-white/[0.06]">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[12px]">
                Key Challenge
              </p>
              <p className="mt-2 text-[14px] font-medium sm:text-[15px]">
                Real-Time 3D &amp; X-Ray Solved
              </p>
            </div>

            <div className="pl-4">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[12px]">
                Platform
              </p>
              <p className="mt-2 text-[14px] font-medium sm:text-[15px]">
                WebGL / Web 3D Experience
              </p>
            </div>
          </div>

          {/* Hero Wireframe Display */}
          <div className="mt-14 overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-2 shadow-2xl dark:border-white/[0.08] dark:bg-[#161616] sm:p-4">
            <Car3DWireframe mode={mode} />
          </div>
        </section>

        {/* Section 01: Interactive Demonstration Sandbox */}
        <section className="border-t border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 sm:py-28 lg:px-14">
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.16em] text-neutral-400">
            <span>01</span>
            <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
            <span>Interactive Simulator</span>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-serif text-3xl leading-[1.08] tracking-[-0.035em] sm:text-5xl">
                Explore what's inside.
              </h2>
              <p className="mt-3 max-w-xl text-neutral-500 dark:text-neutral-400">
                Switch between full exterior styling and transparent X-ray diagnostic
                modes to inspect subsystem specifications.
              </p>
            </div>

            {/* Mode Switcher Buttons in Monochrome */}
            <div className="flex items-center rounded-full border border-black/[0.1] bg-black/[0.03] p-1 dark:border-white/[0.1] dark:bg-white/[0.05]">
              <button
                type="button"
                onClick={() => setMode("assembled")}
                className={`rounded-full px-5 py-2 text-xs font-medium transition-all ${
                  mode === "assembled"
                    ? "bg-neutral-950 text-white shadow dark:bg-white dark:text-neutral-950"
                    : "text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                }`}>
                Assembled Mode
              </button>
              <button
                type="button"
                onClick={() => setMode("xray")}
                className={`rounded-full px-5 py-2 text-xs font-medium transition-all ${
                  mode === "xray"
                    ? "bg-neutral-950 text-white shadow dark:bg-white dark:text-neutral-950"
                    : "text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                }`}>
                X-Ray Mode
              </button>
            </div>
          </div>

          {/* Interactive Specification Explorer */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* Subsystem selection tabs */}
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
                Explore Systems
              </p>
              {systems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedSystem(index)}
                  className={`w-full rounded-xl border p-4 text-left transition-all ${
                    selectedSystem === index
                      ? "border-neutral-900 bg-neutral-900/[0.05] shadow-sm dark:border-white dark:bg-white/[0.08]"
                      : "border-black/[0.08] bg-white hover:border-black/[0.18] dark:border-white/[0.08] dark:bg-[#181818] dark:hover:border-white/[0.18]"
                  }`}>
                  <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                    {item.id}
                  </span>
                  <p className="mt-1 text-sm font-medium">{item.name}</p>
                </button>
              ))}
            </div>

            {/* Spec details card */}
            <div className="rounded-2xl border border-black/[0.08] bg-white p-7 shadow-sm dark:border-white/[0.08] dark:bg-[#181818] lg:col-span-2">
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-4 dark:border-white/[0.06]">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-neutral-400">
                    System Component {currentSystem?.id}
                  </span>
                  <h3 className="mt-1 text-xl font-medium">{currentSystem?.component}</h3>
                </div>
                <span className="rounded-full border border-black/[0.1] px-3 py-1 text-xs text-neutral-600 dark:border-white/[0.15] dark:text-neutral-300">
                  {mode === "xray" ? "X-Ray Active" : "Assembled State"}
                </span>
              </div>

              <p className="mt-5 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                {currentSystem?.description}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 border-t border-black/[0.06] pt-6 dark:border-white/[0.06] sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">
                    Where it sits
                  </p>
                  <p className="mt-1 text-sm font-medium">{currentSystem?.location}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">
                    Operating Media
                  </p>
                  <p className="mt-1 text-sm font-medium">{currentSystem?.media}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">
                    Dimensions
                  </p>
                  <p className="mt-1 text-sm font-medium">{currentSystem?.diameter}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">
                    Thermal Rating
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    {currentSystem?.temperatureRange}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Technical Solutions */}
        <section className="border-t border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 sm:py-28 lg:px-14">
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.16em] text-neutral-400">
            <span>02</span>
            <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
            <span>How Real-Time Performance Was Solved</span>
          </div>

          <div className="mt-8 max-w-2xl">
            <h2 className="font-serif text-3xl leading-[1.08] tracking-[-0.035em] sm:text-5xl">
              Eliminating 3D web lag without sacrificing visual fidelity.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {technicalSolutions.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-black/[0.08] bg-white p-7 transition-colors hover:border-black/[0.18] dark:border-white/[0.08] dark:bg-[#181818] dark:hover:border-white/[0.2]">
                <span className="font-mono text-xs text-neutral-400">{item.number}</span>
                <h3 className="mt-4 text-xl font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Next Project Footer Bar */}
        <section className="border-t border-black/[0.08] px-6 py-16 dark:border-white/[0.08] sm:px-10 sm:py-20 lg:px-14">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                Next Project · 03
              </p>
              <h3 className="mt-2 font-serif text-2xl tracking-[-0.02em] sm:text-3xl">
                Advitiix Management Platform
              </h3>
            </div>

            <Link
              to="/advitiix"
              className="group inline-flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-neutral-950">
              <span>View Case Study</span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}