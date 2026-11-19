import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Flame,
  Layers,
  Lock,
  MapPin,
  ShieldAlert,
  WifiOff
} from "lucide-react";

const getSectionTag = (label: string) => `// ${label}`;

export default function Fire() {
  const resumeUrl =
    "https://drive.google.com/file/d/1NUZyCR1y4WqBA25RMbUZXfOT6MMC8GjE/view?usp=sharing";

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
            CASE STUDY 02 / 05
          </span>
        </nav>

        {/* NDA & Confidentiality Disclaimer Banner */}
        <section className="mt-5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-3.5">
          <div className="flex items-start gap-2.5 font-mono text-xs text-neutral-600 dark:text-neutral-300">
            <Lock className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
            <p>
              <strong>Company Client Project · Advitiix Technovate:</strong> Confidential industrial client telemetry and internal floor plans are protected under NDA. The UX research, spatial floor map concept, and design decisions shared here represent my authentic work.
            </p>
          </div>
        </section>

        {/* =====================================================
            HERO SECTION
        ====================================================== */}
        <header className="mt-8 pb-10 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
            <span>{getSectionTag("FIRE DETECTION LIVE APP · INDUSTRIAL MONITORING")}</span>
          </div>

          <h1 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-950 dark:text-white leading-[1.05]">
            Turning an alert into an actionable location.
          </h1>

          <p className="mt-3 max-w-3xl text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
            A fire and smoke monitoring dashboard redesigned around the physical environment — helping employees understand where an incident is happening, what was detected and what needs attention.
          </p>

          {/* Quick Meta Chips */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 font-mono text-xs border-t border-black/[0.08] dark:border-white/[0.08] pt-4">
            <div>
              <span className="text-neutral-400 block mb-1 uppercase tracking-wider">Role</span>
              <span className="font-semibold text-neutral-950 dark:text-white">UX/UI Product Designer</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-1 uppercase tracking-wider">Product</span>
              <span className="text-neutral-800 dark:text-neutral-200">Fire Detection Live App</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-1 uppercase tracking-wider">Focus</span>
              <span className="text-neutral-800 dark:text-neutral-200">UX · UI · Spatial Floor Map</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-1 uppercase tracking-wider">Platform</span>
              <span className="text-neutral-800 dark:text-neutral-200">Desktop &amp; Tablet Operations</span>
            </div>
          </div>

          {/* Actual Production Dashboard Showcase */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-[#0c101d] p-2 shadow-2xl">
            <img
              src="/fire-dashboard.png"
              alt="L&T Fire & Smoke Detection Live Dashboard with 2D Warehouse Floor Map"
              className="w-full h-auto rounded-xl object-contain shadow-lg"
            />
            <div className="p-3.5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-neutral-400">
              <span className="text-white font-medium">FIG 1.0 · LIVE PRODUCTION INTERFACE &amp; 2D SPATIAL FLOOR MAP</span>
              <span>L&amp;T Construction &amp; Mining Central Warehouse Nagpur · Powered by Advitiix Technovate</span>
            </div>
          </div>

          {/* Minimal Architectural Floor Map Interactive */}
          <div className="mt-8 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-[#16181c] p-5 sm:p-8 font-mono text-xs shadow-2xl relative overflow-hidden">
            {/* Floor Map Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-neutral-400">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-sans font-semibold text-white tracking-wide">
                  FIG 2.0 · SCHEMATIC BREAKDOWN · 2D FLOOR ZONES
                </span>
                <span>/</span>
                <span className="text-[11px] text-neutral-400">FLOOR 02 · SIMULATOR</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-white/10 px-2.5 py-1 text-[10px] text-neutral-300">
                  CAMERA NETWORK: 6/6 ONLINE
                </span>
              </div>
            </div>

            {/* Blueprint Grid & Zones */}
            <div className="relative mt-8 h-80 sm:h-96 w-full rounded-xl border border-white/10 bg-[#0f1115] p-4 overflow-hidden">
              {/* Subtle architectural grid */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
                  backgroundSize: "32px 32px"
                }}
              />

              {/* Floor dividing walls */}
              <div className="absolute inset-x-8 top-12 bottom-12 border border-white/15 rounded">
                <div className="absolute left-1/3 inset-y-0 w-px bg-white/15" />
                <div className="absolute left-2/3 inset-y-0 w-px bg-white/15" />
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/15" />
              </div>

              {/* Zone A */}
              <div className="absolute left-8 top-12 w-1/3 bottom-12 p-3 bg-white/[0.02]">
                <span className="text-[10px] text-neutral-500 font-bold block uppercase tracking-widest">
                  ZONE A
                </span>
                <span className="text-[10px] text-neutral-600">Raw Storage</span>
                {/* Camera dot */}
                <div className="absolute left-1/2 top-1/3 h-2.5 w-2.5 rounded-full bg-white/40 -translate-x-1/2" />
                <div className="absolute left-1/2 top-2/3 h-2.5 w-2.5 rounded-full bg-white/40 -translate-x-1/2" />
              </div>

              {/* Zone B (Active Incident) */}
              <div className="absolute left-[33.33%] top-12 w-1/3 bottom-12 p-3 bg-rose-500/[0.08]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping" />
                  <span className="text-[10px] text-rose-400 font-bold uppercase tracking-widest">
                    ZONE B · ALERT
                  </span>
                </div>
                <span className="text-[10px] text-neutral-400">Assembly Line</span>

                {/* Pulsing Active Camera Point */}
                <div className="absolute left-1/2 top-1/3 -translate-x-1/2">
                  <div className="h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.8)]" />
                  <div className="absolute -inset-2 rounded-full bg-rose-500/30 animate-ping" />
                </div>

                {/* Secondary Camera Point */}
                <div className="absolute left-1/2 top-2/3 h-2.5 w-2.5 rounded-full bg-white/40 -translate-x-1/2" />

                {/* Active Detection Floating Card */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-56 sm:w-64 rounded-xl border border-rose-500/40 bg-[#1a1415]/95 p-4 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-rose-400 flex items-center gap-1.5">
                      <Flame size={12} />
                      ACTIVE DETECTION
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                  </div>
                  <h4 className="mt-2 font-serif text-lg font-normal text-white">
                    Fire detected
                  </h4>
                  <div className="mt-2 space-y-1 text-[11px] text-neutral-300 pt-2 border-t border-rose-500/20">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Camera:</span>
                      <span className="font-bold text-white">CAM-024 · Zone B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Confidence:</span>
                      <span className="font-bold text-emerald-400">96%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Severity:</span>
                      <span className="font-bold text-rose-400">Critical</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zone C */}
              <div className="absolute left-[66.66%] top-12 w-1/3 bottom-12 p-3 bg-white/[0.02]">
                <span className="text-[10px] text-neutral-500 font-bold block uppercase tracking-widest">
                  ZONE C
                </span>
                <span className="text-[10px] text-neutral-600">Packaging &amp; Dispatch</span>
                {/* Camera dot */}
                <div className="absolute left-1/2 top-1/3 h-2.5 w-2.5 rounded-full bg-white/40 -translate-x-1/2" />
                <div className="absolute left-1/2 top-2/3 h-2.5 w-2.5 rounded-full bg-white/40 -translate-x-1/2" />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] text-neutral-400">
              <span>FIG 2.0 · RESEARCH-DRIVEN 2D SPATIAL FLOOR MAP SCHEMATIC</span>
              <span>Interactive zone simulation · Grounded in physical plant geography</span>
            </div>
          </div>
        </header>

        {/* =====================================================
            01. THE PROBLEM
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("01 · THE PROBLEM")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            An alert existed. Context didn&apos;t.
          </h2>

          <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-3xl">
            <p>
              This was a <strong>company client project at Advitiix Technovate</strong>. The client had an AI model capable of detecting smoke and fire patterns from industrial CCTV video feeds.
            </p>
            <p>
              Their business goal was clear: prevent catastrophic factory fires and protect worker safety. But when I analyzed their initial dashboard, I discovered a major problem:
            </p>
            <p className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] font-mono text-xs leading-relaxed text-neutral-800 dark:text-neutral-200">
              The initial dashboard could tell an employee that an alert had been triggered, but it didn&apos;t help them quickly understand <strong>where</strong> the incident was or <strong>how serious</strong> it was.
            </p>
            <p>
              The employee still had to connect the alert with a camera name (like <code className="font-mono text-xs">CAM-024</code>) and then determine where that camera was physically located across a multi-acre plant.
            </p>
            <p className="font-semibold text-neutral-950 dark:text-white">
              In an emergency, that extra mental step matters.
            </p>
          </div>
        </section>

        {/* =====================================================
            02. THE INSIGHT
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("02 · THE INSIGHT")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            The problem wasn&apos;t detection. It was understanding.
          </h2>

          <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-3xl">
            <p>
              The machine learning model was already detecting smoke contours and thermal anomalies accurately. The breakdown was in human comprehension.
            </p>
            <p>
              Instead of making the alert more prominent with louder alarms or flashing red banners (which only caused alert fatigue), I changed the central concept of the dashboard:
            </p>
            <p className="text-lg font-serif text-neutral-950 dark:text-white italic">
              &quot;The interface needed to connect the detection directly to the physical environment.&quot;
            </p>
          </div>
        </section>

        {/* =====================================================
            03. THE SOLUTION
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("03 · THE SOLUTION")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            From alert-centric to location-centric.
          </h2>

          <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-3xl">
            <p>
              I introduced a <strong>floor-map experience</strong> with exact camera locations, allowing an active detection to be understood in its physical context instantly.
            </p>
            <p>
              Supporting information was structured around the four questions an employee needs to answer immediately:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 font-mono text-xs">
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5">
              <Flame size={16} className="text-rose-500 mb-3" />
              <span className="text-[10px] text-neutral-400 block uppercase">DETECTION</span>
              <span className="font-bold text-neutral-950 dark:text-white text-base mt-1 block">Fire</span>
            </div>
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5">
              <MapPin size={16} className="text-neutral-700 dark:text-neutral-300 mb-3" />
              <span className="text-[10px] text-neutral-400 block uppercase">LOCATION</span>
              <span className="font-bold text-neutral-950 dark:text-white text-base mt-1 block">Zone B · Floor 2</span>
            </div>
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5">
              <Layers size={16} className="text-neutral-700 dark:text-neutral-300 mb-3" />
              <span className="text-[10px] text-neutral-400 block uppercase">CAMERA</span>
              <span className="font-bold text-neutral-950 dark:text-white text-base mt-1 block">CAM-024</span>
            </div>
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5">
              <ShieldAlert size={16} className="text-rose-500 mb-3" />
              <span className="text-[10px] text-neutral-400 block uppercase">STATUS</span>
              <span className="font-bold text-rose-500 text-base mt-1 block">Active</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            04. THE EXPERIENCE
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("04 · THE EXPERIENCE")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            A clearer path from detection to investigation.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 font-mono text-xs">
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 space-y-2">
              <span className="text-neutral-400 text-[10px] block font-bold">01</span>
              <strong className="text-neutral-950 dark:text-white text-base font-serif font-normal block">Live dashboard</strong>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                See the facility state and active incidents at a glance.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 space-y-2">
              <span className="text-neutral-400 text-[10px] block font-bold">02</span>
              <strong className="text-neutral-950 dark:text-white text-base font-serif font-normal block">Location</strong>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Identify the affected floor, zone and specific camera instantly.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 space-y-2">
              <span className="text-neutral-400 text-[10px] block font-bold">03</span>
              <strong className="text-neutral-950 dark:text-white text-base font-serif font-normal block">Incident</strong>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Understand incident type, severity, confidence score and status.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 space-y-2">
              <span className="text-neutral-400 text-[10px] block font-bold">04</span>
              <strong className="text-neutral-950 dark:text-white text-base font-serif font-normal block">History</strong>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Investigate previous detections, scrubber logs and camera activity.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            05. EDGE CASES
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("05 · EDGE CASES")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Monitoring can&apos;t assume everything is normal.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 font-mono text-xs">
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <strong className="text-neutral-950 dark:text-white text-sm">No active alert</strong>
              </div>
              <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                The dashboard clearly communicates that the facility is clear instead of leaving an ambiguous empty state that makes operators wonder if the system is disconnected.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 space-y-3">
              <div className="flex items-center gap-2">
                <WifiOff size={16} className="text-amber-500" />
                <strong className="text-neutral-950 dark:text-white text-sm">Camera offline</strong>
              </div>
              <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Disconnected cameras are surfaced as a clear system state so missing information is not mistaken for a safe environment.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 space-y-3">
              <div className="flex items-center gap-2">
                <ShieldAlert size={16} className="text-rose-500" />
                <strong className="text-neutral-950 dark:text-white text-sm">Multiple alerts</strong>
              </div>
              <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Different simultaneous incidents remain distinctly distinguishable by location, type, severity, and status so operators can prioritize response.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-neutral-400" />
                <strong className="text-neutral-950 dark:text-white text-sm">Historical incidents</strong>
              </div>
              <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Resolved events remain accessible through detection history for post-incident investigation, EHS compliance, and safety training review.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            06. TRADE-OFFS
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("06 · TRADE-OFFS")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Show what matters. Hide what doesn&apos;t.
          </h2>

          <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-3xl">
            <p>
              Monitoring products can easily become overloaded with raw sensor metrics, statuses, and dozens of simultaneous camera streams.
            </p>
            <p>
              I prioritized the exact information needed for immediate emergency response: <strong>location, incident type, severity, camera, time and status</strong>.
            </p>
            <p>
              Deeper technical information moved into supporting secondary views such as camera health status and historical detection logs.
            </p>
          </div>
        </section>

        {/* =====================================================
            07. WHAT I LEARNED
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("07 · WHAT I LEARNED")}
          </div>

          <blockquote className="mt-6 font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-neutral-950 dark:text-white leading-snug">
            &quot;The most important information isn&apos;t always the information that&apos;s easiest to display.&quot;
          </blockquote>

          <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-3xl">
            <p>
              For operational products, I learned to start with the <strong>decision the user needs to make immediately</strong> after seeing the information.
            </p>
            <p>
              That shift helped me design the interface around <strong>action</strong> rather than simply displaying system output.
            </p>
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
              3D Vehicle Configurator &amp; X-Ray Diagnostics
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 font-sans">
              Interactive WebGL automotive exploration and internal subsystem inspection.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/selected-work"
              className="inline-flex items-center gap-2 rounded-xl border border-black/15 dark:border-white/15 px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:border-black dark:hover:border-white transition-all">
              <span>All Selected Work</span>
            </Link>

            <Link
              to="/car-3d"
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
            <p className="text-[11px] text-neutral-400 mt-0.5">Supriya Maurya · Product Designer | Enterprise SaaS &amp; AI Products</p>
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
