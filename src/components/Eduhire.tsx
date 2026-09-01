import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Check,
  ChevronRight,
  Clock3,
  FileText,
  Layers3,
  Search,
  Smartphone,
  Users,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

type ImagePlaceholderProps = {
  label: string;
  aspect?: string;
};

/* =========================================================
   REVEAL ANIMATION
========================================================= */

function Reveal({ children, className = "" }: RevealProps) {
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

        if (entry && entry.isIntersecting) {
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
   IMAGE PLACEHOLDER

   Replace this component with your actual image when ready.
========================================================= */

function ImagePlaceholder({
  label,
  aspect = "aspect-[16/10]",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative ${aspect} overflow-hidden border border-black/[0.08] bg-[#eeece8] dark:border-white/[0.08] dark:bg-[#1b1b1b]`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.1] text-neutral-400 dark:border-white/[0.1]">
            <FileText
              size={17}
              strokeWidth={1.4}
            />
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
            {label}
          </p>
        </div>
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
      <p className="font-serif text-[34px] tracking-[-0.04em] sm:text-[42px]">
        {value}
      </p>

      <p className="mt-1 max-w-[140px] text-[12px] leading-5 text-neutral-500 dark:text-neutral-400">
        {label}
      </p>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function EduHire() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-neutral-950 dark:bg-[#111111] dark:text-neutral-100">

      {/* ===================================================
          PAGE CONTAINER / RAILS
      =================================================== */}

      <div className="mx-auto w-full max-w-[1180px] border-x border-black/[0.07] dark:border-white/[0.07]">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="px-5 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-24 lg:px-14">
          <Reveal>
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                Case Study / 01
              </p>

              <p className="text-[12px] text-neutral-400">
                EduHire
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-16 sm:mt-20">
            <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-neutral-400">
              E-learning · AI · Career
            </p>

            <h1 className="mt-5 max-w-[1000px] font-serif text-[52px] leading-[0.98] tracking-[-0.045em] sm:text-[76px] lg:text-[92px]">
              Learn smarter.
              <br />
              Get job ready.
            </h1>

            <p className="mt-8 max-w-[700px] text-[17px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[20px] sm:leading-8">
              Redesigning EduHire into a more intuitive e-learning
              experience with personalized learning, AI-powered
              support and clearer paths from learning to career
              growth.
            </p>
          </Reveal>

          {/* Project metadata */}

          <Reveal className="mt-14 sm:mt-20">
            <div className="grid grid-cols-2 gap-y-8 border-y border-black/[0.1] py-7 dark:border-white/[0.1] sm:grid-cols-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                  Role
                </p>

                <p className="mt-2 text-[14px]">
                  UX/UI Designer
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                  Duration
                </p>

                <p className="mt-2 text-[14px]">
                  1 month
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                  Scope
                </p>

                <p className="mt-2 text-[14px]">
                  40+ screens
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                  Platform
                </p>

                <p className="mt-2 text-[14px]">
                  Mobile + Web
                </p>
              </div>
            </div>
          </Reveal>

          {/* Hero image */}

          <Reveal className="mt-12 sm:mt-16">
            <div className="overflow-hidden bg-white p-2 shadow-[0_30px_100px_rgba(0,0,0,0.06)] dark:bg-[#191919]">
              <ImagePlaceholder
                label="Hero / EduHire screens"
                aspect="aspect-[16/9]"
              />
            </div>
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
              label="Project overview"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">
              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[54px]">
                Making online learning easier to navigate and more
                personal.
              </h2>

              <div className="space-y-6 text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px] sm:leading-8">
                <p>
                  EduHire is an e-learning platform aimed at
                  learners, job seekers and fresh graduates who want
                  to gain skills and move towards their career goals
                  without having to manage multiple platforms.
                </p>

                <p>
                  The existing experience suffered from complex
                  navigation, outdated visuals and low engagement.
                  The redesign focused on making learning more
                  accessible, structured and interactive.
                </p>

                <p>
                  I worked across the information architecture,
                  user journeys, UX/UI, AI interactions, design
                  system and high-fidelity screens.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Stats */}

          <Reveal className="mt-16">
            <div className="grid grid-cols-2 gap-y-10 border-t border-black/[0.08] pt-10 dark:border-white/[0.08] sm:grid-cols-4">
              <Stat
                value="152"
                label="Survey responses"
              />

              <Stat
                value="10"
                label="User interviews"
              />

              <Stat
                value="40+"
                label="Designed screens"
              />

              <Stat
                value="1 mo"
                label="Design duration"
              />
            </div>
          </Reveal>
        </section>

        {/* =================================================
            DESIGN THINKING
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="02"
                label="Design thinking"
              />

              <h2 className="mt-10 max-w-[850px] font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[54px]">
                Understand the learner before designing the
                interface.
              </h2>
            </Reveal>

            <Reveal className="mt-14 sm:mt-20">
              <div className="grid border-l border-t border-black/[0.08] dark:border-white/[0.08] sm:grid-cols-2 lg:grid-cols-5">
                {[
                  {
                    number: "01",
                    title: "Empathize",
                    text: "Understand learner struggles, motivation and expectations.",
                  },
                  {
                    number: "02",
                    title: "Define",
                    text: "Frame the core problems around guidance, engagement and complexity.",
                  },
                  {
                    number: "03",
                    title: "Ideate",
                    text: "Explore AI tutoring, adaptive learning and career-focused features.",
                  },
                  {
                    number: "04",
                    title: "Prototype",
                    text: "Turn the strongest ideas into flows and product experiences.",
                  },
                  {
                    number: "05",
                    title: "Test",
                    text: "Collect feedback and refine the experience around usability.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="group border-b border-r border-black/[0.08] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:border-white/[0.08] dark:hover:bg-[#191919] sm:p-7"
                  >
                    <span className="font-mono text-[11px] text-neutral-400">
                      {item.number}
                    </span>

                    <h3 className="mt-12 text-[17px] font-medium">
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
            PROBLEM
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel
              number="03"
              label="The problem"
            />

            <div className="mt-10 grid gap-12 lg:grid-cols-[0.8fr_1.5fr]">
              <div>
                <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[54px]">
                  Learning platforms give content. Learners still
                  need guidance.
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  "No real-time guidance when learners get stuck.",
                  "Low engagement makes it difficult to stay consistent.",
                  "Too much content makes discovery and navigation overwhelming.",
                  "Static courses don't adapt to different learning speeds.",
                ].map((problem) => (
                  <div
                    key={problem}
                    className="flex gap-4 border-b border-black/[0.08] pb-5 pt-1 dark:border-white/[0.08]"
                  >
                    <span className="mt-1 text-neutral-400">
                      —
                    </span>

                    <p className="text-[16px] leading-7 text-neutral-600 dark:text-neutral-300 sm:text-[18px]">
                      {problem}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            RESEARCH
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="04"
                label="User research"
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
                <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                  What learners actually needed.
                </h2>

                <p className="text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px] sm:leading-8">
                  I combined secondary research with primary surveys
                  and interviews to understand learning challenges,
                  expectations around personalization and how
                  comfortable users were with AI-driven support.
                </p>
              </div>
            </Reveal>

            {/* Research numbers */}

            <Reveal className="mt-14">
              <div className="grid gap-px bg-black/[0.08] dark:bg-white/[0.08] sm:grid-cols-2">
                <div className="bg-[#f7f5f2] p-7 dark:bg-[#111111] sm:p-9">
                  <Users
                    size={21}
                    strokeWidth={1.4}
                    className="text-neutral-400"
                  />

                  <p className="mt-8 font-serif text-[52px] tracking-[-0.04em]">
                    152
                  </p>

                  <p className="mt-2 text-[14px] text-neutral-500">
                    quantitative survey responses
                  </p>
                </div>

                <div className="bg-[#f7f5f2] p-7 dark:bg-[#111111] sm:p-9">
                  <Search
                    size={21}
                    strokeWidth={1.4}
                    className="text-neutral-400"
                  />

                  <p className="mt-8 font-serif text-[52px] tracking-[-0.04em]">
                    10
                  </p>

                  <p className="mt-2 text-[14px] text-neutral-500">
                    qualitative online interviews
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Research insights */}

            <Reveal className="mt-12">
              <div className="grid gap-8 sm:grid-cols-3">
                <div className="border-t border-black/[0.1] pt-5 dark:border-white/[0.1]">
                  <p className="font-serif text-[36px]">
                    73%
                  </p>

                  <p className="mt-2 text-[14px] leading-6 text-neutral-500">
                    currently use Google or YouTube to clarify
                    concepts.
                  </p>
                </div>

                <div className="border-t border-black/[0.1] pt-5 dark:border-white/[0.1]">
                  <p className="font-serif text-[36px]">
                    57.8%
                  </p>

                  <p className="mt-2 text-[14px] leading-6 text-neutral-500">
                    wanted personalized learning paths.
                  </p>
                </div>

                <div className="border-t border-black/[0.1] pt-5 dark:border-white/[0.1]">
                  <p className="font-serif text-[36px]">
                    43.4%
                  </p>

                  <p className="mt-2 text-[14px] leading-6 text-neutral-500">
                    selected a 24/7 AI tutor as a desired feature.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =================================================
            PERSONA
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel
              number="05"
              label="User persona"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
              <div>
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-black/[0.1] bg-white dark:border-white/[0.1] dark:bg-[#191919]">
                  <Users
                    size={27}
                    strokeWidth={1.3}
                    className="text-neutral-400"
                  />
                </div>

                <h2 className="mt-6 font-serif text-[36px] tracking-[-0.03em]">
                  Ananya
                </h2>

                <p className="mt-1 text-[14px] text-neutral-500">
                  Final-year student · Sydney
                </p>
              </div>

              <div>
                <p className="text-[18px] leading-8 text-neutral-600 dark:text-neutral-300">
                  A motivated student preparing for internships and
                  entry-level jobs. She wants to strengthen her
                  technical and soft skills but gets frustrated by
                  too many course choices, lack of guidance and
                  low engagement.
                </p>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-400">
                      Needs
                    </p>

                    <ul className="mt-4 space-y-3 text-[14px] leading-6 text-neutral-500">
                      <li>• Relevant skill development</li>
                      <li>• Personalized recommendations</li>
                      <li>• Progress tracking</li>
                      <li>• Instant doubt resolution</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-400">
                      Frustrations
                    </p>

                    <ul className="mt-4 space-y-3 text-[14px] leading-6 text-neutral-500">
                      <li>• Too many choices</li>
                      <li>• Losing motivation</li>
                      <li>• Complex topics</li>
                      <li>• Long lessons</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            USER JOURNEY
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="06"
                label="User journey"
              />

              <h2 className="mt-10 max-w-[850px] font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[54px]">
                From “I want to learn” to “I know what's next.”
              </h2>
            </Reveal>

            <Reveal className="mt-14 sm:mt-20">
              <div className="overflow-hidden border border-black/[0.08] dark:border-white/[0.08]">
                <div className="grid sm:grid-cols-2 lg:grid-cols-6">
                  {[
                    "Onboarding",
                    "Explore",
                    "Learning",
                    "Engagement",
                    "Completion",
                    "Retention",
                  ].map((stage, index) => (
                    <div
                      key={stage}
                      className="border-b border-r border-black/[0.08] p-5 last:border-r-0 dark:border-white/[0.08] sm:p-6 lg:border-b-0"
                    >
                      <span className="font-mono text-[10px] text-neutral-400">
                        0{index + 1}
                      </span>

                      <p className="mt-8 text-[14px] font-medium">
                        {stage}
                      </p>

                      <div className="mt-4 h-1 w-full bg-neutral-200 dark:bg-neutral-800">
                        <div
                          className="h-full bg-neutral-900 dark:bg-white"
                          style={{
                            width: `${40 + index * 10}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =================================================
            SOLUTION
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel
              number="07"
              label="The solution"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[54px]">
                EduHire becomes more than a course library.
              </h2>

              <div className="space-y-5 text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px] sm:leading-8">
                <p>
                  The redesigned experience combines course
                  discovery, personalized recommendations, progress
                  tracking and AI-powered learning support.
                </p>

                <p>
                  The goal was to help learners understand where
                  they are, what they should learn next and where
                  they can get help when they are stuck.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Solution cards */}

          <Reveal className="mt-14">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Bot,
                  title: "24/7 AI Mentor",
                  text: "Answers questions and explains difficult concepts in conversational language.",
                },
                {
                  icon: Layers3,
                  title: "Personalized learning",
                  text: "Recommendations adapt around progress and learning gaps.",
                },
                {
                  icon: Clock3,
                  title: "Progress & motivation",
                  text: "Reminders, progress updates and milestones encourage consistency.",
                },
                {
                  icon: Smartphone,
                  title: "Accessible learning",
                  text: "Flexible learning across devices with simpler explanations and translation support.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group border border-black/[0.08] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] dark:border-white/[0.08] dark:hover:bg-[#191919] sm:p-7"
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.4}
                      className="text-neutral-400 transition-transform duration-300 group-hover:scale-110"
                    />

                    <h3 className="mt-12 text-[17px] font-medium">
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
        </section>

        {/* =================================================
            AI EXPERIENCE
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="08"
                label="AI experience"
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
                <div>
                  <Bot
                    size={28}
                    strokeWidth={1.2}
                    className="text-neutral-400"
                  />

                  <h2 className="mt-7 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                    A learning assistant, not another feature.
                  </h2>
                </div>

                <div className="space-y-5 text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px] sm:leading-8">
                  <p>
                    The AI chatbot was designed as a natural part of
                    the learning experience rather than a separate
                    tool.
                  </p>

                  <p>
                    Learners can use it to clear doubts, create study
                    plans, receive course recommendations and get
                    quick explanations without leaving the learning
                    environment.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-14 sm:mt-20">
              <div className="overflow-hidden bg-white p-2 dark:bg-[#191919]">
                <ImagePlaceholder
                  label="AI chatbot screens"
                  aspect="aspect-[16/8]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* =================================================
            INFORMATION ARCHITECTURE
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel
              number="09"
              label="Information architecture"
            />

            <h2 className="mt-10 max-w-[850px] font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[54px]">
              Organizing a large learning ecosystem into a simpler
              mental model.
            </h2>
          </Reveal>

          <Reveal className="mt-14">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Home",
                  items: [
                    "Recommended courses",
                    "Top rated",
                    "Free courses",
                    "Continue learning",
                  ],
                },
                {
                  title: "Explore",
                  items: [
                    "Categories",
                    "Search",
                    "Filters",
                    "Course details",
                  ],
                },
                {
                  title: "My learning",
                  items: [
                    "Current courses",
                    "Completed",
                    "Downloaded",
                    "Archived",
                  ],
                },
                {
                  title: "Messages",
                  items: [
                    "Instructor messages",
                    "AI support",
                    "Notifications",
                  ],
                },
                {
                  title: "Profile",
                  items: [
                    "Account",
                    "Settings",
                    "Privacy",
                    "Preferences",
                  ],
                },
                {
                  title: "Commerce",
                  items: [
                    "Cart",
                    "Checkout",
                    "Payment",
                    "Confirmation",
                  ],
                },
              ].map((section) => (
                <div
                  key={section.title}
                  className="border border-black/[0.08] p-6 dark:border-white/[0.08]"
                >
                  <h3 className="text-[17px] font-medium">
                    {section.title}
                  </h3>

                  <div className="mt-6 space-y-3">
                    {section.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between border-b border-black/[0.06] pb-3 text-[13px] text-neutral-500 last:border-0 dark:border-white/[0.06]"
                      >
                        <span>{item}</span>

                        <ChevronRight
                          size={14}
                          strokeWidth={1.4}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* =================================================
            USER FLOW
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="10"
                label="Core user flow"
              />

              <h2 className="mt-10 max-w-[800px] font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[54px]">
                From discovering a course to completing it.
              </h2>
            </Reveal>

            <Reveal className="mt-14">
              <div className="flex flex-col">
                {[
                  "Home",
                  "Search / Explore",
                  "Course details",
                  "Enroll / Add to cart",
                  "Checkout",
                  "My learning",
                  "Start course",
                  "Complete assessment",
                  "Certificate",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-5 border-b border-black/[0.08] py-5 dark:border-white/[0.08]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/[0.1] font-mono text-[10px] dark:border-white/[0.1]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-[15px]">
                      {step}
                    </p>

                    {index < 8 && (
                      <ChevronRight
                        size={15}
                        strokeWidth={1.3}
                        className="ml-auto text-neutral-400"
                      />
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* =================================================
            WIREFRAMES
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel
              number="11"
              label="Wireframes"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                Start with structure. Polish later.
              </h2>

              <p className="text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px] sm:leading-8">
                Before moving into visual design, I focused on
                hierarchy, navigation and task flow. The wireframes
                helped establish the core structure of the
                experience before introducing the visual system.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <ImagePlaceholder
                label="Onboarding wireframe"
                aspect="aspect-[3/4]"
              />

              <ImagePlaceholder
                label="Home wireframe"
                aspect="aspect-[3/4]"
              />

              <ImagePlaceholder
                label="Course wireframe"
                aspect="aspect-[3/4]"
              />

              <ImagePlaceholder
                label="Learning wireframe"
                aspect="aspect-[3/4]"
              />

              <ImagePlaceholder
                label="Chatbot wireframe"
                aspect="aspect-[3/4]"
              />

              <ImagePlaceholder
                label="Profile wireframe"
                aspect="aspect-[3/4]"
              />
            </div>
          </Reveal>
        </section>

        {/* =================================================
            HIGH FIDELITY
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="12"
                label="Final interface"
              />

              <h2 className="mt-10 max-w-[850px] font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[54px]">
                A calmer interface for a complex learning product.
              </h2>
            </Reveal>

            {/* Large screen */}

            <Reveal className="mt-14 sm:mt-20">
              <ImagePlaceholder
                label="Home + Explore screens"
                aspect="aspect-[16/9]"
              />
            </Reveal>

            {/* Three screens */}

            <Reveal className="mt-5 grid gap-5 sm:grid-cols-3">
              <ImagePlaceholder
                label="Onboarding"
                aspect="aspect-[3/4]"
              />

              <ImagePlaceholder
                label="Course details"
                aspect="aspect-[3/4]"
              />

              <ImagePlaceholder
                label="My learning"
                aspect="aspect-[3/4]"
              />
            </Reveal>

            {/* AI */}

            <Reveal className="mt-5">
              <ImagePlaceholder
                label="AI learning assistant"
                aspect="aspect-[16/9]"
              />
            </Reveal>

            {/* Commerce */}

            <Reveal className="mt-5 grid gap-5 sm:grid-cols-2">
              <ImagePlaceholder
                label="Cart + checkout"
                aspect="aspect-[16/10]"
              />

              <ImagePlaceholder
                label="Payment confirmation"
                aspect="aspect-[16/10]"
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
              number="13"
              label="Edge cases"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                The product should still feel useful when things go
                wrong.
              </h2>

              <div className="grid gap-px bg-black/[0.08] dark:bg-white/[0.08] sm:grid-cols-2">
                {[
                  "Empty cart",
                  "No search results",
                  "Payment failed",
                  "No notifications",
                  "Course completed",
                  "No active courses",
                  "Forgot password",
                  "OTP error",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#f7f5f2] p-5 dark:bg-[#111111] sm:p-6"
                  >
                    <Check
                      size={16}
                      strokeWidth={1.5}
                      className="text-neutral-400"
                    />

                    <p className="mt-6 text-[14px] font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            DESIGN SYSTEM
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionLabel
                number="14"
                label="Visual system"
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
                <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                  Simple visual language. Clear hierarchy.
                </h2>

                <p className="text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px] sm:leading-8">
                  The source document defines Plus Jakarta Sans as
                  the primary typeface and establishes a restrained
                  palette around white, light grey, dark text and
                  blue accents. I used that foundation to keep the
                  interface modern while maintaining readability.
                </p>
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="border border-black/[0.08] p-7 dark:border-white/[0.08]">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Typography
                  </p>

                  <p className="mt-8 text-[34px] font-medium tracking-[-0.04em]">
                    Plus Jakarta Sans
                  </p>

                  <p className="mt-3 text-[14px] text-neutral-500">
                    Clean, contemporary and optimized for digital
                    interfaces.
                  </p>
                </div>

                <div className="border border-black/[0.08] p-7 dark:border-white/[0.08]">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Primary accent
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-[#2563EB]" />

                    <div>
                      <p className="text-[18px] font-medium">
                        #2563EB
                      </p>

                      <p className="mt-1 text-[13px] text-neutral-500">
                        Primary blue
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =================================================
            ROLE
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel
              number="15"
              label="My role"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                From research and structure to high-fidelity UI.
              </h2>

              <div className="space-y-5 text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px] sm:leading-8">
                <p>
                  My role covered the end-to-end UX/UI design of the
                  project.
                </p>

                <p>
                  I conducted surveys and interviews, defined
                  information architecture and user journeys,
                  designed the core flows, explored AI interactions,
                  created reusable UI patterns and produced the
                  high-fidelity interface.
                </p>

                <p>
                  I also designed supporting states including
                  onboarding, authentication, search, course
                  discovery, learning, certification, payments,
                  notifications and profile management.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            REFLECTION
        ================================================= */}

        <section className="border-t border-black/[0.08] px-5 py-28 dark:border-white/[0.08] sm:py-36 sm:px-8 lg:px-14">
          <Reveal>
            <SectionLabel
              number="16"
              label="Reflection"
            />

            <div className="mt-10 max-w-[1000px]">
              <h2 className="font-serif text-[40px] leading-[1.08] tracking-[-0.04em] sm:text-[62px]">
                The biggest opportunity wasn't adding more content.
                It was helping learners make sense of what was
                already there.
              </h2>

              <p className="mt-8 max-w-[700px] text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px] sm:leading-8">
                EduHire reinforced for me that an e-learning product
                should not simply provide courses. It should provide
                direction, feedback and momentum. The AI assistant,
                personalized recommendations and progress
                experience were designed around that principle.
              </p>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            NEXT PROJECT
        ================================================= */}

        <section className="border-t border-black/[0.08] px-5 py-16 dark:border-white/[0.08] sm:px-8 sm:py-20 lg:px-14">
          <Reveal>
            <a
              href="/work"
              className="group flex items-center justify-between"
            >
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
          </Reveal>
        </section>
      </div>
    </main>
  );
}