import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Layout,
  Lock,
  Maximize2,
  Sparkles,
  Zap
} from "lucide-react";

const getSectionTag = (label: string) => `// ${label}`;

const systems = [
  {
    id: "01",
    name: "Cooling & Thermal Management",
    component: "Coolant & Radiator Hose Assembly",
    location: "Engine bay, front — radiator upper tank to thermostat housing, radiator lower tank to water pump",
    media: "Engine coolant (water / ethylene glycol)",
    diameter: "25–51 mm ID",
    temperatureRange: "-40°C to +135°C",
    description:
      "Carries hot coolant between radiator, engine block, and water pump to regulate engine temperature under heavy driving loads."
  },
  {
    id: "02",
    name: "Air Intake & Charge Air Systems",
    component: "Turbo Intercooler & Boost Manifold",
    location: "Center powertrain intake plenum, front intercooler core",
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
      "Precision direct-injection distribution delivering up to 350 bar with millisecond pulse accuracy to reduce emissions and optimize combustion."
  }
];

export default function Car3DDesign() {
  const [mode, setMode] = useState<"assembled" | "xray">("xray");
  const [selectedSystem, setSelectedSystem] = useState(0);

  const resumeUrl =
    "https://drive.google.com/file/d/1NUZyCR1y4WqBA25RMbUZXfOT6MMC8GjE/view?usp=sharing";

  const currentSystem = systems[selectedSystem];

  return (
    <main className="min-h-screen bg-[#faf8f5] text-neutral-900 transition-colors duration-300 dark:bg-[#0c0c0c] dark:text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-8 sm:px-10 lg:px-12 pb-24">
        {/* Navigation Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-between pb-5 border-b border-black/[0.08] dark:border-white/[0.08]">
          <Link
            to="/selected-work"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 transition-colors hover:text-black dark:hover:text-white">
            <ArrowLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span>Back to Selected Work</span>
          </Link>

          <span className="font-mono text-xs text-neutral-400">
            CASE STUDY 03 / 05
          </span>
        </nav>

        {/* NDA & Project Context Banner */}
        <section className="mt-5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-3.5">
          <div className="flex items-start gap-2.5 font-mono text-xs text-neutral-600 dark:text-neutral-300">
            <Lock className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
            <p>
              <strong>Automotive Confidentiality Notice:</strong> Proprietary OEM client vehicle CAD assets and confidential specs are generalized for public portfolio presentation. The user research, 3D interaction model, and frontend WebGL implementation documented here reflect my actual hands-on work.
            </p>
          </div>
        </section>

        {/* =====================================================
            HERO SECTION
        ====================================================== */}
        <header className="mt-8 pb-10 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>{getSectionTag("PRODUCT DESIGN & FRONTEND ENGINEERING")}</span>
          </div>

          <h1 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-950 dark:text-white leading-[1.05]">
            3D Vehicle Configurator &amp; Real-Time X-Ray Diagnostics
          </h1>

          <p className="mt-3 max-w-3xl text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
            Designing and coding an in-browser 3D automotive experience that eliminates WebGL performance lag and lets users inspect internal mechanical subsystems with instant X-ray shaders.
          </p>

          {/* Quick Meta Chips */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 font-mono text-xs border-t border-black/[0.08] dark:border-white/[0.08] pt-4">
            <div>
              <span className="text-neutral-400 block mb-1 uppercase tracking-wider">My Role</span>
              <span className="font-semibold text-neutral-950 dark:text-white">Product Designer &amp; Frontend Dev</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-1 uppercase tracking-wider">Scope</span>
              <span className="text-neutral-800 dark:text-neutral-200">UX/UI, 3D Optimization, Frontend Code</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-1 uppercase tracking-wider">Key Tech</span>
              <span className="text-neutral-800 dark:text-neutral-200">WebGL / Three.js, React, Tailwind CSS</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-1 uppercase tracking-wider">Challenge Solved</span>
              <span className="text-neutral-800 dark:text-neutral-200">Heavy CAD Lag &amp; Dual-Mode Shaders</span>
            </div>
          </div>

          {/* Production UI Screenshot Showcase */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-[#0d0f12] p-2 shadow-2xl">
            <img
              src="/car-3d.jpg"
              alt="3D Vehicle Configurator and Real-Time X-Ray Diagnostics UI"
              className="w-full h-auto rounded-xl object-cover shadow-lg"
            />
            <div className="p-4 flex flex-wrap items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>FIG 1.0 · ACTUAL PRODUCTION INTERFACE DESIGNED AND CODED</span>
              <span>Featuring dual Assembled / X-Ray mode, 3D hotspots, and subsystem spec drawer</span>
            </div>
          </div>
        </header>

        {/* =====================================================
            01. THE PROBLEM: UNDERSTANDING WITH THE PM
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("01 · THE PROBLEM: WHY & HOW")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Sitting with the PM to understand the real problem
          </h2>

          <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p>
              Before writing a single line of code or designing mockups, I sat down with the Product Manager to dissect <strong>why</strong> existing 3D automotive tools were failing users and <strong>how</strong> we could deliver real value:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 font-mono text-xs">
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <span className="text-neutral-400 text-[10px] uppercase font-bold block">1. The User Need</span>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Automotive clients, technical buyers, and mechanics didn&apos;t just want to rotate a shiny car exterior. They needed to explore the engineering inside: cooling loops, radiators, direct injection, and turbo air intake.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <span className="text-neutral-400 text-[10px] uppercase font-bold block">2. The Constraint</span>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                They didn&apos;t want users downloading bulky 10GB CAD software or desktop executables. The entire experience had to run smoothly in standard web browsers on everyday laptops.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <span className="text-neutral-400 text-[10px] uppercase font-bold block">3. The Bottleneck</span>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Raw CAD models have millions of polygons. Loading them in WebGL caused 5-second browser freezes, memory crashes, and 15fps stutter during camera rotations.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            02. THE SOLUTION: DESIGN & INTERACTION
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("02 · DESIGN & INTERACTION ARCHITECTURE")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Designing an intuitive dual-mode spatial UI
          </h2>

          <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p>
              I designed the interface around spatial clarity so non-technical users and engineers alike could explore systems effortlessly:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 font-mono text-xs">
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 space-y-2">
              <div className="flex items-center gap-2 font-bold text-neutral-950 dark:text-white">
                <Layers size={16} className="text-emerald-500" />
                <span>Instant Dual-Mode Toggle</span>
              </div>
              <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                A clean toggle at the top switches between <strong>Assembled Mode</strong> (full exterior gloss styling) and <strong>X-Ray Mode</strong> (ghosted semi-transparent car body highlighting mechanical subsystems).
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 space-y-2">
              <div className="flex items-center gap-2 font-bold text-neutral-950 dark:text-white">
                <Maximize2 size={16} className="text-emerald-500" />
                <span>3D Coordinate-Anchored Hotspots</span>
              </div>
              <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Hotspot callout lines project directly from 3D world coordinates (e.g. front radiator tank) and track smoothly with the user&apos;s camera orbit, clicking directly into component details.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 space-y-2">
              <div className="flex items-center gap-2 font-bold text-neutral-950 dark:text-white">
                <Layout size={16} className="text-emerald-500" />
                <span>Technical Specification Drawer</span>
              </div>
              <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                A dedicated slide-in panel reveals component location, operating media (water / ethylene glycol), ID dimensions (25–51 mm), temperature ratings, and isolated 3D component renders.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 space-y-2">
              <div className="flex items-center gap-2 font-bold text-neutral-950 dark:text-white">
                <Zap size={16} className="text-emerald-500" />
                <span>Bottom Subsystem Carousel</span>
              </div>
              <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Organized horizontal cards let users jump directly between Cooling &amp; Thermal, Air Intake &amp; Charge Air, and Fuel &amp; Gas Delivery without hunting across the vehicle.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            03. INTERACTIVE SIMULATOR (TRY IT LIVE)
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
                {getSectionTag("03 · INTERACTIVE SIMULATOR")}
              </div>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-normal tracking-tight text-neutral-950 dark:text-white">
                Test the dual-mode interaction
              </h2>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center rounded-full border border-black/[0.1] bg-black/[0.03] p-1 dark:border-white/[0.1] dark:bg-white/[0.05] font-mono text-xs">
              <button
                type="button"
                onClick={() => setMode("assembled")}
                className={`rounded-full px-4 py-1.5 transition-all ${mode === "assembled"
                  ? "bg-neutral-950 text-white shadow dark:bg-white dark:text-neutral-950 font-semibold"
                  : "text-neutral-500 hover:text-black dark:hover:text-white"
                  }`}>
                Assembled Mode
              </button>
              <button
                type="button"
                onClick={() => setMode("xray")}
                className={`rounded-full px-4 py-1.5 transition-all ${mode === "xray"
                  ? "bg-neutral-950 text-white shadow dark:bg-white dark:text-neutral-950 font-semibold"
                  : "text-neutral-500 hover:text-black dark:hover:text-white"
                  }`}>
                X-Ray Mode
              </button>
            </div>
          </div>

          {/* Subsystem & Spec Viewer */}
          <div className="mt-10 grid gap-6 lg:grid-cols-3 font-mono text-xs">
            {/* System Selector Cards */}
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block">
                EXPLORE SUBSYSTEMS
              </span>
              {systems.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedSystem(idx)}
                  className={`w-full rounded-xl border p-4 text-left transition-all ${selectedSystem === idx
                    ? "border-neutral-950 bg-neutral-950 text-white dark:border-white dark:bg-white dark:text-neutral-950 shadow-md font-semibold"
                    : "border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400"
                    }`}>
                  <span className="block text-[10px] opacity-70">SYSTEM {item.id}</span>
                  <span className="font-sans font-medium text-sm block mt-0.5">{item.name}</span>
                </button>
              ))}
            </div>

            {/* Spec Details Card */}
            <div className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-neutral-900 p-6 lg:col-span-2 shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400">
                    COMPONENT SPECIFICATION
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-neutral-950 dark:text-white mt-1">
                    {currentSystem.component}
                  </h3>
                </div>
                <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${mode === "xray"
                  ? "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20"
                  : "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                  }`}>
                  {mode === "xray" ? "X-Ray Active" : "Assembled State"}
                </span>
              </div>

              <p className="text-sm font-sans leading-relaxed text-neutral-600 dark:text-neutral-400">
                {currentSystem.description}
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-black/[0.06] dark:border-white/[0.06] pt-4 text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Where It Sits</span>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200 mt-0.5">{currentSystem.location}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Operating Media</span>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200 mt-0.5">{currentSystem.media}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Dimensions</span>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200 mt-0.5">{currentSystem.diameter}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Thermal Rating</span>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200 mt-0.5">{currentSystem.temperatureRange}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            04. FRONTEND ENGINEERING & 3D OPTIMIZATION
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("04 · FRONTEND DEVELOPMENT & WEBGL")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal tracking-tight text-neutral-950 dark:text-white">
            How I solved real-time 3D performance in code
          </h2>

          <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p>
              Designing a 3D interface is useless if the browser stutters at 15fps. Because I handled the frontend development, I took direct responsibility for 3D asset optimization and WebGL rendering:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 font-mono text-xs">
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <Cpu size={16} className="text-neutral-950 dark:text-white" />
              <strong className="text-neutral-950 dark:text-white block">1. Retopology &amp; Normal Baking</strong>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Raw CAD models were retopologized into clean low-poly meshes. I baked high-poly geometric bevels into normal maps, cutting memory overhead by 65% while keeping realistic lighting.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <Sparkles size={16} className="text-neutral-950 dark:text-white" />
              <strong className="text-neutral-950 dark:text-white block">2. Custom Dual-Mode Shaders</strong>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Wrote custom shaders that toggle seamlessly between a high-gloss clearcoat car paint and a ghosted semi-transparent Fresnel X-ray shader without reloading the 3D scene.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <strong className="text-neutral-950 dark:text-white block">3. Smooth Camera Rig with Inertia</strong>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Engineered camera orbital controls (3D, Front, Side, Rear) with inertial damping, ensuring smooth inspection without sudden camera snapping.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <strong className="text-neutral-950 dark:text-white block">4. Silky 60fps WebGL Execution</strong>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Tested across Chrome, Safari, and Firefox to ensure stable 60fps frame rates on standard laptops without draining battery or crashing GPU threads.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            05. REFLECTIONS
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("05 · REFLECTION")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal tracking-tight text-neutral-950 dark:text-white">
            What this project taught me
          </h2>

          <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p>
              Being able to both design the UI in Figma and code the frontend in WebGL/React changes how you solve problems:
            </p>
            <ul className="space-y-3 pt-2 font-mono text-xs">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span className="font-sans text-sm text-neutral-700 dark:text-neutral-300">
                  <strong>Understanding Technical Limits Breeds Better UI:</strong> Instead of designing impossible 3D animations that freeze the browser, I designed around shader capabilities from day one.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span className="font-sans text-sm text-neutral-700 dark:text-neutral-300">
                  <strong>PM Collaboration Solves the Right Problem:</strong> Asking <em>why</em> upfront saved weeks of work. We didn&apos;t need another generic car customizer—we needed an internal mechanical inspection tool.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* =====================================================
            NEXT PROJECT NAVIGATION & FOOTER
        ====================================================== */}
        <section className="pt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              {getSectionTag("NEXT CASE STUDY")}
            </div>
            <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-normal text-neutral-950 dark:text-white">
              EduHire AI Learning &amp; Assessment
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 font-sans">
              AI-powered candidate evaluation, personalized skill assessments, and mobile learning paths.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/selected-work"
              className="inline-flex items-center gap-2 rounded-xl border border-black/15 dark:border-white/15 px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:border-black dark:hover:border-white transition-all">
              <span>All Selected Work</span>
            </Link>

            <Link
              to="/eduhire"
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 shadow-md">
              <span>View Next Case Study</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>

        {/* Bottom CTA Strip */}
        <footer className="mt-16 pt-8 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-neutral-500">
          <div>
            <span className="text-neutral-950 dark:text-white font-semibold">Turning complex requirements into meaningful product experiences.</span>
            <p className="text-[11px] text-neutral-400 mt-0.5">Supriya Maurya · Product Designer &amp; Frontend Technologist</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:supriyam224@gmail.com"
              className="text-neutral-800 dark:text-neutral-200 hover:underline">
              Contact
            </a>
            <span>·</span>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-800 dark:text-neutral-200 hover:underline">
              Resume
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
