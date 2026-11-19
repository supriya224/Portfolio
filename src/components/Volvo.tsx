import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart2,
  CheckCircle2,
  ChevronRight,
  Code2,
  Layers,
  Layout,
  Lock,
  Monitor
} from "lucide-react";

const getSectionTag = (label: string) => `// ${label}`;

const BTN_TAB_ACTIVE =
  "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-semibold shadow-sm";
const BTN_TAB_INACTIVE =
  "text-neutral-500 hover:text-black dark:hover:text-white bg-black/[0.03] dark:bg-white/[0.04]";

export default function VolvoPartnerConnect() {
  const [activeTab, setActiveTab] = useState<"cockpit" | "table" | "competence">("cockpit");
  const [wireframeMode, setWireframeMode] = useState<"wireframe" | "final">("final");

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
            CASE STUDY 01 / 05
          </span>
        </nav>

        {/* NDA & Confidentiality Disclaimer Banner */}
        <section className="mt-5 rounded-xl border border-amber-500/20 bg-amber-500/10 p-3.5">
          <div className="flex items-start gap-2.5 font-mono text-xs text-amber-900 dark:text-amber-200">
            <Lock className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
            <p>
              <strong>Confidentiality Notice:</strong> Real Volvo internal business numbers and proprietary branding are replaced with sanitized wireframes and mock UI representations. The design process, workflows, problem-solving, and architectural decisions shared here are 100% authentic to my work.
            </p>
          </div>
        </section>

        {/* =====================================================
            HERO SECTION
        ====================================================== */}
        <header className="mt-8 pb-10 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>{getSectionTag("PRODUCT DESIGN CASE STUDY")}</span>
          </div>

          <h1 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-950 dark:text-white leading-[1.05]">
            Volvo Partner Connect 2.0
          </h1>

          <p className="mt-3 max-w-3xl text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
            Redesigning an enterprise dealer operations platform from scratch as the sole product designer—turning messy legacy workflows and Excel sheets into structured, intuitive dashboards.
          </p>

          {/* Quick Meta Chips */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 font-mono text-xs border-t border-black/[0.08] dark:border-white/[0.08] pt-4">
            <div>
              <span className="text-neutral-400 block mb-1 uppercase tracking-wider">My Role</span>
              <span className="font-semibold text-neutral-950 dark:text-white">Sole Product Designer</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-1 uppercase tracking-wider">Scope</span>
              <span className="text-neutral-800 dark:text-neutral-200">Research, Wireframes, UI, System &amp; Handoff</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-1 uppercase tracking-wider">Platform</span>
              <span className="text-neutral-800 dark:text-neutral-200">Enterprise Web Application</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-1 uppercase tracking-wider">Company</span>
              <span className="text-neutral-800 dark:text-neutral-200">Advitiix Technovate</span>
            </div>
          </div>

          {/* Interactive UI Preview */}
          <div className="mt-12 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-[#f7f5ef] dark:bg-[#141414] p-5 sm:p-7 font-mono text-xs shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.08] dark:border-white/[0.08] pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-sans font-bold text-neutral-900 dark:text-white">
                  PARTNER CONNECT 2.0 · MOCK UI
                </span>
                <span className="text-neutral-400">/</span>
                <span className="text-neutral-500 text-[11px]">DEALER OPERATIONS</span>
              </div>

              {/* View Switcher */}
              <div className="flex items-center gap-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] p-1 text-[11px]">
                <button
                  type="button"
                  onClick={() => setActiveTab("cockpit")}
                  className={`rounded-lg px-3 py-1.5 transition-all ${activeTab === "cockpit" ? BTN_TAB_ACTIVE : BTN_TAB_INACTIVE
                    }`}>
                  Executive Cockpit
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("table")}
                  className={`rounded-lg px-3 py-1.5 transition-all ${activeTab === "table" ? BTN_TAB_ACTIVE : BTN_TAB_INACTIVE
                    }`}>
                  Performance Table
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("competence")}
                  className={`rounded-lg px-3 py-1.5 transition-all ${activeTab === "competence" ? BTN_TAB_ACTIVE : BTN_TAB_INACTIVE
                    }`}>
                  Competence Matrix
                </button>
              </div>
            </div>

            {/* Tab 1: Executive Cockpit */}
            {activeTab === "cockpit" && (
              <div className="mt-5 space-y-4">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-neutral-900 p-3.5">
                    <span className="text-[10px] text-neutral-400 block uppercase">PDP Target Achieved</span>
                    <span className="text-xl font-bold text-neutral-950 dark:text-white mt-1 block">94.8%</span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">+4.2% vs target</span>
                  </div>
                  <div className="rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-neutral-900 p-3.5">
                    <span className="text-[10px] text-neutral-400 block uppercase">Equipment Uptime</span>
                    <span className="text-xl font-bold text-neutral-950 dark:text-white mt-1 block">99.1%</span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Mining + C&amp;I</span>
                  </div>
                  <div className="rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-neutral-900 p-3.5">
                    <span className="text-[10px] text-neutral-400 block uppercase">Tech Certification</span>
                    <span className="text-xl font-bold text-neutral-950 dark:text-white mt-1 block">89.4%</span>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">8 Renewals Due</span>
                  </div>
                  <div className="rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-neutral-900 p-3.5">
                    <span className="text-[10px] text-neutral-400 block uppercase">Open Audit Actions</span>
                    <span className="text-xl font-bold text-neutral-950 dark:text-white mt-1 block">02 Tasks</span>
                    <span className="text-[10px] text-rose-500 font-semibold">1 Critical Priority</span>
                  </div>
                </div>

                <div className="rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-neutral-900 p-4 space-y-2">
                  <div className="flex justify-between items-center text-[11px] font-sans font-semibold text-neutral-800 dark:text-neutral-200">
                    <span>Quarterly Target vs Actual Performance Curve</span>
                    <span className="text-neutral-400 font-mono text-[10px]">Q1–Q4 TRAJECTORY</span>
                  </div>
                  <div className="h-24 w-full pt-2">
                    <svg className="h-full w-full" viewBox="0 0 500 80" preserveAspectRatio="none">
                      <line x1="0" y1="20" x2="500" y2="20" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
                      <line x1="0" y1="40" x2="500" y2="40" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
                      <line x1="0" y1="60" x2="500" y2="60" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
                      <path d="M0,65 Q125,50 250,35 T500,10 L500,80 L0,80 Z" fill="currentColor" className="text-emerald-500/10" />
                      <path d="M0,65 Q125,50 250,35 T500,10" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500" />
                      <path d="M0,50 L500,25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-neutral-400" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Performance Table */}
            {activeTab === "table" && (
              <div className="mt-5 overflow-x-auto rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-neutral-900">
                <table className="w-full text-left text-[11px]">
                  <thead className="border-b border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] text-neutral-400 uppercase">
                    <tr>
                      <th className="py-2.5 px-3">Dealer Branch</th>
                      <th className="py-2.5 px-3">Zone / Sector</th>
                      <th className="py-2.5 px-3">PDP Attainment</th>
                      <th className="py-2.5 px-3">DFHM Facility Audit</th>
                      <th className="py-2.5 px-3">Action Item</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.04] text-neutral-700 dark:text-neutral-300">
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-neutral-950 dark:text-white">Nordic Commercial Hub</td>
                      <td className="py-2.5 px-3">Zone A (Mining)</td>
                      <td className="py-2.5 px-3 text-emerald-600 dark:text-emerald-400 font-bold">96.8%</td>
                      <td className="py-2.5 px-3"><span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-emerald-600 dark:text-emerald-400 text-[10px]">Compliant</span></td>
                      <td className="py-2.5 px-3 text-neutral-400">0 Open</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-neutral-950 dark:text-white">Central Service Center</td>
                      <td className="py-2.5 px-3">Zone B (C&amp;I)</td>
                      <td className="py-2.5 px-3 text-emerald-600 dark:text-emerald-400 font-bold">92.4%</td>
                      <td className="py-2.5 px-3"><span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-emerald-600 dark:text-emerald-400 text-[10px]">Compliant</span></td>
                      <td className="py-2.5 px-3 text-neutral-500">1 In Review</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-neutral-950 dark:text-white">West Workshop Hub</td>
                      <td className="py-2.5 px-3">Zone C (Highway)</td>
                      <td className="py-2.5 px-3 text-amber-600 dark:text-amber-400 font-bold">78.1%</td>
                      <td className="py-2.5 px-3"><span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-amber-600 dark:text-amber-400 text-[10px]">Action Due</span></td>
                      <td className="py-2.5 px-3 text-rose-500 font-bold">Ticket #8491 Open</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Tab 3: Competence Matrix */}
            {activeTab === "competence" && (
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-neutral-900 p-4">
                  <span className="text-[10px] text-neutral-400 block uppercase">SCL (Service Competence)</span>
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1 block">96%</span>
                  <span className="text-[10px] text-neutral-500 mt-1 block">Tier 3 Certified</span>
                </div>
                <div className="rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-neutral-900 p-4">
                  <span className="text-[10px] text-neutral-400 block uppercase">TCL (Technical Competence)</span>
                  <span className="text-2xl font-bold text-amber-600 dark:text-amber-400 mt-1 block">84%</span>
                  <span className="text-[10px] text-neutral-500 mt-1 block">TNI Training Pending</span>
                </div>
                <div className="rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-neutral-900 p-4">
                  <span className="text-[10px] text-neutral-400 block uppercase">LCL (Logistics &amp; Parts)</span>
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1 block">94%</span>
                  <span className="text-[10px] text-neutral-500 mt-1 block">Parts Roster Cleared</span>
                </div>
              </div>
            )}

            <div className="mt-4 pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[10px] text-neutral-400">
              <span>Sanitized Mock Dashboard · Built in Figma</span>
              <span>Visualizing dense enterprise dealer operations</span>
            </div>
          </div>
        </header>

        {/* =====================================================
            1. THE BACKSTORY & THE REAL PROBLEM
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("01 · THE BACKSTORY")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Understanding the business and the legacy app
          </h2>

          <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p>
              When I joined as the <strong>sole product designer</strong>, the client had an existing web portal that dealerships and regional managers dreaded using. Everyone was keeping their real numbers in massive, disjointed Excel sheets.
            </p>
            <p>
              Before jumping into Figma, I had to understand <strong>where the data was actually coming from</strong>. Dealerships handle dozens of interconnected business lines:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 font-mono text-xs">
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5">
              <strong className="text-neutral-950 dark:text-white block mb-1">Equipment Data</strong>
              <p className="text-neutral-600 dark:text-neutral-400 font-sans text-xs">
                Tracking machine populations across C&amp;I (Construction &amp; Infrastructure) and heavy Mining machinery, warranty schedules, and uptime.
              </p>
            </div>
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5">
              <strong className="text-neutral-950 dark:text-white block mb-1">Parts &amp; Service Revenue</strong>
              <p className="text-neutral-600 dark:text-neutral-400 font-sans text-xs">
                Monitoring parts &amp; lubes inventory turnover, bay throughput, customer service agreements (CSA), and quarterly revenue targets.
              </p>
            </div>
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5">
              <strong className="text-neutral-950 dark:text-white block mb-1">People &amp; Facilities</strong>
              <p className="text-neutral-600 dark:text-neutral-400 font-sans text-xs">
                Technician competence certifications (SCL/TCL/LCL), training calendarization, and capital investment for EV tools and showroom growth.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-5 font-mono text-xs">
            <strong className="text-neutral-950 dark:text-white block mb-1">The Real Pain Point:</strong>
            <p className="text-neutral-600 dark:text-neutral-400 font-sans text-sm">
              The old app just dumped raw database tables onto the screen. If a dealer&apos;s first-time fix rate was falling, managers couldn&apos;t tell whether it was caused by delayed parts shipments or a shortage of certified technicians. Everything had to be cross-referenced by hand during monthly reviews.
            </p>
          </div>
        </section>

        {/* =====================================================
            2. HOW I DID USER RESEARCH
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("02 · HOW I DID RESEARCH")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Practical discovery with stakeholders &amp; users
          </h2>

          <p className="mt-6 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            Because this was a complex enterprise tool, I didn&apos;t do generic surveys. Instead, I did focused, practical discovery sessions:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 font-mono text-xs">
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <span className="text-[10px] text-neutral-400 uppercase font-bold">1. Sitting with Stakeholders &amp; PMs</span>
              <p className="font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                I sat with product managers and business stakeholders to walk through the Business Requirement Documents (BRDs). I asked simple, direct questions: <em>&quot;What numbers do managers look at on day one of the month? Which numbers trigger an urgent call?&quot;</em>
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <span className="text-[10px] text-neutral-400 uppercase font-bold">2. Auditing the Old Sheets &amp; Screen Flows</span>
              <p className="font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                I collected the actual spreadsheets that regional managers used before their monthly dealer meetings. I highlighted columns that were checked every time versus columns that were purely background records.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <span className="text-[10px] text-neutral-400 uppercase font-bold">3. Identifying the 3 Core Roles</span>
              <p className="font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                I realized three distinct groups used the tool: <strong>Dealer Principals</strong> (care about high-level quarterly targets &amp; revenue), <strong>Operations Managers</strong> (care about daily service bays, parts, and machine uptime), and <strong>Training Managers</strong> (care about technician licenses expiring).
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <span className="text-[10px] text-neutral-400 uppercase font-bold">4. The Big Insight: Connect Data to Action</span>
              <p className="font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Seeing a bad number was not enough. If an audit found a broken tool or missing EV safety equipment, the user had to open Outlook and email someone. The new design had to let them turn an issue into an assigned action item right from the screen.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            3. WIREFRAMING & CLIENT APPROVAL
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("03 · WIREFRAMES & APPROVALS")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Wireframing first, getting client sign-off
          </h2>

          <p className="mt-6 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            I never design final UI in colors right away. For every module, I started with low-fidelity wireframes in FigJam and Figma. I reviewed these directly with the client and stakeholders to agree on information hierarchy before touching typography or styling.
          </p>

          {/* Interactive Wireframe vs High-Fi Switcher */}
          <div className="mt-8 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 font-mono text-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.08] dark:border-white/[0.08] pb-4">
              <div>
                <span className="text-neutral-400 text-[10px] block uppercase">DESIGN EVOLUTION</span>
                <span className="font-serif text-xl font-normal text-neutral-950 dark:text-white">
                  From Low-Fi Layout to Production UI
                </span>
              </div>

              <div className="flex items-center gap-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] p-1 text-[11px]">
                <button
                  type="button"
                  onClick={() => setWireframeMode("wireframe")}
                  className={`rounded-lg px-3 py-1.5 transition-all ${wireframeMode === "wireframe" ? BTN_TAB_ACTIVE : BTN_TAB_INACTIVE
                    }`}>
                  Low-Fi Wireframe
                </button>
                <button
                  type="button"
                  onClick={() => setWireframeMode("final")}
                  className={`rounded-lg px-3 py-1.5 transition-all ${wireframeMode === "final" ? BTN_TAB_ACTIVE : BTN_TAB_INACTIVE
                    }`}>
                  Final Polish
                </button>
              </div>
            </div>

            <div className="mt-6">
              {wireframeMode === "wireframe" ? (
                <div className="rounded-xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-100/60 dark:bg-neutral-900/60 p-6 space-y-4">
                  <div className="flex justify-between text-[10px] text-neutral-400 border-b border-neutral-300 dark:border-neutral-700 pb-2">
                    <span>[GLOBAL NAV: MODULE SELECTOR + ZONE DROPDOWN]</span>
                    <span>[USER PROFILE]</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-200/50 dark:bg-neutral-800/50 p-2 flex flex-col justify-between">
                      <span className="text-[9px] text-neutral-400">[SUMMARY KPI 1]</span>
                      <div className="h-2 w-3/4 rounded bg-neutral-300 dark:bg-neutral-600" />
                    </div>
                    <div className="h-16 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-200/50 dark:bg-neutral-800/50 p-2 flex flex-col justify-between">
                      <span className="text-[9px] text-neutral-400">[SUMMARY KPI 2]</span>
                      <div className="h-2 w-3/4 rounded bg-neutral-300 dark:bg-neutral-600" />
                    </div>
                    <div className="h-16 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-200/50 dark:bg-neutral-800/50 p-2 flex flex-col justify-between">
                      <span className="text-[9px] text-neutral-400">[SUMMARY KPI 3]</span>
                      <div className="h-2 w-3/4 rounded bg-neutral-300 dark:bg-neutral-600" />
                    </div>
                  </div>
                  <div className="rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-200/30 dark:bg-neutral-800/30 p-3 space-y-2">
                    <span className="text-[9px] text-neutral-400 block">[STICKY TABLE: DEALER NAME | PDP | AUDIT STATUS | ACTION]</span>
                    <div className="h-2 w-full rounded bg-neutral-300 dark:bg-neutral-700" />
                    <div className="h-2 w-4/5 rounded bg-neutral-300 dark:bg-neutral-700" />
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-neutral-900 p-6 space-y-4 shadow-sm">
                  <div className="flex justify-between items-center text-xs border-b border-black/[0.05] dark:border-white/[0.05] pb-2 font-sans font-semibold">
                    <span>Performance Development Plan · Zone North</span>
                    <span className="rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 text-[10px]">Q4 IN PROGRESS</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
                      <span className="text-[10px] text-neutral-400 block uppercase">Target Attainment</span>
                      <span className="text-lg font-bold text-neutral-950 dark:text-white mt-0.5 block">94.8%</span>
                    </div>
                    <div className="p-3 rounded-lg border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
                      <span className="text-[10px] text-neutral-400 block uppercase">Mining Fleet Uptime</span>
                      <span className="text-lg font-bold text-neutral-950 dark:text-white mt-0.5 block">99.1%</span>
                    </div>
                    <div className="p-3 rounded-lg border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
                      <span className="text-[10px] text-neutral-400 block uppercase">Certified Technicians</span>
                      <span className="text-lg font-bold text-neutral-950 dark:text-white mt-0.5 block">148 / 160</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] text-[11px] text-neutral-600 dark:text-neutral-400 font-sans">
                    Client feedback during low-fi review: <em>&quot;We don&apos;t need 20 charts on the main page. Give us the 3 core numbers on top, and put the dealer list right below with an immediate action button.&quot;</em> That directly shaped the final UI.
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            4. AUTO LAYOUT & DESIGN SYSTEM
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("04 · AUTO LAYOUT & COMPONENTS")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Auto layout, components &amp; design consistency
          </h2>

          <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p>
              Because I had to design over 20 submodules (PDP, Equipment, Uptime, Dealer Investment, Competence, DFHM, Action Planner, etc.), doing one-off screen designs was out of the question.
            </p>
            <p>
              I built a clean, scalable component system in Figma with <strong>100% Auto Layout</strong> so every card, table row, and modal could resize cleanly:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 font-mono text-xs">
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <Layout size={18} className="text-neutral-950 dark:text-white" />
              <strong className="text-neutral-950 dark:text-white block">Auto Layout Everything</strong>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Headers, toolbars, and nested table cells were built with Auto Layout so developers could see exact padding, gap tokens, and resizing behavior.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <Layers size={18} className="text-neutral-950 dark:text-white" />
              <strong className="text-neutral-950 dark:text-white block">Reusable UI Library</strong>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Created reusable components for KPI cards, table rows, filter chips, breadcrumbs, status badges, and side-drawers used across all 20+ modules.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <CheckCircle2 size={18} className="text-emerald-500" />
              <strong className="text-neutral-950 dark:text-white block">Strict Color Tokens</strong>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Standardized status colors: Emerald for targets met, Amber for pending SLAs (14-day alert), and Rose exclusively for audit non-conformance blocks.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            5. MODULES, DASHBOARD & CHARTS
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("05 · MODULES & CHARTS")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Designing the modules, then the executive dashboard
          </h2>

          <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p>
              I designed each operational module first to make sure the detailed tables and workflows worked. Then, I tackled the most important piece: <strong>the executive dashboard and charts</strong>.
            </p>
            <p>
              Regional managers didn&apos;t want to click through 10 pages just to see if their zone was doing well. I synthesized the data from all modules into high-level visual charts:
            </p>
          </div>

          <div className="mt-8 space-y-4 font-mono text-xs">
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 space-y-2">
              <div className="flex items-center gap-2 font-bold text-neutral-950 dark:text-white">
                <BarChart2 size={16} className="text-emerald-500" />
                <span>Quarterly Trend Trajectory Curves</span>
              </div>
              <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Replaced static PDF monthly bars with an interactive trend chart showing actual performance against the regional target line, so managers instantly see if they are falling behind mid-quarter.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 space-y-2">
              <div className="flex items-center gap-2 font-bold text-neutral-950 dark:text-white">
                <Monitor size={16} className="text-emerald-500" />
                <span>Side-Drawer Row Expansion</span>
              </div>
              <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Rather than overloading tables with 30 columns, clicking any dealer row slides open a clean side drawer displaying their machine population breakdown (C&amp;I vs Mining), facility audit checklist, and open tickets.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 space-y-2">
              <div className="flex items-center gap-2 font-bold text-neutral-950 dark:text-white">
                <ChevronRight size={16} className="text-emerald-500" />
                <span>Action Planner Integration</span>
              </div>
              <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Every chart and table has a direct &quot;Create Action Ticket&quot; shortcut that feeds straight into the Kanban board, creating mutual accountability between dealership heads and regional consultants.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            6. DEVELOPER HANDOFF
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("06 · DEVELOPER HANDOFF")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Developer handoff &amp; frontend collaboration
          </h2>

          <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p>
              Because of my frontend background, I know that designs often break during implementation if edge cases aren&apos;t thought through. I treated developer handoff as a core deliverable:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 font-mono text-xs">
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <Code2 size={16} className="text-neutral-950 dark:text-white" />
              <strong className="text-neutral-950 dark:text-white block">Documented States &amp; Edge Cases</strong>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Prepared Figma handoff specs showing default, hover, active, loading skeletons, empty data states, and error handling for every component.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <Code2 size={16} className="text-neutral-950 dark:text-white" />
              <strong className="text-neutral-950 dark:text-white block">Virtualization &amp; Table Scrolling</strong>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Specified sticky frozen columns for dealer IDs and worked with engineers to ensure tables with 1,400+ rows rendered smoothly without lag.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <Code2 size={16} className="text-neutral-950 dark:text-white" />
              <strong className="text-neutral-950 dark:text-white block">Responsive Breakpoints</strong>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Field consultants conduct workshop audits on iPads and tablets. I created adapted responsive layouts so checklists were touch-friendly on 11-inch screens.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <Code2 size={16} className="text-neutral-950 dark:text-white" />
              <strong className="text-neutral-950 dark:text-white block">Ongoing Dev Syncs &amp; QA</strong>
              <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Held weekly design-dev review syncs during sprints to test built components against the Figma designs and fix visual discrepancies early.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            7. KEY LEARNINGS
        ====================================================== */}
        <section className="py-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("07 · REFLECTION")}
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal tracking-tight text-neutral-950 dark:text-white">
            What I learned as the sole product designer
          </h2>

          <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p>
              Owning Volvo Partner Connect 2.0 end-to-end taught me that <strong>great enterprise product design is about untangling complexity</strong>. Anyone can make a pretty landing page, but building a multi-module platform where real people manage multi-million dollar dealer operations requires:
            </p>
            <ul className="space-y-3 pt-2 font-mono text-xs">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span className="font-sans text-sm text-neutral-700 dark:text-neutral-300">
                  <strong>Domain Empathy First:</strong> Understanding how dealers make money and how equipment gets serviced matters more than surface-level aesthetic trends.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span className="font-sans text-sm text-neutral-700 dark:text-neutral-300">
                  <strong>Communication with Stakeholders:</strong> Low-fi wireframes and honest feedback sessions save weeks of re-work compared to presenting finished UI out of nowhere.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span className="font-sans text-sm text-neutral-700 dark:text-neutral-300">
                  <strong>Speaking Developer Language:</strong> Understanding tokens, auto layout, and frontend constraints creates mutual trust between design and engineering.
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
              Fire Detection Live App
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 font-sans">
              Spatial 2D floor plans, thermal camera computer vision, and confidence tier alert triage.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/selected-work"
              className="inline-flex items-center gap-2 rounded-xl border border-black/15 dark:border-white/15 px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:border-black dark:hover:border-white transition-all">
              <span>All Selected Work</span>
            </Link>

            <Link
              to="/fire"
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
