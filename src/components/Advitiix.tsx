import { useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const rolesData = [
  {
    id: "employee",
    role: "Employee App",
    persona: "Supriya Maurya · UI/UX Designer",
    question: "How many leaves do I have, and is my request approved?",
    summary:
      "Self-service dashboard eliminating HR follow-ups. Employees can check balances at a glance, calculate working days live, apply in 3 steps, and order daily meals.",
    features: [
      {
        title: "Glanceable Balance Cards",
        detail:
          "Allocated, Used, Pending, and Remaining visible on the first screen with progress bars splitting used from pending days."
      },
      {
        title: "Live Working Days Calculation",
        detail:
          "Auto-deducts public holidays and weekends in real time (e.g. 6 calendar days calculated as 3 working days due to Dussehra and weekend)."
      },
      {
        title: "Named Approval Timeline",
        detail:
          "Never ambiguous 'Pending' states: explicitly shows 'Submitted → Waiting for Rahul Mehta (Reporting Manager) → HR Approval'."
      },
      {
        title: "Daily Meal Ordering",
        detail:
          "Clear two-choice card (₹80 / meal) with strict 10:30 AM cutoff and auto-locking to prevent lunchtime food waste."
      }
    ]
  },
  {
    id: "pm",
    role: "Project Manager App",
    persona: "Rahul Mehta · Project Manager",
    question: "What's blocked, overdue or waiting for me?",
    summary:
      "Single-pane view of projects, team activity, and approvals built on exceptions so managers catch blockers early and approve leave in project context.",
    features: [
      {
        title: "Exception-Driven Dashboard",
        detail:
          "Surfaces blocked tasks, overdue milestones, upcoming meetings, and pending team leaves on one unified screen."
      },
      {
        title: "Published Project Health Rules",
        detail:
          "Clear rules for every badge: Overdue (past due date), Due Soon (next 3 days), At Risk (due after project end), Heavy Workload (3+ open tasks)."
      },
      {
        title: "Strict Task Lifecycle",
        detail:
          "To Do → In Progress ⇄ Blocked → In Review → Done. Team members move their tasks; only the PM can mark Done after review."
      },
      {
        title: "Accountable Review Loops",
        detail:
          "Requesting changes requires a written reason and starts review round 2, eliminating silent bounces and lost feedback."
      }
    ]
  },
  {
    id: "admin",
    role: "Admin / HR App",
    persona: "Aditi Rao · Super Admin / HR",
    question: "What needs my approval, and is the data right?",
    summary:
      "Command center giving HR one approvals queue, company-wide visibility, and configurable policies so operational rules live in the system, not in memory.",
    features: [
      {
        title: "Centralized Approvals Queue",
        detail:
          "Unified inbox for leave requests at the HR step, inventory requisition, attendance anomalies, and policy alerts."
      },
      {
        title: "Non-Bypassable Leave Tabs",
        detail:
          "Categorized into Awaiting HR, With Manager, Approved, and Rejected. HR cannot jump ahead of the reporting manager's approval."
      },
      {
        title: "Visual Approval Workflow Builder",
        detail:
          "Configurable routing levels (e.g., leave of 2 days or less routes to manager only; longer leave requires manager + HR)."
      },
      {
        title: "Full Audit Trail Log",
        detail:
          "Logs every balance adjustment with before/after values and mandatory justification (e.g., 'Comp Off: 1 day → 2 days · Sat Sprint')."
      }
    ]
  },
  {
    id: "reception",
    role: "Receptionist (Food Tracker)",
    persona: "Sunil Gowda · Front Desk & Facilities",
    question: "How many meals do I order today, and who still owes?",
    summary:
      "Connects daily employee lunch choices to front-desk vendor orders, automated monthly billing, and payment tracking with zero double-counting.",
    features: [
      {
        title: "Separate Daily vs. Billing Groups",
        detail:
          "Today's meal count (Yes/No/No Response) is kept strictly separate from the monthly ledger so counts and finances never blur."
      },
      {
        title: "Exact Formula Everyone Can Audit",
        detail:
          "Meals = Confirmed Yes. Estimated Cost = Meals × ₹80 with department-wise breakdown before 10:30 AM vendor placement."
      },
      {
        title: "Attendance vs. Meal Anomaly Flagging",
        detail:
          "Absent employees who ordered meals are explicitly flagged for reception verification rather than silently deleted."
      },
      {
        title: "Lockable Monthly Billing",
        detail:
          "Bills generate once per month; records lock to prevent duplicate charges. Part-payments track balance due; overpayment is blocked."
      }
    ]
  }
];

const uxWritingRules = [
  {
    rule: "Use numbers, not adjectives",
    bad: "Some days will be deducted",
    good: "3 days will be deducted from your Casual Leave"
  },
  {
    rule: "Name the person responsible",
    bad: "Under review",
    good: "Waiting for Rahul Mehta (Reporting Manager)"
  },
  {
    rule: "Buttons state the exact action",
    bad: "OK / Confirm",
    good: "Submit Request · Cancel Request · Keep Request"
  },
  {
    rule: "One word for one state",
    bad: "In Process / On Hold / Pending",
    good: "Pending · Approved · Rejected · Cancelled"
  }
];

function AdvitiixWireframe({ activeIndex }: { activeIndex: number }) {
  const current = rolesData[activeIndex];

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
              ADVITIIX SYSTEM SHELL
            </span>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-500 dark:text-neutral-400 uppercase">
              {current?.role}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-black/[0.15] px-2.5 py-0.5 text-[10px] uppercase text-neutral-500 dark:border-white/[0.15] dark:text-neutral-400">
              MODULE DEPTH: {activeIndex + 1}/4
            </span>
            <div className="h-6 w-6 rounded-full border border-black/[0.15] dark:border-white/[0.15]" />
          </div>
        </div>

        {/* Center Dynamic Wireframe Content */}
        <div className="my-auto space-y-3 pt-2">
          {/* Persona banner */}
          <div className="flex items-center justify-between rounded-md border border-black/[0.08] bg-white/60 p-2 text-[11px] dark:border-white/[0.08] dark:bg-[#202020]/70">
            <span className="text-neutral-500 dark:text-neutral-400">
              PERSONA: <strong className="text-neutral-900 dark:text-white">{current?.persona}</strong>
            </span>
            <span className="text-neutral-400 italic">"{current?.question}"</span>
          </div>

          {/* Wireframe Mock Cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {current?.features.slice(0, 3).map((feat, i) => (
              <div
                key={feat.title}
                className="rounded-lg border border-black/[0.1] bg-white/70 p-3 dark:border-white/[0.1] dark:bg-[#202020]/80">
                <span className="text-[10px] text-neutral-400">0{i + 1} WIREFRAME PATTERN</span>
                <p className="mt-1 text-xs font-bold text-neutral-900 dark:text-white">
                  {feat.title}
                </p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {feat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Wireframe Footer */}
        <div className="flex items-center justify-between border-t border-black/[0.08] pt-2.5 text-[10px] text-neutral-400 dark:border-white/[0.08]">
          <span>SCHEMATIC 03 · 4 ROLE-BASED APPS / ONE UNIFIED BUSINESS SYSTEM</span>
          <span>NDA PROTECTED</span>
        </div>
      </div>
    </div>
  );
}

export default function AdvitiixPlatform() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const activeRole = rolesData[activeRoleIndex];

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
            Confidential internal product · Proprietary workflows protected under NDA ·
            UX architecture, 4-role system &amp; wireframes documented
          </p>

          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 sm:text-[13px]">
            <span className="h-2 w-2 rounded-full bg-neutral-950 dark:bg-white" />
            Advitiix Management Tool — Portfolio Case Study
          </div>

          <h1 className="mt-7 max-w-[980px] font-serif text-[42px] leading-[1.0] tracking-[-0.04em] sm:text-[64px] lg:text-[80px]">
            One connected tool for 4 roles: replacing email, chats, and spreadsheets.
          </h1>

          <p className="mt-8 max-w-[760px] text-lg leading-8 text-neutral-500 dark:text-neutral-400 sm:text-xl">
            Advitiix Management Tool is one connected internal system with four
            role-based apps: Employee, Project Manager, Admin / HR, and Receptionist
            (Food Tracker). They share one design system, one modular shell, and one
            set of business rules.
          </p>

          {/* Meta Grid */}
          <div className="mt-14 grid grid-cols-2 gap-y-7 border-y border-black/[0.08] py-6 dark:border-white/[0.08] sm:grid-cols-4 sm:py-7">
            <div className="border-r border-black/[0.06] pr-4 dark:border-white/[0.06]">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[12px]">
                Role
              </p>
              <p className="mt-2 text-[14px] font-medium sm:text-[15px]">
                Sole Product Designer &amp; Dev
              </p>
            </div>

            <div className="border-r border-black/[0.06] px-4 dark:border-white/[0.06]">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[12px]">
                Company
              </p>
              <p className="mt-2 text-[14px] font-medium sm:text-[15px]">
                Advitiix Technovate (~25 staff)
              </p>
            </div>

            <div className="border-r border-black/[0.06] px-4 dark:border-white/[0.06]">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[12px]">
                Scope
              </p>
              <p className="mt-2 text-[14px] font-medium sm:text-[15px]">
                4 Role Apps (0-to-1)
              </p>
            </div>

            <div className="pl-4">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[12px]">
                Ownership
              </p>
              <p className="mt-2 text-[14px] font-medium sm:text-[15px]">
                UX, IA, Copy &amp; Coded UI
              </p>
            </div>
          </div>

          {/* Hero Interactive Role Wireframe */}
          <div className="mt-14 overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-2 shadow-2xl dark:border-white/[0.08] dark:bg-[#161616] sm:p-4">
            <AdvitiixWireframe activeIndex={activeRoleIndex} />
          </div>
        </section>

        {/* Section 01: The Problem & Research Discovery */}
        <section className="border-t border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 sm:py-28 lg:px-14">
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.16em] text-neutral-400">
            <span>01</span>
            <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
            <span>Context &amp; Problem</span>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <h2 className="font-serif text-3xl leading-[1.08] tracking-[-0.035em] sm:text-5xl">
              Information was scattered across chat, email, and memory.
            </h2>

            <div className="space-y-6 text-base leading-7 text-neutral-500 dark:text-neutral-400 sm:text-lg sm:leading-8">
              <p>
                Day-to-day operations ran through WhatsApp messages, informal
                emails, and direct DMs to HR. Simple employee questions—like
                remaining leave, pending request approvals, or daily lunch
                counts—required interrupting HR or searching through old threads.
              </p>
              <p>
                Managers approved requests casually in chat without seeing project
                impact. HR maintained leave balances manually in spreadsheets,
                causing numbers to drift. Reception had no reliable daily meal
                headcount, leading to daily food waste and disputed month-end bills.
              </p>
              <p className="font-medium text-neutral-950 dark:text-neutral-100">
                The Goal: Build one trusted single source of truth for leave,
                attendance, tasks, food, and inventory with role-based depth—keeping
                employees simple while giving Admin the required control.
              </p>
            </div>
          </div>
        </section>

        {/* Section 02: The 4 Role-Based Apps Breakdown */}
        <section className="border-t border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 sm:py-28 lg:px-14">
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.16em] text-neutral-400">
            <span>02</span>
            <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
            <span>The 4 Role-Based Apps</span>
          </div>

          <div className="mt-8 max-w-2xl">
            <h2 className="font-serif text-3xl leading-[1.08] tracking-[-0.035em] sm:text-5xl">
              One shell. Different depth for each role.
            </h2>
            <p className="mt-4 text-neutral-500 dark:text-neutral-400">
              All four apps share the same navigation order: Dashboard, Attendance,
              Leave Management, Projects &amp; Tasks, Food, and Inventory.
            </p>
          </div>

          {/* Role Switcher Tabs */}
          <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {rolesData.map((role, idx) => (
              <button
                key={role.id}
                type="button"
                onClick={() => setActiveRoleIndex(idx)}
                className={`rounded-xl border p-4 text-left transition-all ${
                  activeRoleIndex === idx
                    ? "border-neutral-900 bg-neutral-900 text-white shadow-sm dark:border-white dark:bg-white dark:text-neutral-900"
                    : "border-black/[0.08] bg-white text-neutral-600 hover:border-black/[0.2] dark:border-white/[0.08] dark:bg-[#181818] dark:text-neutral-400 dark:hover:border-white/[0.2]"
                }`}>
                <span className="font-mono text-[10px] opacity-70">ROLE 0{idx + 1}</span>
                <p className="mt-1 truncate text-xs font-bold sm:text-sm">{role.role}</p>
              </button>
            ))}
          </div>

          {/* Active Role Showcase Card */}
          <div className="mt-6 rounded-2xl border border-black/[0.08] bg-white p-7 shadow-sm dark:border-white/[0.08] dark:bg-[#181818] sm:p-10">
            <div className="flex flex-col justify-between gap-4 border-b border-black/[0.06] pb-6 dark:border-white/[0.06] sm:flex-row sm:items-center">
              <div>
                <span className="font-mono text-xs text-neutral-400 uppercase">
                  Persona: {activeRole?.persona}
                </span>
                <h3 className="mt-1 text-2xl font-serif">{activeRole?.role}</h3>
              </div>
              <div className="rounded-full border border-black/[0.1] px-4 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/[0.15] dark:text-neutral-300">
                Core Query: "{activeRole?.question}"
              </div>
            </div>

            <p className="mt-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              {activeRole?.summary}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {activeRole?.features.map((feat) => (
                <div
                  key={feat.title}
                  className="rounded-xl border border-black/[0.06] bg-neutral-50/80 p-5 dark:border-white/[0.06] dark:bg-[#202020]">
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                    {feat.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {feat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 03: UX Writing & Content Design Foundation */}
        <section className="border-t border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 sm:py-28 lg:px-14">
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.16em] text-neutral-400">
            <span>03</span>
            <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
            <span>UX Writing Rules</span>
          </div>

          <div className="mt-8 max-w-2xl">
            <h2 className="font-serif text-3xl leading-[1.08] tracking-[-0.035em] sm:text-5xl">
              Voice: clear, calm, and specific.
            </h2>
            <p className="mt-4 text-neutral-500 dark:text-neutral-400">
              Clear rules make clear screens. I wrote strict UX copy guidelines so
              employees and managers never have to decipher ambiguous states.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {uxWritingRules.map((item) => (
              <div
                key={item.rule}
                className="rounded-xl border border-black/[0.08] bg-white p-6 dark:border-white/[0.08] dark:bg-[#181818]">
                <h4 className="text-sm font-bold">{item.rule}</h4>
                <div className="mt-4 space-y-2 text-xs">
                  <div className="rounded bg-neutral-100 p-2.5 text-neutral-400 line-through dark:bg-neutral-800 dark:text-neutral-500">
                    Instead of: "{item.bad}"
                  </div>
                  <div className="rounded border border-black/[0.08] bg-white p-2.5 font-medium text-neutral-900 dark:border-white/[0.1] dark:bg-neutral-900 dark:text-white">
                    Rule applied: "{item.good}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: Design Principles & Key Learnings */}
        <section className="border-t border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 sm:py-28 lg:px-14">
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.16em] text-neutral-400">
            <span>04</span>
            <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
            <span>Key Takeaways</span>
          </div>

          <div className="mt-8 max-w-2xl">
            <h2 className="font-serif text-3xl leading-[1.08] tracking-[-0.035em] sm:text-5xl">
              Reflections from building from 0 to 1.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/[0.08] bg-white p-7 dark:border-white/[0.08] dark:bg-[#181818]">
              <span className="font-mono text-xs text-neutral-400">01</span>
              <h4 className="mt-2 text-lg font-bold">Write business rules before screens</h4>
              <p className="mt-3 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                Defining things like "what counts as overdue" or "when is a bill
                settled" removed most design debates before drawing a single rectangle.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.08] bg-white p-7 dark:border-white/[0.08] dark:bg-[#181818]">
              <span className="font-mono text-xs text-neutral-400">02</span>
              <h4 className="mt-2 text-lg font-bold">Separate facts that look related</h4>
              <p className="mt-3 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                Attendance is not working on a task. Being absent does not mean no
                meal was ordered. Keeping these signals uncoupled prevented the most
                common user confusion.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.08] bg-white p-7 dark:border-white/[0.08] dark:bg-[#181818]">
              <span className="font-mono text-xs text-neutral-400">03</span>
              <h4 className="mt-2 text-lg font-bold">Design for 4 roles with 1 system</h4>
              <p className="mt-3 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                A shared shell and unified design tokens allowed the PM, Admin, and
                Receptionist tools to be prototyped and coded rapidly once the Employee
                core patterns were tested.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.08] bg-white p-7 dark:border-white/[0.08] dark:bg-[#181818]">
              <span className="font-mono text-xs text-neutral-400">04</span>
              <h4 className="mt-2 text-lg font-bold">One place instead of three channels</h4>
              <p className="mt-3 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                Advitiix staff now rely on one trusted dashboard instead of jumping
                between WhatsApp threads, emails, and manual follow-ups to HR.
              </p>
            </div>
          </div>
        </section>

        {/* Next Project Footer Bar */}
        <section className="border-t border-black/[0.08] px-6 py-16 dark:border-white/[0.08] sm:px-10 sm:py-20 lg:px-14">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                Next Project · 04
              </p>
              <h3 className="mt-2 font-serif text-2xl tracking-[-0.02em] sm:text-3xl">
                Model Pipeline &amp; AI Dashboards
              </h3>
            </div>

            <Link
              to="/model-pipeline"
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