import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  FileCheck2,
} from "lucide-react";
import { Link } from "react-router-dom";

type StepProps = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
};

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="text-[11px] font-medium text-neutral-400">
        {number}
      </span>

      <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />

      <span className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
        {children}
      </span>
    </div>
  );
}

function Step({
  number,
  title,
  description,
  icon,
}: StepProps) {
  return (
    <div className="group border-t border-black/[0.08] py-7 dark:border-white/[0.08]">
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.1] text-xs dark:border-white/[0.1]">
            {number}
          </span>

          <div>
            <h3 className="text-lg font-medium tracking-[-0.02em]">
              {title}
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500 dark:text-neutral-400">
              {description}
            </p>
          </div>
        </div>

        <div className="hidden text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 sm:block">
          {icon}
        </div>
      </div>
    </div>
  );
}

function Leave() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-neutral-950 transition-colors duration-300 dark:bg-[#111111] dark:text-white">
      <div className="mx-auto min-h-screen w-full max-w-[1200px] border-x border-black/[0.07] dark:border-white/[0.07]">

        {/* =====================================================
            TOP
        ====================================================== */}

        <section className="px-6 pb-2 pt-8 sm:px-10 sm:pb-12 sm:pt-10 lg:px-14">
          <Link
            to="/selected-work"
            className="group inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-neutral-950 dark:hover:text-white"
          >
            <ArrowLeft
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />

            Back to selected work
          </Link>
        </section>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="px-6 pb-2 sm:px-10 sm:pb-20 lg:px-14">
          <div className="max-w-4xl">

            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                Internal HR Platform
              </span>
            </div>

            <h1 className="font-serif text-[clamp(3.5rem,8vw,6rem)] leading-[0.88] tracking-[-0.06em]">
              From scattered messages to one clear workflow.
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-neutral-500 dark:text-neutral-400 sm:text-xl">
              A centralized leave and work-from-home experience that helps
              employees understand their balance, submit requests, and track
              approvals—without searching through emails or messages.
            </p>
          </div>

          {/* META */}

          <div className="mt-16 grid grid-cols-2 border-y border-black/[0.08] dark:border-white/[0.08] sm:grid-cols-4">
            <div className="border-r border-black/[0.08] py-5 pr-5 dark:border-white/[0.08]">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                Role
              </p>

              <p className="mt-2 text-sm">
                UX/UI Product Designer
              </p>
            </div>

            <div className="border-r border-black/[0.08] py-5 pl-5 dark:border-white/[0.08] sm:px-5">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                Product
              </p>

              <p className="mt-2 text-sm">
                Internal HR Platform
              </p>
            </div>

            <div className="border-r border-black/[0.08] py-5 pr-5 dark:border-white/[0.08] sm:px-5">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                Focus
              </p>

              <p className="mt-2 text-sm">
                UX · IA · UI
              </p>
            </div>

            <div className="py-5 pl-5 sm:px-5">
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                Platform
              </p>

              <p className="mt-2 text-sm">
                Web
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            MAIN IMAGE / SCREEN
        ====================================================== */}

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[420px] overflow-hidden rounded-[24px] border border-black/[0.08] bg-[#e9e7e2] dark:border-white/[0.08] dark:bg-[#1b1b1b] sm:min-h-[600px]">

            {/* Replace this area with your actual dashboard image */}

            <div className="absolute inset-6 rounded-xl border border-black/[0.06] bg-[#f7f6f3] shadow-[0_30px_80px_rgba(0,0,0,0.08)] dark:border-white/[0.06] dark:bg-[#151515]">

              {/* Fake browser */}

              <div className="flex h-10 items-center gap-2 border-b border-black/[0.06] px-4 dark:border-white/[0.06]">
                <span className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <span className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <span className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              </div>

              <div className="grid h-[calc(100%-40px)] grid-cols-[150px_1fr]">

                <div className="border-r border-black/[0.06] p-5 dark:border-white/[0.06]">
                  <div className="h-3 w-16 rounded bg-neutral-200 dark:bg-neutral-700" />

                  <div className="mt-10 space-y-4">
                    <div className="h-2 w-20 rounded bg-neutral-200 dark:bg-neutral-700" />
                    <div className="h-2 w-24 rounded bg-neutral-200 dark:bg-neutral-700" />
                    <div className="h-2 w-16 rounded bg-neutral-200 dark:bg-neutral-700" />
                    <div className="h-2 w-20 rounded bg-neutral-200 dark:bg-neutral-700" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <div className="h-4 w-28 rounded bg-neutral-300 dark:bg-neutral-600" />
                      <div className="mt-3 h-2 w-40 rounded bg-neutral-200 dark:bg-neutral-700" />
                    </div>

                    <div className="h-8 w-24 rounded-lg bg-neutral-900 dark:bg-white" />
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="h-24 rounded-xl border border-black/[0.06] bg-white dark:border-white/[0.06] dark:bg-[#1b1b1b]" />
                    <div className="h-24 rounded-xl border border-black/[0.06] bg-white dark:border-white/[0.06] dark:bg-[#1b1b1b]" />
                    <div className="h-24 rounded-xl border border-black/[0.06] bg-white dark:border-white/[0.06] dark:bg-[#1b1b1b]" />
                  </div>

                  <div className="mt-5 h-40 rounded-xl border border-black/[0.06] bg-white dark:border-white/[0.06] dark:bg-[#1b1b1b]" />
                </div>
              </div>
            </div>

            <span className="absolute bottom-8 left-8 text-[10px] uppercase tracking-[0.18em] text-neutral-400">
              Dashboard overview
            </span>
          </div>
        </section>

        {/* =====================================================
            PROBLEM
        ====================================================== */}

        <section className="px-6 py-20 sm:px-10 sm:py-20 lg:px-14">
          <SectionLabel number="01">The problem</SectionLabel>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">

            <h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.045em] sm:text-6xl">
              A leave request
              <br />
              existed.
              <br />
              Context didn't.
            </h2>

            <div className="max-w-2xl">
              <p className="text-xl leading-9 text-neutral-600 dark:text-neutral-300">
                Employees had to rely on emails, WhatsApp, or HR conversations
                to check their remaining leave, request time off, and find out
                whether something was approved.
              </p>

              <p className="mt-7 text-base leading-7 text-neutral-500 dark:text-neutral-400">
                The process worked—but information was scattered across
                different places.
              </p>
            </div>

          </div>
        </section>

        {/* =====================================================
            INSIGHT
        ====================================================== */}

        <section className="border-y border-black/[0.08] dark:border-white/[0.08]">

          <div className="grid lg:grid-cols-2">

            <div className="border-b border-black/[0.08] p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-14 dark:border-white/[0.08]">
              <SectionLabel number="02">The insight</SectionLabel>

              <h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.045em] sm:text-6xl">
                The problem wasn't applying.
                <br />
                It was knowing.
              </h2>
            </div>

            <div className="p-6 sm:p-10 lg:p-14">

              <div className="space-y-0">

                <div className="border-b border-black/[0.08] py-5 dark:border-white/[0.08]">
                  <span className="text-xs text-neutral-400">
                    BEFORE REQUEST
                  </span>

                  <p className="mt-2 text-lg">
                    How much leave do I have?
                  </p>
                </div>

                <div className="border-b border-black/[0.08] py-5 dark:border-white/[0.08]">
                  <span className="text-xs text-neutral-400">
                    DURING REQUEST
                  </span>

                  <p className="mt-2 text-lg">
                    What will be deducted?
                  </p>
                </div>

                <div className="border-b border-black/[0.08] py-5 dark:border-white/[0.08]">
                  <span className="text-xs text-neutral-400">
                    AFTER REQUEST
                  </span>

                  <p className="mt-2 text-lg">
                    Who is approving it?
                  </p>
                </div>

                <div className="py-5">
                  <span className="text-xs text-neutral-400">
                    NEXT
                  </span>

                  <p className="mt-2 text-lg">
                    What happens now?
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            SOLUTION
        ====================================================== */}

        <section className="px-6 py-20 sm:px-10 sm:py-20 lg:px-14">

          <SectionLabel number="03">The solution</SectionLabel>

          <div className="max-w-4xl">
            <h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.045em] sm:text-6xl">
              From request-centric
              <br />
              to visibility-centric.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500 dark:text-neutral-400">
              I connected the information employees need before, during, and
              after submitting a request.
            </p>
          </div>

          {/* Flow */}

          <div className="mt-20 overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08]">

            <div className="grid sm:grid-cols-5">

              <div className="border-b border-black/[0.08] p-6 sm:border-b-0 sm:border-r dark:border-white/[0.08]">
                <CalendarDays size={19} strokeWidth={1.4} />

                <p className="mt-10 text-sm font-medium">
                  Leave
                </p>
              </div>

              <div className="border-b border-black/[0.08] p-6 sm:border-b-0 sm:border-r dark:border-white/[0.08]">
                <Clock3 size={19} strokeWidth={1.4} />

                <p className="mt-10 text-sm font-medium">
                  WFH
                </p>
              </div>

              <div className="border-b border-black/[0.08] p-6 sm:border-b-0 sm:border-r dark:border-white/[0.08]">
                <CalendarDays size={19} strokeWidth={1.4} />

                <p className="mt-10 text-sm font-medium">
                  Balance
                </p>
              </div>

              <div className="border-b border-black/[0.08] p-6 sm:border-b-0 sm:border-r dark:border-white/[0.08]">
                <FileCheck2 size={19} strokeWidth={1.4} />

                <p className="mt-10 text-sm font-medium">
                  Approval
                </p>
              </div>

              <div className="p-6">
                <Check size={19} strokeWidth={1.4} />

                <p className="mt-10 text-sm font-medium">
                  History
                </p>
              </div>

            </div>
          </div>

        </section>

        {/* =====================================================
            EXPERIENCE
        ====================================================== */}

        <section className="border-t border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 sm:py-20 lg:px-14">

          <SectionLabel number="04">The experience</SectionLabel>

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.045em] sm:text-6xl">
              A clearer path
              <br />
              from request
              <br />
              to resolution.
            </h2>

            <div>

              <Step
                number="01"
                title="Check"
                description="View leave balance, holidays, and upcoming schedule before making a request."
                icon={<CalendarDays size={18} strokeWidth={1.5} />}
              />

              <Step
                number="02"
                title="Request"
                description="Apply for leave or WFH with dates, reason, and supporting details."
                icon={<ArrowUpRight size={18} strokeWidth={1.5} />}
              />

              <Step
                number="03"
                title="Review"
                description="See working days, balance impact, and approval flow before submitting."
                icon={<FileCheck2 size={18} strokeWidth={1.5} />}
              />

              <Step
                number="04"
                title="Track"
                description="Follow approval status and view request history without asking HR."
                icon={<Check size={18} strokeWidth={1.5} />}
              />

            </div>

          </div>

        </section>

        {/* =====================================================
            SCREEN PLACEHOLDER
        ====================================================== */}

        <section className="px-4 sm:px-6 lg:px-8">

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="flex min-h-[360px] items-center justify-center rounded-2xl border border-black/[0.08] bg-[#ebe9e4] text-xs uppercase tracking-[0.15em] text-neutral-400 dark:border-white/[0.08] dark:bg-[#191919]">
            <img src="Leave-UserAdmin.png" alt="" />
            </div>

            <div className="flex min-h-[360px] items-center justify-center rounded-2xl border border-black/[0.08] bg-[#ebe9e4] text-xs uppercase tracking-[0.15em] text-neutral-400 dark:border-white/[0.08] dark:bg-[#191919]">
      <img src="Leave-Userflow.png" alt="" />
            </div>

          </div>

        </section>

        {/* =====================================================
            EDGE CASES
        ====================================================== */}

        <section className="px-6 py-20 sm:px-10 sm:py-20 lg:px-14">

          <SectionLabel number="05">Edge cases</SectionLabel>

          <div className="grid gap-12 lg:grid-cols-2">

            <h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.045em] sm:text-6xl">
              The happy path isn't
              <br />
              the whole experience.
            </h2>

            <div className="divide-y divide-black/[0.08] dark:divide-white/[0.08]">

              <div className="py-6 first:pt-0">
                <p className="text-sm font-medium">
                  Insufficient balance
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                  Prevent requests that exceed available leave.
                </p>
              </div>

              <div className="py-6">
                <p className="text-sm font-medium">
                  Date conflicts
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                  Detect overlapping leave and WFH requests.
                </p>
              </div>

              <div className="py-6">
                <p className="text-sm font-medium">
                  Holidays & weekends
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                  Separate non-working days from actual leave.
                </p>
              </div>

              <div className="py-6">
                <p className="text-sm font-medium">
                  Approval states
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                  Make pending, approved, rejected, and cancelled states clear.
                </p>
              </div>

              <div className="py-6">
                <p className="text-sm font-medium">
                  WFH vs Leave
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                  Keep WFH separate from leave balance and absence.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            TRADE OFF
        ====================================================== */}

        <section className="border-y border-black/[0.08] dark:border-white/[0.08]">

          <div className="grid lg:grid-cols-2">

            <div className="p-6 sm:p-10 lg:p-14">
              <SectionLabel number="06">Trade-off</SectionLabel>

              <h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.045em] sm:text-6xl">
                Show what matters.
                <br />
                Hide what doesn't.
              </h2>
            </div>

            <div className="border-t border-black/[0.08] p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-14 dark:border-white/[0.08]">

              <p className="text-xl leading-9 text-neutral-600 dark:text-neutral-300">
                The challenge was balancing policy complexity with employee
                simplicity.
              </p>

              <p className="mt-7 text-base leading-7 text-neutral-500 dark:text-neutral-400">
                Instead of exposing every HR rule upfront, the interface
                surfaces the information needed at each decision point while
                keeping detailed policies and administration behind the
                appropriate workflows.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            LEARNING
        ====================================================== */}

        <section className="px-6 py-24 text-center sm:px-10 sm:py-24 lg:px-14">

          <SectionLabel number="07">What I learned</SectionLabel>

          <h2 className="mx-auto max-w-4xl font-serif text-4xl leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Good workflow design makes information feel effortless.
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-neutral-500 dark:text-neutral-400">
            The strongest part of the solution wasn't another dashboard or
            form. It was connecting balance, dates, approvals, notifications,
            and history into one understandable flow.
          </p>

          <p className="mx-auto mt-8 max-w-xl text-base font-medium leading-7">
            When the system answers “What happens next?” clearly, users don't
            need to ask someone else.
          </p>

        </section>

        {/* =====================================================
            NEXT PROJECT
        ====================================================== */}

       <section className="border-t border-black/[0.08] px-5 py-16 dark:border-white/[0.08] sm:px-8 sm:py-20 lg:px-14">
                 <a href="/selected-work" className="group flex items-center justify-between">
                   <div>
                     <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                       Back to
                     </p>
     
                     <p className="mt-2 font-serif text-[34px] tracking-[-0.035em]">
                       Selected Work
                     </p>
                   </div>
     
                   <ArrowUpRight
                     size={28}
                     strokeWidth={1.3}
                     className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                   />
                 </a>
             </section>

      </div>
    </main>
  );
}

export default Leave;