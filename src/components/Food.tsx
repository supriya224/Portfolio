import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Database,
  FileCheck,
  FileText,
  Layers,
  Table
} from "lucide-react";
import { Link } from "react-router-dom";

const getSectionTag = (label: string) => `// ${label}`;

const compliancePersonas = [
  {
    role: "Global QA & Food Safety Director",
    context: "Oversees 200+ ingredient suppliers across North America and Europe.",
    need: "High-level risk heatmaps, supplier compliance rates, and automated audit status reporting."
  },
  {
    role: "Facility Compliance Officer",
    context: "Receives raw bulk shipments daily at local manufacturing plants.",
    need: "Instant validation of supplier COAs (Certificates of Analysis) and rapid non-conformance logging."
  },
  {
    role: "Third-Party Food Safety Auditor",
    context: "Performs annual on-site inspections against GFSI, SQF, and HACCP standards.",
    need: "Standardized audit item checklist, evidence upload vault, and non-compliance dispute logging."
  }
];

const complianceWorkflows = [
  {
    step: "01",
    title: "Supplier Onboarding & Risk Tiering",
    detail: "Suppliers register certifications (GFSI, ISO 22000, Organic). System automatically assigns an initial risk score based on country of origin and ingredient allergen tier."
  },
  {
    step: "02",
    title: "Continuous Certificate Tracking",
    detail: "Automated cron workers monitor expiration windows at 90, 60, and 30-day thresholds, notifying supplier portals before certifications expire."
  },
  {
    step: "03",
    title: "Audit Non-Conformance Logging",
    detail: "During quarterly audits, discovered discrepancies are flagged with photographic evidence and linked directly to corrective action timelines."
  },
  {
    step: "04",
    title: "Unified Query & Dispute Resolution",
    detail: "Suppliers and enterprise QA collaborate within a unified ticket thread, maintaining an immutable audit log for regulatory inspections."
  }
];

const erpModules = [
  {
    title: "Supplier Compliance Radar",
    description:
      "A high-density table view with instant multi-facet filtering (by allergen risk, audit score, country of origin, and renewal urgency) replacing scattered spreadsheets.",
    icon: Table
  },
  {
    title: "Automated Certificate Countdown",
    description:
      "Visual timeline ribbons showing expiring GFSI and HACCP certificates with automated escalation rules that lock procurement orders when certificates lapse.",
    icon: Clock
  },
  {
    title: "Audit Non-Conformance Ticket Suite",
    description:
      "End-to-end query resolution interface linking conversation history, re-testing lab reports, and QA approval sign-offs in one immutable container.",
    icon: FileCheck
  },
  {
    title: "Global Facility Switcher",
    description:
      "Enterprise hierarchy controls enabling directors to toggle between macro enterprise view and specific manufacturing plant receiving docks.",
    icon: Database
  }
];

export default function FoodSafety() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-neutral-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-[#f2f2f2] font-sans pb-32">
      <div className="mx-auto w-full max-w-[1240px] border-x border-black/[0.08] dark:border-white/[0.08]">
        {/* Navigation Breadcrumb */}
        <section className="px-6 pt-10 pb-6 sm:px-12 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <Link
            to="/selected-work"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors">
            <ArrowLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span>Back to Selected Work</span>
          </Link>
        </section>

        {/* =====================================================
            1. PROJECT OVERVIEW & CONTEXT
        ====================================================== */}
        <header className="px-6 pt-12 pb-16 sm:px-12 sm:pt-16 sm:pb-20 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>CASE STUDY 03 · ENTERPRISE DASHBOARD &amp; WORKFLOW DESIGN</span>
            </div>
            <span className="text-[11px] text-neutral-400">PROFESSIONAL WORK · SMARTFOODSAFE ERP</span>
          </div>

          <h1 className="mt-8 font-serif text-5xl sm:text-7xl lg:text-[84px] font-normal tracking-tight text-neutral-950 dark:text-white leading-[0.98]">
            Food Safety Compliance Dashboard
          </h1>

          <p className="mt-6 max-w-3xl text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
            Designing an enterprise compliance system for QA and Food Safety directors—turning high-risk supply chain data, expiring certificates, and audit non-conformances into actionable workflows.
          </p>

          {/* Metadata Grid */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 border-t border-black/[0.08] dark:border-white/[0.08] pt-8 font-mono text-xs">
            <div>
              <span className="text-neutral-400 uppercase tracking-widest block mb-1">Role</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">UX/UI &amp; Product Designer</span>
            </div>
            <div>
              <span className="text-neutral-400 uppercase tracking-widest block mb-1">Domain</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">Enterprise ERP &amp; Supply Chain</span>
            </div>
            <div>
              <span className="text-neutral-400 uppercase tracking-widest block mb-1">Focus</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">Data Density &amp; Audit Workflows</span>
            </div>
            <div>
              <span className="text-neutral-400 uppercase tracking-widest block mb-1">Platform</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">Desktop Web Application</span>
            </div>
          </div>
        </header>

        {/* Hero Visual Preview */}
        <section className="px-6 py-12 sm:px-12 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-neutral-900 shadow-2xl">
            <img
              src="/Food.png"
              alt="Food Safety Dashboard Interface"
              className="w-full h-auto object-cover max-h-[640px]"
            />
            <div className="p-4 sm:p-6 bg-black/60 backdrop-blur-sm border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-neutral-300">
              <span>FIG 1.0 · SUPPLIER COMPLIANCE MONITORING INTERFACE</span>
              <span className="text-neutral-400">GFSI &amp; HACCP Audit Tracking · Expiration Countdowns</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            2. PROBLEM STATEMENT
        ====================================================== */}
        <section className="px-6 py-20 sm:px-12 sm:py-24 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("02 · PROBLEM DISCOVERY")}
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            When compliance data lives in silos, contamination risks multiply
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
              <p>
                In food manufacturing, a single expired supplier audit can cause millions of dollars in product recalls, federal penalties, and consumer health hazards.
              </p>
              <p>
                QA teams were drowning in manual emails: suppliers sent renewal certificates as PDF attachments, receiving dock inspectors tracked lot numbers on clipboards, and plant managers had no real-time way to know if an incoming shipment complied with food safety standards.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 sm:p-8 space-y-4 font-mono text-xs">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-950 dark:text-white block mb-1">
                    Lapsed Certificate Blind Spots
                  </strong>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Expired supplier certifications were often only discovered during third-party regulatory audits rather than in advance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-black/[0.06] dark:border-white/[0.06]">
                <FileText className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-950 dark:text-white block mb-1">
                    Disconnected Query Resolution
                  </strong>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    When an ingredient batch failed inspection, dispute communication was lost across email threads without an immutable audit trail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            3. TARGET USERS & RESEARCH INSIGHTS
        ====================================================== */}
        <section className="px-6 py-20 sm:px-12 sm:py-24 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("03 · USER RESEARCH & STAKEHOLDERS")}
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Stakeholder Mental Models Across the Supply Chain
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {compliancePersonas.map((persona) => (
              <div
                key={persona.role}
                className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-2">
                    User Persona
                  </span>
                  <h3 className="font-serif text-xl font-normal text-neutral-950 dark:text-white">
                    {persona.role}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {persona.context}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] font-mono text-xs text-neutral-700 dark:text-neutral-300">
                  <strong>Critical Need:</strong> {persona.need}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            4. INFORMATION ARCHITECTURE & KEY WORKFLOWS
        ====================================================== */}
        <section className="px-6 py-20 sm:px-12 sm:py-24 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("04 · COMPLIANCE LIFECYCLE ARCHITECTURE")}
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            End-to-End Supplier Governance Flow
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {complianceWorkflows.map((flow) => (
              <div
                key={flow.step}
                className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6">
                <span className="font-mono text-2xl font-light text-neutral-400">{flow.step}</span>
                <h3 className="mt-4 font-serif text-lg font-normal text-neutral-950 dark:text-white">
                  {flow.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {flow.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            5 & 6. KEY FEATURES & INTERFACE SOLUTIONS
        ====================================================== */}
        <section className="px-6 py-20 sm:px-12 sm:py-24 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("05 & 06 · INTERFACE SOLUTIONS")}
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Designed for High Data-Density &amp; Immediate Action
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {erpModules.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-8">
                  <Icon className="h-6 w-6 text-neutral-400" strokeWidth={1.5} />
                  <h3 className="mt-6 font-serif text-2xl font-normal text-neutral-950 dark:text-white">
                    {module.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {module.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            7. ENTERPRISE COMPLEXITY & REGULATORY COMPLIANCE
        ====================================================== */}
        <section className="px-6 py-20 sm:px-12 sm:py-24 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("07 · DOMAIN COMPLEXITY")}
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Adhering to GFSI, FSMA &amp; HACCP Standards
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="p-6 sm:p-8 rounded-2xl border border-black/[0.08] dark:border-white/[0.08]">
              <h3 className="font-serif text-xl font-normal text-neutral-950 dark:text-white">
                Strict Immutable Audit Trails
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                FDA 21 CFR Part 11 mandates that any modifications to compliance certificates or audit scores must be cryptographically timestamped and attributed to authenticated user credentials. The UI surfaces this audit history in a non-intrusive side-panel.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border border-black/[0.08] dark:border-white/[0.08]">
              <h3 className="font-serif text-xl font-normal text-neutral-950 dark:text-white">
                Multi-Tenant Supplier Isolation
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                External ingredient vendors access a scoped supplier portal where they can only view and respond to their own queries, while internal enterprise QA officers manage cross-supplier benchmarking.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            8 & 9. DESIGN SYSTEM & TECHNICAL FEASIBILITY
        ====================================================== */}
        <section className="px-6 py-20 sm:px-12 sm:py-24 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("08 & 09 · DESIGN SYSTEM & CODE ARCHITECTURE")}
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Component System &amp; Frontend Implementation
          </h2>

          <div className="mt-10 space-y-4 font-mono text-xs">
            <div className="p-5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] flex items-start gap-4">
              <Table className="h-5 w-5 text-neutral-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-neutral-950 dark:text-white block mb-1">
                  Custom Data Table Component Specification
                </strong>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Designed sticky headers, sortable columns, and configurable column visibility drawers so QA officers can personalize their dashboard view based on current audit tasks.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] flex items-start gap-4">
              <Layers className="h-5 w-5 text-neutral-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-neutral-950 dark:text-white block mb-1">
                  Token-Driven Status Indicators
                </strong>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Standardized status pill design tokens (Compliant, Expiring Soon, Non-Conformance, Suspended) with high contrast text conforming to WCAG 2.1 AA standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            10. IMPACT & NEXT PROJECT
        ====================================================== */}
        <section className="px-6 py-20 sm:px-12 sm:py-24 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              {getSectionTag("10 · NEXT CASE STUDY")}
            </div>
            <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-normal text-neutral-950 dark:text-white">
              EduHire AI Learning App
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              AI-assisted learning pathways and mobile hiring UX.
            </p>
          </div>

          <Link
            to="/eduhire"
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 shrink-0">
            <span>View Next Case Study</span>
            <ArrowUpRight size={14} />
          </Link>
        </section>
      </div>
    </main>
  );
}
