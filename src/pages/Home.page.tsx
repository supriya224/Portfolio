import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const selectedWork = [
  {
    number: "01",
    title: "Fire & Smoke Detection",
    category: "Enterprise · Dashboard",
    description:
      "Designed an industrial monitoring experience around location, severity and actionable incident context."
  },
  {
    number: "02",
    title: "AI Fintech",
    category: "Product · Mobile",
    description:
      "Exploring how AI can help people understand spending, manage savings and make better financial decisions."
  },
  {
    number: "03",
    title: "Food Safety Dashboard",
    category: "Enterprise · Dashboard",
    description:
      "Simplified complex food-safety operations into a clearer monitoring and decision-making experience."
  },
  {
    number: "04",
    title: "EduHire",
    category: "Product · Case Study",
    description:
      "Designed a more intuitive hiring experience focused on connecting candidates, recruiters and opportunities."
  }
];

const experiences = [
  {
    company: "Advitiix Technovate",
    role: "UX/UI & Product Designer",
    period: "Oct 2025 — Present",
    Description:" Working as a solo designer across multiple client projects, designing dashboards and web applications from early concepts to final implementation. I handle UX flows, UI design, design systems, and collaborate directly with clients and developers to turn complex requirements into clear, usable products."

  },
  {
    company: "Central Data Storage",
    role: "UX/UI & Graphic Designer",
    period: "Apr 2025 — Sep 2025",
    Description:
      "Designed responsive websites and landing pages, built visual identities and marketing assets, and improved user journeys and visual consistency across digital experiences."
  },
  {
    company: "Touch Cloud Computing Technologies",
    role: "Full Stack Developer",
    period: "Sep 2024 — Mar 2025",
    Description:
      "Developed full-stack applications using React, Next.js and TypeScript, working with MongoDB, APIs and AWS S3. This experience shaped a strong understanding of development workflows that now informs my design process."
  }
];

function WorkPreview({
  number,
  title,
  category,
  description
}: {
  number: string;
  title: string;
  category: string;
  description: string;
}) {
  return (
    <Link
      to="/selected-work"
      className="group block border-t border-black/[0.09] py-7 transition-colors dark:border-white/[0.09]">
      <div className="grid grid-cols-[48px_1fr_auto] gap-5 sm:grid-cols-[70px_1fr_auto] sm:gap-8">
        <span className="pt-1 text-xs text-neutral-400">{number}</span>

        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">
            {category}
          </p>

          <h3 className="mt-3 font-serif text-2xl tracking-[-0.025em] sm:text-3xl">
            {title}
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500 dark:text-neutral-400">
            {description}
          </p>
        </div>

        <ArrowUpRight
          size={20}
          strokeWidth={1.4}
          className="mt-1 text-neutral-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-950 dark:group-hover:text-white"
        />
      </div>
    </Link>
  );
}

function ExperienceRow({
  company,
  role,
  period,
   Description
}: {
  company: string;
  role: string;
  period: string;
  Description: string;
}) {
  return (
    <div className="grid gap-3 border-t border-black/[0.09] py-6 dark:border-white/[0.09] sm:grid-cols-[220px_1fr_auto] sm:items-center sm:gap-8">
      <div>
        <p className="text-sm font-medium">{company}</p>

        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          {role}
        </p>
      </div>

      <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400">
      {Description}
      </p>

      <p className="text-sm text-neutral-400 sm:text-right">{period}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-neutral-950 transition-colors duration-300 dark:bg-[#111111] dark:text-white">
      {/* Page rails */}
      <div className="mx-auto min-h-screen w-full max-w-[1200px] border-x border-black/[0.08] dark:border-white/[0.08]">
        {/* HERO */}
        <section className="px-6 pb-28 pt-24 sm:px-10 sm:pb-36 sm:pt-24 lg:px-16">
          <div className="flex max-w-4xl items-start gap-3">
            <span className="mt-3 h-2 w-2 rounded-full bg-neutral-950 dark:bg-white" />

            <p className="text-sm uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
              Product Designer · UX/UI
            </p>
          </div>

          <h1 className="mt-10 max-w-5xl font-serif text-6xl leading-[0.9] tracking-[-0.055em] sm:text-8xl lg:text-[110px]">
            I design digital
            <br />
            products that
            <br />
            make sense.
          </h1>

          <div className="mt-12 grid gap-10 sm:grid-cols-[1fr_280px] sm:items-end">
            <p className="max-w-2xl text-xl leading-8 text-neutral-500 dark:text-neutral-400 sm:text-2xl">
              I&apos;m a product designer focused on turning complex problems
              into clear, useful and thoughtful experiences.
            </p>

            <div className="flex items-center gap-3 text-sm text-neutral-400">
              <ArrowDownRight size={20} strokeWidth={1.3} />

              <span>Scroll to explore</span>
            </div>
          </div>
        </section>

        {/* INTRO STRIP */}
        <section className="border-y border-black/[0.08] dark:border-white/[0.08]">
          <div className="grid sm:grid-cols-3">
            <div className="border-b border-black/[0.08] p-6 dark:border-white/[0.08] sm:border-b-0 sm:border-r sm:p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">
                Based in
              </p>

              <p className="mt-4 text-lg">Bangalore · India</p>
            </div>

            <div className="border-b border-black/[0.08] p-6 dark:border-white/[0.08] sm:border-b-0 sm:border-r sm:p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">
                Focus
              </p>

              <p className="mt-4 text-lg">Product · UX/UI · Problem Solver </p>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">
                Currently
              </p>

              <p className="mt-4 text-lg">Product designer at Advitiix</p>
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section id="work" className="px-6 py-28 sm:px-10 sm:py-36 lg:px-16">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
                Selected work
              </p>

              <h2 className="mt-5 font-serif text-5xl tracking-[-0.04em] sm:text-6xl">
                A few things
                <br />
                I&apos;ve worked on.
              </h2>
            </div>

            <Link
              to="/selected-work"
              className="hidden items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-950 dark:hover:text-white sm:flex">
              View all
              <ArrowUpRight size={17} strokeWidth={1.4} />
            </Link>
          </div>

          <div className="mt-16">
            {selectedWork.map((project) => (
              <WorkPreview
                key={project.number}
                number={project.number}
                title={project.title}
                category={project.category}
                description={project.description}
              />
            ))}
          </div>

          <Link
            to="/selected-work"
            className="mt-8 flex w-fit items-center gap-2 text-sm text-neutral-500 sm:hidden">
            View selected work
            <ArrowUpRight size={17} strokeWidth={1.4} />
          </Link>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="border-t border-black/[0.08] px-6 py-28 dark:border-white/[0.08] sm:px-10 sm:py-36 lg:px-16">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
                Experience
              </p>

              <h2 className="mt-5 font-serif text-5xl tracking-[-0.04em] sm:text-6xl">
                Where I&apos;ve
                <br />
                been learning.
              </h2>
            </div>

            <Link
              to="/work"
              className="flex w-fit items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-950 dark:hover:text-white">
              Full work
              <ArrowUpRight size={17} strokeWidth={1.4} />
            </Link>
          </div>

          <div className="mt-16">
            {experiences.map((experience) => (
              <ExperienceRow
                key={`${experience.company}-${experience.period}`}
                company={experience.company}
                role={experience.role}
                Description={experience.Description}
                period={experience.period}
              />
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="border-t border-black/[0.08] dark:border-white/[0.08]">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-black/[0.08] p-6 dark:border-white/[0.08] lg:border-b-0 lg:border-r lg:p-16">
              <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
                About
              </p>

              <h2 className="mt-8 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">
                Curious about
                <br />
                how things work.
              </h2>
            </div>

            <div className="p-6 sm:p-10 lg:p-16">
              <p className="text-lg leading-8 text-neutral-500 dark:text-neutral-400">
                I enjoy working at the intersection of design, technology and
                problem solving.
              </p>

              <p className="mt-7 text-lg leading-8 text-neutral-500 dark:text-neutral-400">
                My background in development helps me think beyond static
                screens and collaborate closely with engineers to create
                products that are practical to build and easy to use.
              </p>

              <p className="mt-7 text-lg leading-8 text-neutral-500 dark:text-neutral-400">
                I care about clarity, systems and the small details that make an
                experience feel effortless.
              </p>

              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-2 text-sm text-neutral-950 dark:text-white">
                More about me
                <ArrowUpRight size={17} strokeWidth={1.4} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="border-t border-black/[0.08] px-6 py-28 dark:border-white/[0.08] sm:px-10 sm:py-36 lg:px-16">
          <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
            Have a project in mind?
          </p>

          <h2 className="mt-7 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl">
            Let&apos;s make
            <br />
            something useful.
          </h2>

          <a
            href="mailto:supriyam224@gmail.com"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm text-white transition-transform duration-300 hover:-translate-y-1 dark:bg-white dark:text-neutral-950">
            Get in touch
            <ArrowUpRight
              size={17}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </section>

        {/* Footer line */}
        <footer className="border-t border-black/[0.08] px-6 py-8 dark:border-white/[0.08] sm:px-10 lg:px-16">
          <div className="flex flex-col justify-between gap-3 text-xs text-neutral-400 sm:flex-row">
            <span>© {new Date().getFullYear()} · Product Designer</span>

            <span>Designed & built with curiosity.</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
