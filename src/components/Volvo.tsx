import {
  ArrowLeft,
  ArrowUpRight,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    label: "Connected Dealerships",
    value: "1,482",
    detail: "+14.2% YoY growth",
    icon: Users
  },
  {
    label: "Active Telemetry Sync",
    value: "99.8%",
    detail: "Sub-18ms edge latency",
    icon: Cpu
  },
  {
    label: "Service Turnaround",
    value: "-2.4 hrs",
    detail: "Average turnaround cut",
    icon: TrendingUp
  },
  {
    label: "Automated Decisions",
    value: "68%",
    detail: "Routine dealer workflows",
    icon: ShieldCheck
  }
];

const pillars = [
  {
    number: "01",
    title: "Real-time Telemetry & Edge Sync",
    description:
      "Direct vehicle telemetry ingestion allowing dealerships to identify service needs, diagnostic fault codes, and software updates before a vehicle enters the service bay."
  },
  {
    number: "02",
    title: "Operational Throughput Trajectory",
    description:
      "Interactive time-series curves mapping regional dealer performance against benchmark targets, giving regional directors immediate operational clarity."
  },
  {
    number: "03",
    title: "Contextual Anomaly Detection",
    description:
      "Automated alerting prioritizes critical vehicle diagnostic alerts and supply chain bottlenecks, cutting through operational noise."
  },
  {
    number: "04",
    title: "Unified Scandinavian Design System",
    description:
      "Clean, high-contrast dark visual language tailored for fast scanning in bustling service bay environments as well as executive decision rooms."
  }
];

function VolvoWireframe() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border border-black/[0.08] bg-[#eeeae4] p-4 font-mono dark:border-white/[0.08] dark:bg-[#181818] sm:aspect-[16/9] sm:p-6">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      <div className="relative flex h-full flex-col justify-between">
        {/* Top Wireframe Bar */}
        <div className="flex items-center justify-between border-b border-black/[0.1] pb-3 dark:border-white/[0.1]">
          <div className="flex items-center gap-3">
            <div className="h-3.5 w-16 rounded bg-neutral-900 dark:bg-white" />
            <span className="text-xs text-neutral-400">/</span>
            <div className="h-3 w-28 rounded bg-neutral-400/40 dark:bg-neutral-600" />
            <div className="hidden rounded-full border border-black/[0.15] px-2.5 py-0.5 text-[10px] uppercase text-neutral-500 dark:border-white/[0.15] dark:text-neutral-400 sm:block">
              Telemetry Wireframe
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-12 rounded bg-neutral-400/30 dark:bg-neutral-700" />
            <div className="h-6 w-6 rounded-full border border-black/[0.15] dark:border-white/[0.15]" />
          </div>
        </div>

        {/* Center Wireframe Grid */}
        <div className="my-auto grid grid-cols-1 gap-4 pt-3 lg:grid-cols-3">
          {/* Left Column Metric Cards */}
          <div className="space-y-3">
            <div className="rounded-lg border border-black/[0.1] bg-white/70 p-3.5 dark:border-white/[0.1] dark:bg-[#202020]/80">
              <div className="h-2 w-20 rounded bg-neutral-400/40 dark:bg-neutral-600" />
              <div className="mt-2.5 flex items-baseline justify-between">
                <span className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  1,482
                </span>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  +14.2%
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-700">
                <div className="h-1.5 w-3/4 rounded-full bg-neutral-900 dark:bg-white" />
              </div>
            </div>

            <div className="rounded-lg border border-black/[0.1] bg-white/70 p-3.5 dark:border-white/[0.1] dark:bg-[#202020]/80">
              <div className="h-2 w-24 rounded bg-neutral-400/40 dark:bg-neutral-600" />
              <div className="mt-2.5 flex items-baseline justify-between">
                <span className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  94.6%
                </span>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  Target Met
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-700">
                <div className="h-1.5 w-4/5 rounded-full bg-neutral-900 dark:bg-white" />
              </div>
            </div>
          </div>

          {/* Center Main Trajectory Graph Wireframe */}
          <div className="relative rounded-lg border border-black/[0.1] bg-white/70 p-4 dark:border-white/[0.1] dark:bg-[#202020]/80 lg:col-span-2">
            <div className="flex items-center justify-between pb-3">
              <div className="h-2.5 w-36 rounded bg-neutral-400/50 dark:bg-neutral-600" />
              <div className="flex gap-1.5">
                <span className="rounded border border-black/[0.1] px-2 py-0.5 text-[10px] text-neutral-400 dark:border-white/[0.1]">
                  7D
                </span>
                <span className="rounded bg-neutral-900 px-2 py-0.5 text-[10px] text-white dark:bg-white dark:text-neutral-900">
                  30D
                </span>
                <span className="rounded border border-black/[0.1] px-2 py-0.5 text-[10px] text-neutral-400 dark:border-white/[0.1]">
                  ALL
                </span>
              </div>
            </div>

            {/* SVG Wireframe Chart */}
            <div className="relative mt-2 h-36 w-full">
              <svg
                viewBox="0 0 500 120"
                className="h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                {/* Horizontal reference lines */}
                <line
                  x1="0"
                  y1="25"
                  x2="500"
                  y2="25"
                  stroke="currentColor"
                  strokeOpacity="0.08"
                />
                <line
                  x1="0"
                  y1="60"
                  x2="500"
                  y2="60"
                  stroke="currentColor"
                  strokeOpacity="0.08"
                />
                <line
                  x1="0"
                  y1="95"
                  x2="500"
                  y2="95"
                  stroke="currentColor"
                  strokeOpacity="0.08"
                />

                {/* Target benchmark dashed line */}
                <path
                  d="M10 85 C 80 80, 160 70, 240 60 C 320 50, 400 45, 490 35"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  strokeOpacity="0.3"
                />

                {/* Main trajectory curve */}
                <path
                  d="M10 95 C 70 85, 130 90, 190 65 C 250 40, 310 55, 370 30 C 420 15, 460 25, 490 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="text-neutral-900 dark:text-white"
                />

                {/* Active telemetry inspection point */}
                <circle
                  cx="370"
                  cy="30"
                  r="4"
                  className="fill-neutral-900 dark:fill-white"
                />
                <circle
                  cx="370"
                  cy="30"
                  r="8"
                  stroke="currentColor"
                  strokeOpacity="0.3"
                />
              </svg>
            </div>
            <div className="flex justify-between pt-2 text-[9px] text-neutral-400">
              <span>W1</span>
              <span>W2</span>
              <span>W3</span>
              <span>W4</span>
            </div>
          </div>
        </div>

        {/* Bottom Wireframe Footer */}
        <div className="flex items-center justify-between border-t border-black/[0.08] pt-2.5 text-[10px] text-neutral-400 dark:border-white/[0.08]">
          <span>SCHEMATIC 01 · VOLVO TELEMETRY ARCHITECTURE</span>
          <span>NDA PROTECTED</span>
        </div>
      </div>
    </div>
  );
}

export default function VolvoPartnerConnect() {
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
            Confidential enterprise project · Visuals cannot be shared publicly ·
            UX process &amp; wireframes documented
          </p>

          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 sm:text-[13px]">
            <span className="h-2 w-2 rounded-full bg-neutral-950 dark:bg-white" />
            Volvo Partner Connect 2.0
          </div>

          <h1 className="mt-7 max-w-[980px] font-serif text-[42px] leading-[1.0] tracking-[-0.04em] sm:text-[64px] lg:text-[80px]">
            Connected enterprise dashboards for intelligent dealer operations.
          </h1>

          <p className="mt-8 max-w-[720px] text-lg leading-8 text-neutral-500 dark:text-neutral-400 sm:text-xl">
            Designing connected enterprise dashboards and analytics experiences to
            simplify dealer operations, track performance, and support data-driven
            decisions across 1,400+ authorized retail partners.
          </p>

          {/* Meta Grid */}
          <div className="mt-14 grid grid-cols-2 gap-y-7 border-y border-black/[0.08] py-6 dark:border-white/[0.08] sm:grid-cols-4 sm:py-7">
            <div className="border-r border-black/[0.06] pr-4 dark:border-white/[0.06]">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[12px]">
                Role
              </p>
              <p className="mt-2 text-[14px] font-medium sm:text-[15px]">
                Product Designer
              </p>
            </div>

            <div className="border-r border-black/[0.06] px-4 dark:border-white/[0.06]">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[12px]">
                Domain
              </p>
              <p className="mt-2 text-[14px] font-medium sm:text-[15px]">
                Automotive Connected Operations
              </p>
            </div>

            <div className="border-r border-black/[0.06] px-4 dark:border-white/[0.06]">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[12px]">
                Focus
              </p>
              <p className="mt-2 text-[14px] font-medium sm:text-[15px]">
                UX/UI · Data Visualization
              </p>
            </div>

            <div className="pl-4">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[12px]">
                Platform
              </p>
              <p className="mt-2 text-[14px] font-medium sm:text-[15px]">
                Enterprise Web / Telemetry
              </p>
            </div>
          </div>

          {/* Hero Wireframe Display */}
          <div className="mt-14 overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-2 shadow-2xl dark:border-white/[0.08] dark:bg-[#161616] sm:p-4">
            <VolvoWireframe />
          </div>
        </section>

        {/* Section 01: The Problem */}
        <section className="border-t border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 sm:py-28 lg:px-14">
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.16em] text-neutral-400">
            <span>01</span>
            <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
            <span>The Challenge</span>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <h2 className="font-serif text-3xl leading-[1.08] tracking-[-0.035em] sm:text-5xl">
              Fragmented data. Delayed decisions in the service bay.
            </h2>

            <div className="space-y-6 text-base leading-7 text-neutral-500 dark:text-neutral-400 sm:text-lg sm:leading-8">
              <p>
                Dealership service managers and operations directors were juggling
                multiple disconnected tools: legacy parts management databases,
                standalone warranty claims, and static monthly spreadsheets.
              </p>
              <p>
                Because diagnostic vehicle telemetry wasn’t integrated into daily
                operational scheduling, dealerships frequently faced unexpected
                part shortages, delayed vehicle turnaround times, and blind spots
                in overall fleet maintenance trends.
              </p>
              <p className="font-medium text-neutral-950 dark:text-neutral-100">
                The objective: create a unified, real-time command center that
                translates complex vehicle telematics into immediate, confident operational action.
              </p>
            </div>
          </div>
        </section>

        {/* Section 02: Key Metrics */}
        <section className="border-t border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 sm:py-24 lg:px-14">
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.16em] text-neutral-400">
            <span>02</span>
            <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
            <span>Operational Impact</span>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-black/[0.08] bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:border-white/[0.08] dark:bg-[#181818]">
                  <Icon className="h-5 w-5 text-neutral-950 dark:text-white" strokeWidth={1.75} />
                  <p className="mt-5 font-serif text-3xl tracking-[-0.03em] sm:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-950 dark:text-white">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-neutral-400">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 03: The Solution Pillars */}
        <section className="border-t border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 sm:py-28 lg:px-14">
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.16em] text-neutral-400">
            <span>03</span>
            <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
            <span>The Solution</span>
          </div>

          <div className="mt-8 max-w-2xl">
            <h2 className="font-serif text-3xl leading-[1.08] tracking-[-0.035em] sm:text-5xl">
              From raw data tables to an intuitive operational cockpit.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-2xl border border-black/[0.08] bg-white p-7 transition-colors hover:border-black/[0.18] dark:border-white/[0.08] dark:bg-[#181818] dark:hover:border-white/[0.2]">
                <span className="font-mono text-xs text-neutral-400">{pillar.number}</span>
                <h3 className="mt-4 text-xl font-medium tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                  {pillar.description}
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
                Next Project · 02
              </p>
              <h3 className="mt-2 font-serif text-2xl tracking-[-0.02em] sm:text-3xl">
                3D Car Design &amp; X-Ray Experience
              </h3>
            </div>

            <Link
              to="/car-3d"
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