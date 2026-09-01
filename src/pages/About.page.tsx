import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  //   Figma,
  Layers3,
  Lightbulb,
  MapPin,
  Palette,
  Puzzle
} from "lucide-react";

const designAreas = [
  {
    number: "01",
    title: "Product",
    icon: Layers3,
    description:
      "Designing SaaS and enterprise products around real workflows, information, and decisions.",
    skills: ["SaaS", "Enterprise", "Dashboards", "Design Systems"]
  },
  {
    number: "02",
    title: "UX / UI",
    icon: Puzzle,
    description:
      "Creating clear digital experiences from user flows and structure to polished interfaces.",
    skills: ["Landing Pages", "Web Apps", "Mobile Apps", "Prototyping"]
  },
  {
    number: "03",
    title: "Visual",
    icon: Palette,
    description:
      "Creating visual communication that feels consistent, intentional, and easy to understand.",
    skills: ["Social Posts", "Posters", "Thumbnails", "Packaging"]
  },
  {
    number: "04",
    title: "Problem Solving",
    icon: Lightbulb,
    description:
      "Starting with the problem instead of the screen and finding simpler ways to solve it.",
    skills: [
      "Research",
      "User Flows",
      "Information Architecture",
      "UX Strategy"
    ]
  }
];

const developmentSkills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind",
  "AWS",
  "MongoDB",
  "shadcn/ui",
  "Material UI"
];

const aiSkills = {
  explore: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
  prototype: ["Figma Make", "Stitch", "v0", "Lovable", "Antigravity"],
  create: ["Figma", "Framer Motion", "Rive", "FigJam", "Miro"]
};

function DesignAreaCard({
  number,
  title,
  icon: Icon,
  description,
  skills
}: {
  number: string;
  title: string;
  icon: typeof Layers3;
  description: string;
  skills: string[];
}) {
  return (
    <article className="group border-t border-black/[0.08] py-8 dark:border-white/[0.08]">
      <div className="flex items-start justify-between gap-6">
        <span className="text-xs tracking-[0.16em] text-neutral-400">
          {number}
        </span>

        <Icon
          className="h-5 w-5 text-neutral-300 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3 dark:text-neutral-600"
          strokeWidth={1.5}
        />
      </div>

      <h3 className="mt-8 font-serif text-3xl tracking-[-0.04em]">{title}</h3>

      <p className="mt-4 max-w-sm text-[15px] leading-7 text-neutral-500 dark:text-neutral-400">
        {description}
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-black/[0.08] px-3 py-1.5 text-xs text-neutral-500 transition-colors duration-200 group-hover:border-black/[0.15] group-hover:text-neutral-950 dark:border-white/[0.1] dark:text-neutral-400 dark:group-hover:border-white/[0.2] dark:group-hover:text-white">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

function SkillPill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-black/[0.08] px-3 py-3 text-xs text-neutral-500 dark:border-white/[0.1] dark:text-neutral-400">
      {children}
    </span>
  );
}

function AiGroup({
  title,
  description,
  skills
}: {
  title: string;
  description: string;
  skills: string[];
}) {
  return (
    <div className="border-t border-black/[0.08] py-7 dark:border-white/[0.08] ">
      <div className="grid gap-4 sm:grid-cols-[150px_1fr]">
        <div>
          <h3 className="text-sm font-medium ">{title}</h3>

          <p className="mt-1 text-xs text-neutral-400">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillPill key={skill}>{skill}</SkillPill>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-neutral-950 transition-colors duration-300 dark:bg-[#111111] dark:text-white">
      <div className="mx-auto min-h-screen w-full max-w-[1200px] border-x border-black/[0.08] dark:border-white/[0.08]">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="px-6 pb-24 pt-24 sm:px-10 sm:pt-32 lg:px-16 lg:pb-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* Left — Content */}
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                About
              </div>

              <h1 className="mt-8 font-serif text-5xl leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[76px]">
                Product designer
                <br />
                who thinks in systems,
                <br />
                not just screens.
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-8 text-neutral-500 dark:text-neutral-400 sm:text-2xl sm:leading-9">
                I design digital products that make complex problems easier to
                understand, use, and solve.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                  Product Designer
                </div>

                <div className="flex items-center gap-2">
                  <Layers3 className="h-4 w-4" strokeWidth={1.5} />
                  UX / UI
                </div>

                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4" strokeWidth={1.5} />
                  Design + Development
                </div>
              </div>
            </div>

            {/* Right — Image */}
            <div className="flex justify-start lg:justify-end">
              <div className="group relative w-full max-w-[360px] overflow-hidden rounded-2xl border border-black/[0.08] bg-neutral-100 dark:border-white/[0.08] dark:bg-neutral-900">
                <img
                  src="/about.jpeg"
                  alt="Portrait"
                  className="
            aspect-[4/5]
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.025]
          "
                />

                {/* subtle gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <section className="border-y border-black/[0.08] dark:border-white/[0.08]">
          <div className="grid md:grid-cols-[0.7fr_1.3fr]">
            <div className="border-b border-black/[0.08] px-6 py-10 dark:border-white/[0.08] md:border-b-0 md:border-r sm:px-10 lg:px-16 lg:py-14">
              <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
                I design. I build. I solve.
              </p>
            </div>

            <div className="px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
              <div className="max-w-2xl space-y-6 text-[17px] leading-8 text-neutral-500 dark:text-neutral-400">
                <p>
                  I&apos;m a product designer with a developer background,
                  working across digital products, enterprise experiences, and
                  visual design.
                </p>

                <p>
                  I&apos;ve worked across 5+ client projects, designing SaaS
                  products, enterprise dashboards, mobile experiences, websites,
                  and visual communication.
                </p>

                <p>
                  I enjoy taking something complicated, breaking it down,
                  finding what matters, and turning it into a clear experience.
                </p>

                <p className="text-neutral-950 dark:text-white">
                  I don&apos;t just ask how a screen should look. I ask what
                  problem we&apos;re actually trying to solve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT I WORK ON
        ====================================================== */}

        <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
              What I work on
            </p>

            <h2 className="mt-5 font-serif text-5xl tracking-[-0.05em] sm:text-6xl">
              From problems to products.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-500 dark:text-neutral-400">
              I work across product, UX/UI, visual design, and problem solving
              depending on what the product needs.
            </p>
          </div>

          <div className="grid gap-x-10 md:grid-cols-2">
            {designAreas.map((area) => (
              <DesignAreaCard
                key={area.number}
                number={area.number}
                title={area.title}
                icon={area.icon}
                description={area.description}
                skills={area.skills}
              />
            ))}
          </div>
        </section>

        {/* =====================================================
            DESIGN + DEVELOPMENT
        ====================================================== */}

        <section className="border-y border-black/[0.08] dark:border-white/[0.08]">
          <div className="grid md:grid-cols-[0.7fr_1.3fr]">
            <div className="border-b border-black/[0.08] px-6 py-12 dark:border-white/[0.08] md:border-b-0 md:border-r sm:px-10 lg:px-16 lg:py-16">
              <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
                Design + development
              </p>

              <h2 className="mt-5 max-w-sm font-serif text-4xl tracking-[-0.045em] sm:text-5xl">
                I design things I understand how to build.
              </h2>
            </div>

            <div className="px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
              <div className="flex items-start gap-4">
                <Code2
                  className="mt-1 h-5 w-5 shrink-0 text-neutral-400"
                  strokeWidth={1.5}
                />

                <div className="max-w-2xl">
                  <p className="text-lg leading-8 text-neutral-500 dark:text-neutral-400">
                    Before focusing on product design, I worked as a developer.
                    That experience changed the way I approach design.
                  </p>

                  <p className="mt-5 text-lg leading-8 text-neutral-500 dark:text-neutral-400">
                    I understand components, responsive behavior, APIs,
                    technical constraints, and how a design moves from Figma to
                    code and eventually into production.
                  </p>

                  <p className="mt-5 text-lg leading-8 text-neutral-950 dark:text-white">
                    It also means I can communicate with developers easily and
                    design with implementation in mind.
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-2">
                {developmentSkills.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            AI
        ====================================================== */}

        <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-neutral-400">
                <BrainCircuit className="h-4 w-4" strokeWidth={1.5} />
                AI workflow
              </div>

              <h2 className="mt-6 font-serif text-5xl leading-[1] tracking-[-0.05em] sm:text-6xl">
                Designing with AI,
                <br />
                not around it.
              </h2>
            </div>

            <div>
              <p className="mb-8 max-w-2xl text-lg leading-8 text-neutral-500 dark:text-neutral-400">
                AI has become part of how I explore, prototype, research, and
                build. I&apos;m interested in using these tools to move faster
                without losing the thinking behind the design.
              </p>

              <AiGroup
                title="Explore"
                description="Research & ideas"
                skills={aiSkills.explore}
              />

              <AiGroup
                title="Prototype"
                description="Test & build"
                skills={aiSkills.prototype}
              />

              <AiGroup
                title="Create"
                description="Design & motion"
                skills={aiSkills.create}
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            EDUCATION
        ====================================================== */}

        <section className="border-y border-black/[0.08] dark:border-white/[0.08]">
          <div className="grid md:grid-cols-[0.7fr_1.3fr]">
            <div className="border-b border-black/[0.08] px-6 py-10 dark:border-white/[0.08] md:border-b-0 md:border-r sm:px-10 lg:px-16 lg:py-14">
              <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
                Education
              </p>
            </div>

            <div className="grid sm:grid-cols-2">
              <div className="border-b border-black/[0.08] px-6 py-10 dark:border-white/[0.08] sm:border-b-0 sm:border-r sm:px-10 lg:px-16 lg:py-14">
                <p className="text-xs text-neutral-400">2020 — 2023</p>

                <h3 className="mt-4 font-serif text-3xl tracking-[-0.03em]">
                  B.Tech
                </h3>
              </div>

              <div className="px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
                <p className="text-xs text-neutral-400">2018 — 2020</p>

                <h3 className="mt-4 font-serif text-3xl tracking-[-0.03em]">
                  Diploma
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CLOSING
        ====================================================== */}

        <section className="px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
              What&apos;s next
            </p>

            <h2 className="mt-7 font-serif text-5xl leading-[0.95] tracking-[-0.055em] sm:text-7xl">
              Curious about
              <br />
              problems worth solving.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500 dark:text-neutral-400 sm:text-xl">
              I&apos;m always learning, experimenting with new tools, and
              building things that help me understand how products work.
            </p>

            <a
              href="mailto:supriyam224@gmail.com"
              className="group mt-10 inline-flex items-center gap-3 border-b border-neutral-950 pb-2 text-sm transition-colors hover:text-neutral-500 dark:border-white dark:hover:text-neutral-400">
              Let&apos;s talk
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </section>

        {/* Social Links */}
        <section className="border-y border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-6 px-6 py-7 sm:px-10 lg:px-16">
            <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
              Find me online
            </p>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              {/* Dribbble */}
              <a
                href="https://dribbble.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white">
                <span>Dribbble</span>

                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white">
                <span>LinkedIn</span>

                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </a>

              {/* Behance */}
              <a
                href="https://www.behance.net/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white">
                <span>Behance</span>

                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white">
                <span>GitHub</span>

                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
