import Hero from "../components/Hero";
import WorkPage from "./Work.Project";

const experiences = [
 {
  company: "Advitiix Technovate Pvt. Ltd.",
  role: "UX/UI & Product Designer",
  title: "Client dashboards & digital products",
  description:
    "Working as a solo designer across multiple client projects, designing dashboards and web applications from early concepts to final implementation. I handle UX flows, UI design, design systems, and collaborate directly with clients and developers to turn complex requirements into clear, usable products.",
  period: "Oct 2025 — Present",
},

  {
    company: "Central Data Storage",
    role: "UX/UI & Graphic Designer",
    title: "Web, brand & digital experiences",
    description:
      "Designed responsive websites and landing pages, built visual identities and marketing assets, and improved user journeys and visual consistency across digital experiences.",
    period: "Apr 2025 — Sep 2025"
  },

  {
    company: "Touch Cloud Computing Technologies",
    role: "Full Stack Developer Intern",
    title: "Full-stack web applications",
    description:
      "Developed full-stack applications using React, Next.js and TypeScript, working with MongoDB, APIs and AWS S3. This experience shaped a strong understanding of development workflows that now informs my design process.",
    period: "Sep 2024 — Mar 2025"
  }
];
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-neutral-950 transition-colors duration-300 dark:bg-[#111111] dark:text-neutral-100">
      {/* Hero */}
      <Hero />

{/* experience */}
      <div className="mx-auto w-full max-w-[820px] px-6 sm:px-8">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="group grid grid-cols-1 gap-3 border-t border-neutral-300 py-9 transition-colors duration-300  dark:border-white/[0.12]  sm:grid-cols-[1fr_2.2fr_0.8fr] sm:gap-10">
            {/* Company */}
            <div>
              <h3 className="max-w-[240px] text-[18px] font-medium leading-6 tracking-[-0.02em] text-neutral-950 dark:text-neutral-100">
                {experience.company}
              </h3>

              <p className="mt-2 text-[16px] leading-6 font-serif italic text-neutral-500 dark:text-neutral-400">
                {experience.role}
              </p>
            </div>

            {/* Work */}
            <div >
              <h3 className="text-[18px] font-medium leading-7 tracking-[-0.025em] text-neutral-950 dark:text-neutral-100">
                {experience.title}
              </h3>

              <p className="mt-2 max-w-[880px] text-[14px] leading-7 text-neutral-500 dark:text-neutral-400">
                {experience.description}
              </p>
            </div>

            {/* Period */}
            <div className="flex items-end justify-between sm:flex-col sm:items-end sm:justify-between">
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400">
                {experience.period}
              </span>

            </div>
          </article>
        ))}
      </div>

      <WorkPage />

      {/* Side Projects */}
      <section
        id="side-projects"
        className="mx-auto w-full max-w-[820px] px-6 pb-32 sm:px-8">
        <div className="mb-10 font-mono text-[13px] font-medium uppercase tracking-[0.18em] text-neutral-400">
          Side projects
        </div>

          <p className="max-w-2xl text-[19px] leading-8 text-neutral-500">
            Outside of client work, I like building small tools, experimenting
            with ideas, and occasionally making things just because they seem
            interesting.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-[17px]">
            <a
              href="https://www.behance.net/supriyamaurya5"
              className="border-b border-neutral-300 transition-colors hover:border-orange-300">
              Behance →
            </a>

            <a
              href="https://dribbble.com/Supriya_224"
              className="border-b border-neutral-300 transition-colors hover:border-orange-300">
              Dribble →
            </a>

            <a
              href="https://github.com/supriya224"
              className="border-b border-neutral-300 transition-colors hover:border-orange-300">
              GitHub →
            </a>
          </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-[820px] flex-col gap-4 px-6 py-8 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()}supriya maurya</span>

          <a
            href="mailto:supriyam224@gmail.com"
            className="transition-colors hover:text-neutral-950">
          supriyam224@gmail.com
          </a>
        </div>
      </footer>

      <div />
    </div>
  );
}
