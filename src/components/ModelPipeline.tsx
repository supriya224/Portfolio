import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const stages = [
  {
    step: "01",
    name: "Data Ingestion",
    status: "Healthy",
    rate: "2.4 GB/s",
    detail: "Multi-source streaming telemetry & edge data validation"
  },
  {
    step: "02",
    name: "Feature Pipeline",
    status: "Processing",
    rate: "18,400 rows/s",
    detail: "Feature extraction, embedding generation & drift checks"
  },
  {
    step: "03",
    name: "Distributed Training",
    status: "Active (Epoch 42/50)",
    rate: "98.2% GPU Util",
    detail: "Multi-node parallel gradient calculation & checkpointing"
  },
  {
    step: "04",
    name: "Model Validation",
    status: "Passing",
    rate: "F1: 0.942",
    detail: "Continuous regression tests & threshold sanity benchmarks"
  },
  {
    step: "05",
    name: "Deployment & Serving",
    status: "Live v2.4.1",
    rate: "14ms Latency",
    detail: "Containerized inference cluster with zero-downtime canary"
  }
];

const pillars = [
  {
    number: "01",
    title: "Black Box to Visual Telemetry",
    description:
      "Transformed complex, terminal-heavy ML training runs into an intuitive visual pipeline graph, enabling engineers and stakeholders to monitor epoch progression and resource usage in real time."
  },
  {
    number: "02",
    title: "Automated Product Newsletters",
    description:
      "Designed automated weekly and milestone product newsletters that digest pipeline metrics, model accuracy improvements, and release notes into clean, readable briefings for executive leadership."
  },
  {
    number: "03",
    title: "Instant Anomaly & Drift Pinpointing",
    description:
      "Introduced proactive alert states that distinguish transient network hiccups from catastrophic data distribution shifts or CUDA out-of-memory crashes."
  },
  {
    number: "04",
    title: "High-Density Data Visualization",
    description:
      "Architected clean, low-latency charts displaying loss curves, GPU cluster thermal loads, and p99 inference latency percentiles with responsive filtering."
  }
];

function ModelPipelineWireframe({
  selectedStage,
  onSelect
}: {
  selectedStage: number;
  onSelect: (index: number) => void;
}) {
  const activeStage = stages[selectedStage];

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
        {/* Top Wireframe Bar */}
        <div className="flex items-center justify-between border-b border-black/[0.1] pb-3 text-xs dark:border-white/[0.1]">
          <div className="flex items-center gap-3">
            <span className="font-bold text-neutral-900 dark:text-white">
              ML PIPELINE GRAPH
            </span>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-500 dark:text-neutral-400">
              JOB_RUN_#9418
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-black/[0.15] px-2.5 py-0.5 text-[10px] uppercase text-neutral-500 dark:border-white/[0.15] dark:text-neutral-400">
              TELEMETRY WIREFRAME
            </span>
            <div className="h-6 w-6 rounded-full border border-black/[0.15] dark:border-white/[0.15]" />
          </div>
        </div>

        {/* Center DAG Pipeline Graph Nodes Wireframe */}
        <div className="my-auto space-y-4 pt-2">
          {/* Nodes Row */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {stages.map((stage, idx) => (
              <button
                key={stage.step}
                type="button"
                onClick={() => onSelect(idx)}
                className={`rounded-lg border p-2.5 text-left transition-all ${
                  selectedStage === idx
                    ? "border-neutral-950 bg-neutral-950 text-white dark:border-white dark:bg-white dark:text-neutral-950"
                    : "border-black/[0.1] bg-white/70 hover:border-black/[0.2] dark:border-white/[0.1] dark:bg-[#202020]/80 dark:hover:border-white/[0.2]"
                }`}>
                <span className="text-[10px] opacity-70">
                  STEP {stage.step}
                </span>
                <p className="mt-1 truncate text-xs font-bold">{stage.name}</p>
                <p className="mt-1 text-[10px] opacity-80">{stage.rate}</p>
              </button>
            ))}
          </div>

          {/* Node Inspector Wireframe Box */}
          <div className="rounded-lg border border-black/[0.1] bg-white/70 p-4 dark:border-white/[0.1] dark:bg-[#202020]/80">
            <div className="flex items-center justify-between border-b border-black/[0.06] pb-2 text-xs dark:border-white/[0.06]">
              <div>
                <span className="text-[10px] text-neutral-400">INSPECTING NODE</span>
                <h4 className="mt-0.5 text-sm font-bold">{activeStage?.name}</h4>
              </div>
              <span className="rounded border border-black/[0.1] px-2 py-0.5 text-[10px] dark:border-white/[0.1]">
                {activeStage?.status}
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
              {activeStage?.detail}
            </p>
          </div>
        </div>

        {/* Bottom Wireframe Footer */}
        <div className="flex items-center justify-between border-t border-black/[0.08] pt-2.5 text-[10px] text-neutral-400 dark:border-white/[0.08]">
          <span>SCHEMATIC 04 · MLOPS DAG PIPELINE ARCHITECTURE</span>
          <span>NDA PROTECTED</span>
        </div>
      </div>
    </div>
  );
}

export default function ModelPipeline() {
  const [selectedStage, setSelectedStage] = useState(2);

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
            Confidential enterprise MLOps platform · Visuals protected under NDA ·
            Pipeline graph &amp; newsletter wireframes documented
          </p>

          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 sm:text-[13px]">
            <span className="h-2 w-2 rounded-full bg-neutral-950 dark:bg-white" />
            Enterprise · Data Visualization &amp; AI
          </div>

          <h1 className="mt-7 max-w-[980px] font-serif text-[42px] leading-[1.0] tracking-[-0.04em] sm:text-[64px] lg:text-[80px]">
            Model Pipeline Dashboards &amp; Automated Product Newsletters.
          </h1>

          <p className="mt-8 max-w-[720px] text-lg leading-8 text-neutral-500 dark:text-neutral-400 sm:text-xl">
            Designing end-to-end machine learning model pipeline monitoring dashboards,
            data visualizations, and automated product newsletters built for
            transparent, data-driven operational visibility.
          </p>

          {/* Meta Grid */}
          <div className="mt-14 grid grid-cols-2 gap-y-7 border-y border-black/[0.08] py-6 dark:border-white/[0.08] sm:grid-cols-4 sm:py-7">
            <div className="border-r border-black/[0.06] pr-4 dark:border-white/[0.06]">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[12px]">
                Role
              </p>
              <p className="mt-2 text-[14px] font-medium sm:text-[15px]">
                Product Designer &amp; Dev
              </p>
            </div>

            <div className="border-r border-black/[0.06] px-4 dark:border-white/[0.06]">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[12px]">
                Product
              </p>
              <p className="mt-2 text-[14px] font-medium sm:text-[15px]">
                MLOps &amp; Pipeline Intelligence
              </p>
            </div>

            <div className="border-r border-black/[0.06] px-4 dark:border-white/[0.06]">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[12px]">
                Focus
              </p>
              <p className="mt-2 text-[14px] font-medium sm:text-[15px]">
                Data Viz · Newsletters · UX
              </p>
            </div>

            <div className="pl-4">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[12px]">
                Platform
              </p>
              <p className="mt-2 text-[14px] font-medium sm:text-[15px]">
                Enterprise Analytics Web
              </p>
            </div>
          </div>

          {/* Hero Wireframe Display */}
          <div className="mt-14 overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-2 shadow-2xl dark:border-white/[0.08] dark:bg-[#161616] sm:p-4">
            <ModelPipelineWireframe
              selectedStage={selectedStage}
              onSelect={setSelectedStage}
            />
          </div>
        </section>

        {/* Section 01: Automated Newsletter System */}
        <section className="border-t border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 sm:py-28 lg:px-14">
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.16em] text-neutral-400">
            <span>01</span>
            <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
            <span>Automated Product Newsletters</span>
          </div>

          <div className="mt-8 max-w-2xl">
            <h2 className="font-serif text-3xl leading-[1.08] tracking-[-0.035em] sm:text-5xl">
              From raw telemetry to executive intelligence digests.
            </h2>
            <p className="mt-4 text-neutral-500 dark:text-neutral-400">
              Not everyone looks at live dashboard graphs. We engineered an automated
              newsletter engine that analyzes weekly model shifts and compiles concise
              updates for leaders and client stakeholders.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-black/[0.08] bg-white p-7 shadow-sm dark:border-white/[0.08] dark:bg-[#181818] sm:p-9">
            <div className="flex items-center gap-3 border-b border-black/[0.06] pb-4 dark:border-white/[0.06]">
              <Mail className="h-5 w-5 text-neutral-900 dark:text-white" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Automated Digest Template Wireframe
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="font-serif text-2xl">
                Weekly Model Intelligence &amp; Performance Summary
              </h3>
              <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                Automated compilation of training velocity, model deployment milestones,
                validation accuracy variance, and resource utilization highlights
                delivered directly to Slack and email inboxes every Monday at 08:00 AM.
              </p>

              <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
                <div className="rounded-xl border border-black/[0.06] p-4 dark:border-white/[0.06] dark:bg-[#202020]">
                  <p className="text-xs text-neutral-400">Inference Speedup</p>
                  <p className="mt-1 font-serif text-2xl font-bold">+34.8%</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] p-4 dark:border-white/[0.06] dark:bg-[#202020]">
                  <p className="text-xs text-neutral-400">Epoch Loss Reduction</p>
                  <p className="mt-1 font-serif text-2xl font-bold">-0.042</p>
                </div>
                <div className="rounded-xl border border-black/[0.06] p-4 dark:border-white/[0.06] dark:bg-[#202020]">
                  <p className="text-xs text-neutral-400">Deployment Uptime</p>
                  <p className="mt-1 font-serif text-2xl font-bold">99.98%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Design & Solution Pillars */}
        <section className="border-t border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 sm:py-28 lg:px-14">
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.16em] text-neutral-400">
            <span>02</span>
            <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
            <span>Design Approach</span>
          </div>

          <div className="mt-8 max-w-2xl">
            <h2 className="font-serif text-3xl leading-[1.08] tracking-[-0.035em] sm:text-5xl">
              Turning complex pipelines into effortless clarity.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {pillars.map((item) => (
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
                Next Project · 05
              </p>
              <h3 className="mt-2 font-serif text-2xl tracking-[-0.02em] sm:text-3xl">
                Fire &amp; Smoke Detection
              </h3>
            </div>

            <Link
              to="/fire"
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