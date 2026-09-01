import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Bot,
  Check,
  ChevronRight,
  CircleDollarSign,
  LineChart,
  LockKeyhole,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type RevealProps = {
  children: ReactNode;
  className?: string;
};

type WireframeProps = {
  title: string;
  type?:
    | "dashboard"
    | "chart"
    | "chat"
    | "phone"
    | "list"
    | "goal"
    | "flow"
    | "empty";
  aspect?: string;
};

/* =========================================================
   SCROLL REVEAL
========================================================= */

function Reveal({
  children,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[11px] text-neutral-400">
        {number}
      </span>

      <span className="h-px w-6 bg-neutral-300 dark:bg-neutral-700" />

      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
        {label}
      </span>
    </div>
  );
}

/* =========================================================
   WIRE FRAME COMPONENT

   Replace this component with your actual screenshots later.
========================================================= */

function Wireframe({
  title,
  type = "dashboard",
  aspect = "aspect-[16/10]",
}: WireframeProps) {
  return (
    <div
      className={`group relative ${aspect} overflow-hidden border border-black/[0.08] bg-[#efede9] dark:border-white/[0.08] dark:bg-[#1a1a1a]`}
    >
      {/* Browser / app chrome */}

      <div className="absolute left-0 right-0 top-0 flex h-8 items-center gap-1 border-b border-black/[0.06] px-3 dark:border-white/[0.06]">
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
      </div>

      {/* Dummy UI */}

      <div className="absolute inset-x-4 bottom-4 top-12">

        {type === "dashboard" && (
          <div className="h-full">
            <div className="flex h-full gap-3">
              <div className="hidden w-[18%] rounded border border-black/[0.07] bg-white dark:border-white/[0.06] dark:bg-[#202020] sm:block" />

              <div className="flex-1">
                <div className="flex gap-2">
                  <div className="h-14 flex-1 rounded border border-black/[0.06] bg-white dark:border-white/[0.06] dark:bg-[#202020]" />
                  <div className="h-14 flex-1 rounded border border-black/[0.06] bg-white dark:border-white/[0.06] dark:bg-[#202020]" />
                  <div className="h-14 flex-1 rounded border border-black/[0.06] bg-white dark:border-white/[0.06] dark:bg-[#202020]" />
                </div>

                <div className="mt-3 grid h-[55%] grid-cols-3 gap-3">
                  <div className="col-span-2 rounded border border-black/[0.06] bg-white dark:border-white/[0.06] dark:bg-[#202020]" />
                  <div className="rounded border border-black/[0.06] bg-white dark:border-white/[0.06] dark:bg-[#202020]" />
                </div>

                <div className="mt-3 h-16 rounded border border-black/[0.06] bg-white dark:border-white/[0.06] dark:bg-[#202020]" />
              </div>
            </div>
          </div>
        )}

        {type === "chart" && (
          <div className="flex h-full flex-col rounded border border-black/[0.06] bg-white p-4 dark:border-white/[0.06] dark:bg-[#202020]">
            <div className="h-3 w-28 rounded bg-neutral-200 dark:bg-neutral-700" />

            <div className="relative mt-5 flex-1">
              <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-700" />
              <div className="absolute bottom-1/3 left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-700" />
              <div className="absolute bottom-2/3 left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-700" />

              <div className="absolute bottom-[15%] left-[5%] h-[30%] w-px rotate-[25deg] bg-neutral-500" />
              <div className="absolute bottom-[30%] left-[20%] h-[25%] w-px -rotate-[35deg] bg-neutral-500" />
              <div className="absolute bottom-[45%] left-[35%] h-[20%] w-px rotate-[20deg] bg-neutral-500" />
              <div className="absolute bottom-[55%] left-[50%] h-[28%] w-px -rotate-[20deg] bg-neutral-500" />
              <div className="absolute bottom-[70%] left-[65%] h-[16%] w-px rotate-[25deg] bg-neutral-500" />
              <div className="absolute bottom-[73%] left-[80%] h-[12%] w-px -rotate-[15deg] bg-neutral-500" />
            </div>
          </div>
        )}

        {type === "chat" && (
          <div className="mx-auto flex h-full max-w-[500px] flex-col rounded border border-black/[0.06] bg-white dark:border-white/[0.06] dark:bg-[#202020]">
            <div className="border-b border-black/[0.06] p-3 dark:border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-black/[0.08] dark:border-white/[0.08]">
                  <Bot size={13} />
                </div>
                <div className="h-2 w-20 rounded bg-neutral-200 dark:bg-neutral-700" />
              </div>
            </div>

            <div className="flex-1 space-y-3 p-4">
              <div className="max-w-[70%] rounded-xl bg-neutral-100 p-3 dark:bg-neutral-800">
                <div className="h-2 w-full rounded bg-neutral-300 dark:bg-neutral-600" />
                <div className="mt-2 h-2 w-3/4 rounded bg-neutral-300 dark:bg-neutral-600" />
              </div>

              <div className="ml-auto max-w-[60%] rounded-xl bg-neutral-900 p-3 dark:bg-white">
                <div className="h-2 w-full rounded bg-white/60 dark:bg-black/30" />
              </div>

              <div className="max-w-[75%] rounded-xl bg-neutral-100 p-3 dark:bg-neutral-800">
                <div className="h-2 w-full rounded bg-neutral-300 dark:bg-neutral-600" />
                <div className="mt-2 h-2 w-5/6 rounded bg-neutral-300 dark:bg-neutral-600" />
              </div>
            </div>
          </div>
        )}

        {type === "phone" && (
          <div className="mx-auto h-full max-w-[210px] rounded-[22px] border-4 border-neutral-700 bg-white p-3 shadow-lg dark:border-neutral-500 dark:bg-[#202020]">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-neutral-300 dark:bg-neutral-600" />

            <div className="space-y-3">
              <div className="h-16 rounded-xl bg-neutral-100 dark:bg-neutral-800" />

              <div className="grid grid-cols-2 gap-2">
                <div className="h-20 rounded-xl bg-neutral-100 dark:bg-neutral-800" />
                <div className="h-20 rounded-xl bg-neutral-100 dark:bg-neutral-800" />
              </div>

              <div className="h-24 rounded-xl bg-neutral-100 dark:bg-neutral-800" />

              <div className="h-10 rounded-xl bg-neutral-900 dark:bg-white" />
            </div>
          </div>
        )}

        {type === "list" && (
          <div className="h-full rounded border border-black/[0.06] bg-white p-4 dark:border-white/[0.06] dark:bg-[#202020]">
            <div className="mb-5 flex justify-between">
              <div className="h-3 w-24 rounded bg-neutral-200 dark:bg-neutral-700" />
              <div className="h-6 w-20 rounded border border-black/[0.07] dark:border-white/[0.07]" />
            </div>

            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-t border-black/[0.06] py-3 dark:border-white/[0.06]"
              >
                <div className="h-7 w-7 rounded-full bg-neutral-100 dark:bg-neutral-800" />

                <div className="flex-1">
                  <div className="h-2 w-28 rounded bg-neutral-200 dark:bg-neutral-700" />
                  <div className="mt-2 h-2 w-16 rounded bg-neutral-100 dark:bg-neutral-800" />
                </div>

                <div className="h-2 w-12 rounded bg-neutral-200 dark:bg-neutral-700" />
              </div>
            ))}
          </div>
        )}

        {type === "goal" && (
          <div className="mx-auto max-w-[500px] rounded border border-black/[0.06] bg-white p-6 dark:border-white/[0.06] dark:bg-[#202020]">
            <Target
              size={22}
              strokeWidth={1.4}
              className="text-neutral-400"
            />

            <div className="mt-6 h-3 w-32 rounded bg-neutral-200 dark:bg-neutral-700" />

            <div className="mt-8 h-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
              <div className="h-full w-[62%] rounded-full bg-neutral-800 dark:bg-white" />
            </div>

            <div className="mt-4 flex justify-between">
              <div className="h-2 w-16 rounded bg-neutral-200 dark:bg-neutral-700" />
              <div className="h-2 w-16 rounded bg-neutral-200 dark:bg-neutral-700" />
            </div>

            <div className="mt-8 h-16 rounded border border-black/[0.06] dark:border-white/[0.06]" />
          </div>
        )}

        {type === "flow" && (
          <div className="flex h-full items-center justify-center">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="flex h-12 w-16 items-center justify-center rounded border border-black/[0.1] bg-white text-[8px] text-neutral-400 dark:border-white/[0.1] dark:bg-[#202020]">
                    STEP {item}
                  </div>

                  {item < 4 && (
                    <ChevronRight
                      size={13}
                      className="text-neutral-400"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {type === "empty" && (
          <div className="flex h-full flex-col items-center justify-center rounded border border-dashed border-black/[0.1] bg-white dark:border-white/[0.1] dark:bg-[#202020]">
            <CircleDollarSign
              size={25}
              strokeWidth={1.2}
              className="text-neutral-400"
            />

            <div className="mt-4 h-2 w-24 rounded bg-neutral-200 dark:bg-neutral-700" />

            <div className="mt-2 h-2 w-36 rounded bg-neutral-100 dark:bg-neutral-800" />
          </div>
        )}
      </div>

      {/* Label */}

      <div className="absolute bottom-3 left-3 rounded-full border border-black/[0.08] bg-white/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-500 backdrop-blur dark:border-white/[0.08] dark:bg-[#111]/90 dark:text-neutral-400">
        {title}
      </div>

      {/* Hover */}

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-white/[0.03]" />
      </div>
    </div>
  );
}

/* =========================================================
   STAT
========================================================= */

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="font-serif text-[36px] tracking-[-0.04em] sm:text-[44px]">
        {value}
      </p>

      <p className="mt-1 max-w-[150px] text-[12px] leading-5 text-neutral-500 dark:text-neutral-400">
        {label}
      </p>
    </div>
  );
}


function UsersIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function Finora() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-neutral-950 dark:bg-[#111111] dark:text-neutral-100">

      <div className="mx-auto w-full max-w-[1180px] border-x border-black/[0.07] dark:border-white/[0.07]">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="px-5 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-24 lg:px-14">
          <Reveal>
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                Case Study / 02
              </p>

              <p className="text-[12px] text-neutral-400">
                Finora
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-16 sm:mt-20">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-neutral-400">
              AI · Fintech · Personal Finance
            </p>

            <h1 className="mt-5 max-w-[1000px] font-serif text-[54px] leading-[0.96] tracking-[-0.05em] sm:text-[78px] lg:text-[94px]">
              Understand your money.
              <br />
              Control your spending.
            </h1>

            <p className="mt-8 max-w-[720px] text-[17px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[20px] sm:leading-8">
              Designing an AI-powered personal finance experience
              that turns financial data into clear insights,
              actionable recommendations and better everyday
              decisions.
            </p>
          </Reveal>

          {/* Metadata */}

          <Reveal className="mt-14 sm:mt-20">
            <div className="grid grid-cols-2 gap-y-8 border-y border-black/[0.1] py-7 dark:border-white/[0.1] sm:grid-cols-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                  Role
                </p>

                <p className="mt-2 text-[14px]">
                  Product Designer
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                  Timeline
                </p>

                <p className="mt-2 text-[14px]">
                  1–2 weeks
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                  Focus
                </p>

                <p className="mt-2 text-[14px]">
                  UX / UI / AI
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                  Platform
                </p>

                <p className="mt-2 text-[14px]">
                  Mobile
                </p>
              </div>
            </div>
          </Reveal>

          {/* Hero wireframe */}

          <Reveal className="mt-12 sm:mt-16">
            <Wireframe
              title="Finora / Financial overview"
              type="dashboard"
              aspect="aspect-[16/9]"
            />
          </Reveal>

          <Reveal className="mt-8 flex justify-center">
            <ArrowDown
              size={20}
              strokeWidth={1.3}
              className="animate-bounce text-neutral-400"
            />
          </Reveal>
        </section>

        {/* =================================================
            OVERVIEW
        ================================================= */}

        <section className="border-t border-black/[0.08] px-5 py-24 dark:border-white/[0.08] sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel
              number="01"
              label="Overview"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">
              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[54px]">
                Financial apps show data. Finora tries to explain
                it.
              </h2>

              <div className="space-y-6 text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px] sm:leading-8">
                <p>
                  The concept started from a simple observation:
                  people can see their transactions and balances,
                  but that doesn't necessarily help them make better
                  financial decisions.
                </p>

                <p>
                  I explored existing financial experiences,
                  including products such as Google Pay and
                  PhonePe, and focused on what could happen after
                  transactions are collected and categorized.
                </p>

                <p>
                  Instead of stopping at “you spent ₹52,000,” Finora
                  should help answer: Where did it go? Is that normal?
                  Can I afford something? What should I change?
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <div className="grid grid-cols-2 gap-y-10 border-t border-black/[0.08] pt-10 dark:border-white/[0.08] sm:grid-cols-4">
              <Stat
                value="1–2"
                label="week design exploration"
              />

              <Stat
                value="10+"
                label="core screens planned"
              />

              <Stat
                value="AI"
                label="decision-support layer"
              />

              <Stat
                value="22–35"
                label="primary target age range"
              />
            </div>
          </Reveal>
        </section>

        {/* =================================================
            PROBLEM
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="02"
                label="The problem"
              />

              <div className="mt-10 grid gap-12 lg:grid-cols-[0.8fr_1.5fr]">
                <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[54px]">
                  “I earn enough. So where does my money go?”
                </h2>

                <div>
                  <p className="text-[17px] leading-8 text-neutral-500 dark:text-neutral-400 sm:text-[19px]">
                    Young professionals often manage salary,
                    rent, food, subscriptions, credit cards, EMIs,
                    savings and investments across different
                    financial products.
                  </p>

                  <p className="mt-6 text-[17px] leading-8 text-neutral-500 dark:text-neutral-400 sm:text-[19px]">
                    The problem isn't always a lack of financial
                    data. The problem is that users have to interpret
                    the data themselves.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: Wallet,
                    title: "Scattered data",
                    text: "Money lives across accounts, cards and payment apps.",
                  },
                  {
                    icon: TrendingDown,
                    title: "Hidden patterns",
                    text: "Users don't always notice where spending is increasing.",
                  },
                  {
                    icon: CircleDollarSign,
                    title: "Unclear decisions",
                    text: "A balance doesn't tell you what you can safely spend.",
                  },
                  {
                    icon: Target,
                    title: "Weak planning",
                    text: "Goals are difficult to connect with everyday spending.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="border border-black/[0.08] p-6 transition-transform duration-300 hover:-translate-y-1 dark:border-white/[0.08]"
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.4}
                        className="text-neutral-400"
                      />

                      <h3 className="mt-12 text-[16px] font-medium">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-[13px] leading-6 text-neutral-500 dark:text-neutral-400">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* =================================================
            RESEARCH / EXPLORATION
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel
              number="03"
              label="Exploration"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                Looking beyond the transaction list.
              </h2>

              <div className="space-y-5 text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px] sm:leading-8">
                <p>
                  I explored familiar payment and finance
                  experiences to understand how users currently
                  discover transactions, balances, spending
                  categories and financial information.
                </p>

                <p>
                  The exploration helped me think about a different
                  layer: what if the product didn't just record what
                  happened, but helped users understand what to do
                  next?
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <div className="grid gap-5 sm:grid-cols-2">
              <Wireframe
                title="Existing finance patterns"
                type="list"
              />

              <Wireframe
                title="Transaction exploration"
                type="chart"
              />
            </div>
          </Reveal>

          <Reveal className="mt-8">
            <div className="border-l-2 border-neutral-900 pl-6 dark:border-white">
              <p className="max-w-[800px] font-serif text-[25px] leading-[1.3] tracking-[-0.02em] sm:text-[32px]">
                “The opportunity isn't showing users more
                financial data. It's helping them understand what
                that data means.”
              </p>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            USER
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="04"
                label="The user"
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
                <div>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-black/[0.1] bg-white dark:border-white/[0.1] dark:bg-[#1b1b1b]">
                    <UsersIcon />
                  </div>

                  <h2 className="mt-6 font-serif text-[38px] tracking-[-0.035em]">
                    Rahul, 27
                  </h2>

                  <p className="mt-1 text-[13px] text-neutral-500">
                    Software developer · Bangalore
                  </p>
                </div>

                <div>
                  <p className="text-[18px] leading-8 text-neutral-600 dark:text-neutral-300">
                    Rahul earns a stable salary and uses UPI,
                    cards and online services regularly. He wants
                    to save, invest and travel, but doesn't actively
                    analyze where his money disappears every month.
                  </p>

                  <div className="mt-10 grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                        Goals
                      </p>

                      <ul className="mt-4 space-y-3 text-[14px] text-neutral-500">
                        <li>• Understand monthly spending</li>
                        <li>• Build emergency savings</li>
                        <li>• Travel without financial stress</li>
                        <li>• Start investing consistently</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                        Friction
                      </p>

                      <ul className="mt-4 space-y-3 text-[14px] text-neutral-500">
                        <li>• Doesn't track everything manually</li>
                        <li>• Doesn't know safe spending limits</li>
                        <li>• Finds financial data difficult to interpret</li>
                        <li>• Wants guidance without complexity</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =================================================
            PROBLEM STATEMENT
        ================================================= */}

        <section className="px-5 py-28 sm:px-8 sm:py-36 lg:px-14">
          <Reveal>
            <SectionLabel
              number="05"
              label="Design challenge"
            />

            <div className="mt-10 max-w-[1000px]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                How might we
              </p>

              <h2 className="mt-5 font-serif text-[42px] leading-[1.05] tracking-[-0.04em] sm:text-[64px]">
                help young professionals understand their money
                and make better everyday financial decisions without
                manually analyzing everything?
              </h2>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            PRODUCT IDEA
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="06"
                label="Product concept"
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
                <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                  From financial data to financial decisions.
                </h2>

                <p className="text-[17px] leading-8 text-neutral-500 dark:text-neutral-400 sm:text-[19px]">
                  Finora brings transactions, spending patterns,
                  goals and upcoming expenses together, then adds
                  an AI layer that explains the information and
                  recommends possible actions.
                </p>
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <Wireframe
                title="AI financial brain"
                type="flow"
                aspect="aspect-[16/7]"
              />
            </Reveal>

            <Reveal className="mt-10">
              <div className="grid gap-px bg-black/[0.08] dark:bg-white/[0.08] sm:grid-cols-3">
                {[
                  {
                    title: "Analyze",
                    text: "Understand income, expenses, recurring payments and spending patterns.",
                  },
                  {
                    title: "Predict",
                    text: "Estimate future cash flow, savings and upcoming financial pressure.",
                  },
                  {
                    title: "Recommend",
                    text: "Turn insights into practical actions users can choose to take.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#f7f5f2] p-7 dark:bg-[#111111]"
                  >
                    <p className="font-mono text-[10px] text-neutral-400">
                      0{["Analyze", "Predict", "Recommend"].indexOf(item.title) + 1}
                    </p>

                    <h3 className="mt-10 text-[17px] font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-6 text-neutral-500 dark:text-neutral-400">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* =================================================
            DASHBOARD
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel
              number="07"
              label="Home dashboard"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                Don't make the user calculate what the dashboard
                already knows.
              </h2>

              <div className="space-y-5 text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px]">
                <p>
                  The home screen becomes the user's financial
                  snapshot rather than a collection of disconnected
                  charts.
                </p>

                <p>
                  The first layer answers the most important
                  questions: How am I doing? What changed? What
                  should I pay attention to?
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <Wireframe
              title="Home / Financial health"
              type="dashboard"
              aspect="aspect-[16/9]"
            />
          </Reveal>

          <Reveal className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: CircleDollarSign,
                title: "Financial health",
                text: "A simple score with reasons behind the score.",
              },
              {
                icon: TrendingDown,
                title: "Spending",
                text: "Current spending compared with previous patterns.",
              },
              {
                icon: Sparkles,
                title: "AI summary",
                text: "The most important change surfaced first.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border border-black/[0.08] p-6 dark:border-white/[0.08]"
                >
                  <Icon
                    size={19}
                    strokeWidth={1.4}
                    className="text-neutral-400"
                  />

                  <h3 className="mt-8 text-[15px] font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-neutral-500 dark:text-neutral-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </Reveal>
        </section>

        {/* =================================================
            INSIGHTS
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="08"
                label="AI insights"
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
                <div>
                  <Bot
                    size={27}
                    strokeWidth={1.3}
                    className="text-neutral-400"
                  />

                  <h2 className="mt-7 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                    AI shouldn't just tell users they're spending
                    more.
                  </h2>
                </div>

                <div>
                  <p className="text-[17px] leading-8 text-neutral-500 dark:text-neutral-400 sm:text-[19px]">
                    It should explain the pattern and give the user
                    an actionable next step.
                  </p>

                  <div className="mt-8 border border-black/[0.08] bg-white p-6 dark:border-white/[0.08] dark:bg-[#191919]">
                    <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-400">
                      Example insight
                    </p>

                    <p className="mt-5 text-[17px] font-medium">
                      Food spending increased by 31%.
                    </p>

                    <p className="mt-3 text-[14px] leading-6 text-neutral-500 dark:text-neutral-400">
                      You spent approximately ₹6,850 on food this
                      month. Reducing delivery by two orders a week
                      could potentially save around ₹1,800 per month.
                    </p>

                    <button
                      type="button"
                      className="mt-5 rounded-full border border-black/[0.1] px-4 py-2 text-[12px] transition-colors hover:bg-neutral-100 dark:border-white/[0.1] dark:hover:bg-white/[0.08]"
                    >
                      Create food budget
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <div className="grid gap-5 sm:grid-cols-2">
                <Wireframe
                  title="Spending insight"
                  type="chart"
                />

                <Wireframe
                  title="AI recommendation"
                  type="chat"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* =================================================
            WHAT CAN I AFFORD
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel
              number="09"
              label="What can I afford?"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                A balance tells you what you have. It doesn't tell
                you what you can safely spend.
              </h2>

              <div className="space-y-5 text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px]">
                <p>
                  This became one of the key conversational
                  opportunities in the product.
                </p>

                <p>
                  A user can ask something as simple as “Can I
                  afford a ₹25,000 trip next month?” and Finora
                  considers current savings, upcoming bills, goals,
                  income and emergency reserves before explaining
                  the trade-off.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <Wireframe
              title="What can I afford?"
              type="chat"
              aspect="aspect-[16/8]"
            />
          </Reveal>

          <Reveal className="mt-10">
            <div className="grid gap-3 sm:grid-cols-4">
              {[
                "Current savings",
                "Upcoming bills",
                "Financial goals",
                "Emergency buffer",
              ].map((item, index) => (
                <div
                  key={item}
                  className="border border-black/[0.08] p-5 dark:border-white/[0.08]"
                >
                  <span className="font-mono text-[10px] text-neutral-400">
                    0{index + 1}
                  </span>

                  <p className="mt-8 text-[14px] font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* =================================================
            GOALS
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="10"
                label="Goals"
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
                <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                  Turn vague intentions into visible progress.
                </h2>

                <p className="text-[17px] leading-8 text-neutral-500 dark:text-neutral-400 sm:text-[19px]">
                  Goals connect everyday financial behavior with
                  something meaningful to the user: an emergency
                  fund, a trip, a purchase or a long-term investment
                  target.
                </p>
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <div className="grid gap-5 sm:grid-cols-2">
                <Wireframe
                  title="Goals overview"
                  type="goal"
                />

                <Wireframe
                  title="Goal detail + AI plan"
                  type="goal"
                />
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <div className="border border-black/[0.08] p-7 dark:border-white/[0.08]">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                  AI recommendation
                </p>

                <p className="mt-5 max-w-[750px] font-serif text-[25px] leading-[1.3] tracking-[-0.02em] sm:text-[32px]">
                  “At your current saving rate, you'll reach your
                  ₹2L emergency fund goal in approximately six
                  months.”
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =================================================
            FORECAST
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel
              number="11"
              label="Predictive finance"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
              <div>
                <LineChart
                  size={27}
                  strokeWidth={1.3}
                  className="text-neutral-400"
                />

                <h2 className="mt-7 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                  Show users where they're heading.
                </h2>
              </div>

              <div>
                <p className="text-[17px] leading-8 text-neutral-500 dark:text-neutral-400 sm:text-[19px]">
                  Historical spending is useful, but a personal
                  finance product becomes more useful when it can
                  help users anticipate upcoming pressure.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    "Month-end balance",
                    "Estimated savings",
                    "Upcoming expenses",
                  ].map((item) => (
                    <div
                      key={item}
                      className="border border-black/[0.08] p-5 dark:border-white/[0.08]"
                    >
                      <p className="text-[13px] font-medium">
                        {item}
                      </p>

                      <p className="mt-4 font-serif text-[26px]">
                        ₹28.4K
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <Wireframe
              title="Cash flow forecast"
              type="chart"
              aspect="aspect-[16/8]"
            />
          </Reveal>

          <Reveal className="mt-8 flex gap-4 border-l-2 border-neutral-900 pl-5 dark:border-white">
            <TrendingUp
              size={20}
              strokeWidth={1.4}
              className="mt-1 shrink-0"
            />

            <p className="max-w-[700px] text-[15px] leading-7 text-neutral-500 dark:text-neutral-400">
              The forecast is not presented as certainty. It is
              presented as an estimate that helps the user
              understand potential future outcomes.
            </p>
          </Reveal>
        </section>

        {/* =================================================
            TRANSACTIONS
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="12"
                label="Transactions"
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
                <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                  Keep the raw data available, but don't make it
                  the whole experience.
                </h2>

                <p className="text-[17px] leading-8 text-neutral-500 dark:text-neutral-400 sm:text-[19px]">
                  Users still need transaction-level detail.
                  Finora keeps that layer simple while using
                  categories and patterns to make the information
                  easier to understand.
                </p>
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <Wireframe
                title="Transactions / categorized spending"
                type="list"
                aspect="aspect-[16/9]"
              />
            </Reveal>
          </div>
        </section>

        {/* =================================================
            RECURRING EXPENSES
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel
              number="13"
              label="Recurring expenses"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                Make upcoming money movement visible before it
                happens.
              </h2>

              <p className="text-[17px] leading-8 text-neutral-500 dark:text-neutral-400 sm:text-[19px]">
                Rent, subscriptions, EMIs, insurance and recurring
                bills can quietly affect a user's available money.
                Surfacing them helps users understand what is
                actually available to spend.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <Wireframe
              title="Upcoming payments"
              type="list"
              aspect="aspect-[16/8]"
            />
          </Reveal>
        </section>

        {/* =================================================
            AI CHAT
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="14"
                label="AI finance coach"
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
                <div>
                  <Sparkles
                    size={27}
                    strokeWidth={1.3}
                    className="text-neutral-400"
                  />

                  <h2 className="mt-7 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                    Let users ask questions in their own words.
                  </h2>
                </div>

                <div>
                  <p className="text-[17px] leading-8 text-neutral-500 dark:text-neutral-400 sm:text-[19px]">
                    Instead of forcing users through financial
                    menus, the AI layer lets them ask questions
                    naturally.
                  </p>

                  <div className="mt-8 space-y-3">
                    {[
                      "Where am I overspending?",
                      "How can I save ₹10,000 this month?",
                      "Why did my spending increase?",
                      "Can I afford this purchase?",
                    ].map((question) => (
                      <div
                        key={question}
                        className="flex items-center justify-between border-b border-black/[0.08] py-4 text-[14px] dark:border-white/[0.08]"
                      >
                        <span>{question}</span>

                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.4}
                          className="text-neutral-400"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <Wireframe
                title="AI finance coach"
                type="chat"
                aspect="aspect-[16/9]"
              />
            </Reveal>
          </div>
        </section>

        {/* =================================================
            INVESTMENT
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel
              number="15"
              label="Investment guidance"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                Guide without pretending AI knows the future.
              </h2>

              <div className="space-y-5 text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px]">
                <p>
                  Investment guidance needs a different level of
                  trust. I would avoid making the AI say “buy this
                  fund.”
                </p>

                <p>
                  Instead, the experience can explain possible
                  categories and trade-offs based on the user's
                  goals, liquidity needs and risk preferences.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <Wireframe
              title="Investment overview"
              type="dashboard"
              aspect="aspect-[16/8]"
            />
          </Reveal>
        </section>

        {/* =================================================
            FINANCIAL HEALTH
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="16"
                label="Financial health"
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
                <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                  A score is useful only when users understand why
                  it changed.
                </h2>

                <p className="text-[17px] leading-8 text-neutral-500 dark:text-neutral-400 sm:text-[19px]">
                  Finora's financial health score combines areas
                  such as savings, spending, debt, emergency
                  preparedness and investments. The important part
                  is the explanation behind the score.
                </p>
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <Wireframe
                title="Financial health / 78"
                type="dashboard"
                aspect="aspect-[16/8]"
              />
            </Reveal>
          </div>
        </section>

        {/* =================================================
            EDGE CASES
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel
              number="17"
              label="Edge cases"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                Financial products can't assume everything is
                perfect.
              </h2>

              <div className="grid gap-px bg-black/[0.08] dark:bg-white/[0.08] sm:grid-cols-2">
                {[
                  "No transactions",
                  "Account disconnected",
                  "Missing transaction data",
                  "Unusual spending spike",
                  "No active goals",
                  "Prediction unavailable",
                  "Payment failure",
                  "AI doesn't have enough context",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#f7f5f2] p-5 dark:bg-[#111111]"
                  >
                    <Check
                      size={15}
                      strokeWidth={1.5}
                      className="text-neutral-400"
                    />

                    <p className="mt-5 text-[14px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            TRUST
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="18"
                label="Trust & privacy"
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
                <div>
                  <LockKeyhole
                    size={27}
                    strokeWidth={1.3}
                    className="text-neutral-400"
                  />

                  <h2 className="mt-7 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                    The more sensitive the data, the more important
                    the explanation.
                  </h2>
                </div>

                <div>
                  <p className="text-[17px] leading-8 text-neutral-500 dark:text-neutral-400 sm:text-[19px]">
                    Since Finora deals with financial information,
                    trust becomes part of the UX rather than an
                    afterthought.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      "Clear account connection permissions",
                      "Explain how AI recommendations are generated",
                      "Allow users to disconnect accounts",
                      "Keep financial actions under user control",
                      "Avoid presenting predictions as guarantees",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 border-b border-black/[0.08] pb-4 text-[14px] dark:border-white/[0.08]"
                      >
                        <Check
                          size={16}
                          strokeWidth={1.4}
                          className="mt-0.5 shrink-0 text-neutral-400"
                        />

                        <span className="text-neutral-600 dark:text-neutral-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =================================================
            CORE FLOW
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel
              number="19"
              label="Core experience"
            />

            <h2 className="mt-10 max-w-[850px] font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[54px]">
              The product should continuously turn data into
              context.
            </h2>
          </Reveal>

          <Reveal className="mt-14">
            <div className="space-y-0">
              {[
                {
                  number: "01",
                  title: "Connect",
                  text: "User connects financial accounts and gives permission.",
                },
                {
                  number: "02",
                  title: "Understand",
                  text: "Finora organizes transactions and spending patterns.",
                },
                {
                  number: "03",
                  title: "Surface",
                  text: "AI highlights meaningful changes and upcoming risks.",
                },
                {
                  number: "04",
                  title: "Decide",
                  text: "User asks questions or explores recommendations.",
                },
                {
                  number: "05",
                  title: "Act",
                  text: "User chooses a budget, goal or financial action.",
                },
                {
                  number: "06",
                  title: "Learn",
                  text: "The experience updates as financial behavior changes.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group flex gap-6 border-b border-black/[0.08] py-6 dark:border-white/[0.08]"
                >
                  <span className="font-mono text-[10px] text-neutral-400">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-[17px] font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-[650px] text-[14px] leading-6 text-neutral-500 dark:text-neutral-400">
                      {item.text}
                    </p>
                  </div>

                  <ChevronRight
                    size={17}
                    strokeWidth={1.3}
                    className="ml-auto mt-1 text-neutral-400 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* =================================================
            WIREFRAME SET
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="20"
                label="Wireframes"
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
                <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                  Structure first. Visual polish later.
                </h2>

                <p className="text-[17px] leading-8 text-neutral-500 dark:text-neutral-400 sm:text-[19px]">
                  The first pass focuses on information hierarchy,
                  navigation and the relationship between
                  financial data and AI recommendations.
                </p>
              </div>
            </Reveal>

            <Reveal className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <Wireframe
                title="01 / Onboarding"
                type="phone"
                aspect="aspect-[3/4]"
              />

              <Wireframe
                title="02 / Home"
                type="phone"
                aspect="aspect-[3/4]"
              />

              <Wireframe
                title="03 / Transactions"
                type="phone"
                aspect="aspect-[3/4]"
              />

              <Wireframe
                title="04 / Insights"
                type="phone"
                aspect="aspect-[3/4]"
              />

              <Wireframe
                title="05 / Goals"
                type="phone"
                aspect="aspect-[3/4]"
              />

              <Wireframe
                title="06 / AI Coach"
                type="phone"
                aspect="aspect-[3/4]"
              />
            </Reveal>
          </div>
        </section>

        {/* =================================================
            FINAL SCREENS
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel
              number="21"
              label="Selected screens"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                A focused set of screens around the core problems.
              </h2>

              <p className="text-[17px] leading-8 text-neutral-500 dark:text-neutral-400 sm:text-[19px]">
                Rather than showing every screen, the portfolio
                should highlight the screens that demonstrate the
                decisions behind the product.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <Wireframe
              title="Home / Financial overview"
              type="dashboard"
              aspect="aspect-[16/9]"
            />
          </Reveal>

          <Reveal className="mt-5 grid gap-5 sm:grid-cols-2">
            <Wireframe
              title="Spending insights"
              type="chart"
              aspect="aspect-[16/10]"
            />

            <Wireframe
              title="Upcoming expenses"
              type="list"
              aspect="aspect-[16/10]"
            />
          </Reveal>

          <Reveal className="mt-5 grid gap-5 sm:grid-cols-3">
            <Wireframe
              title="Goals"
              type="goal"
              aspect="aspect-[3/4]"
            />

            <Wireframe
              title="AI Coach"
              type="chat"
              aspect="aspect-[3/4]"
            />

            <Wireframe
              title="What can I afford?"
              type="phone"
              aspect="aspect-[3/4]"
            />
          </Reveal>
        </section>

        {/* =================================================
            DESIGN DECISIONS
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="22"
                label="Key design decisions"
              />

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Context over charts",
                    text: "Every major financial number should answer why it matters.",
                  },
                  {
                    number: "02",
                    title: "Actionable AI",
                    text: "Insights should lead to an understandable next action.",
                  },
                  {
                    number: "03",
                    title: "Explain recommendations",
                    text: "Users should be able to understand how an AI recommendation was calculated.",
                  },
                  {
                    number: "04",
                    title: "User stays in control",
                    text: "AI can recommend and explain, but financial actions remain user-controlled.",
                  },
                  {
                    number: "05",
                    title: "Positive reinforcement",
                    text: "The AI should celebrate good financial behavior instead of only warning users.",
                  },
                  {
                    number: "06",
                    title: "Don't over-notify",
                    text: "Only surface alerts that represent meaningful changes or decisions.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="border border-black/[0.08] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.04)] dark:border-white/[0.08] dark:hover:bg-[#191919]"
                  >
                    <span className="font-mono text-[10px] text-neutral-400">
                      {item.number}
                    </span>

                    <h3 className="mt-10 text-[17px] font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-6 text-neutral-500 dark:text-neutral-400">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* =================================================
            REFLECTION
        ================================================= */}

        <section className="px-5 py-28 sm:px-8 sm:py-36 lg:px-14">
          <Reveal>
            <SectionLabel
              number="23"
              label="Reflection"
            />

            <div className="mt-10 max-w-[1000px]">
              <h2 className="font-serif text-[42px] leading-[1.06] tracking-[-0.04em] sm:text-[64px]">
                The problem isn't that users don't have financial
                data. It's that the data doesn't always help them
                decide what to do next.
              </h2>

              <p className="mt-8 max-w-[750px] text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px] sm:leading-8">
                Finora became an exploration of how AI can sit
                between financial data and everyday decisions. The
                strongest opportunities were not about adding more
                charts, but about giving users context: why their
                spending changed, what they can afford, how close
                they are to their goals and what might happen next.
              </p>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            FINAL STATEMENT
        ================================================= */}

        <section className="border-t border-black/[0.08] px-5 py-20 dark:border-white/[0.08] sm:px-8 sm:py-24 lg:px-14">
          <Reveal>
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                  Finora
                </p>

                <p className="mt-3 font-serif text-[34px] tracking-[-0.035em] sm:text-[42px]">
                  Understand your money.
                </p>
              </div>

              <a
                href="/work"
                className="group flex items-center gap-3 text-[14px] text-neutral-500 transition-colors hover:text-neutral-950 dark:hover:text-white"
              >
                <ArrowLeft
                  size={16}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />

                Back to selected work
              </a>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}

/* =========================================================
   SMALL ICON COMPONENT
========================================================= */

