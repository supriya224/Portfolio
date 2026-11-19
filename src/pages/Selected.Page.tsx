import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const PROF_WORK = "PROFESSIONAL WORK" as const;
const INDEP_PROJECT = "INDEPENDENT PROJECT" as const;

interface FlagshipProject {
  number: string;
  title: string;
  category: string;
  classification: typeof PROF_WORK | typeof INDEP_PROJECT;
  role: string;
  problem: string;
  image: string;
  link: string;
  tags: string[];
}

const flagshipProjects: FlagshipProject[] = [
  {
    number: "01",
    title: "Volvo Partner Connect 2.0",
    category: "Enterprise SaaS / B2B Product Design",
    classification: PROF_WORK,
    role: "Lead UX/UI & Product Designer",
    problem:
      "Dealer managers were tracking key metrics across messy spreadsheets and disconnected tools. As the sole designer, I worked with stakeholders to map business requirements, built wireframes, and designed clean dashboards and charts for PDP, dealer investments, and branch performance.",
    image: "/volvo-partner.svg",
    link: "/volvo",
    tags: ["PDP Workflows", "Dealer Investment", "Scorecards", "DFHM Analytics"]
  },
  {
    number: "02",
    title: "Fire Detection Live App",
    category: "AI Product / Industrial UX",
    classification: PROF_WORK,
    role: "UX/UI & Product Designer",
    problem:
      "Plant safety operators were getting overwhelmed by endless alarm lists without knowing where the actual danger was. I researched their daily workflow and designed a 2D floor map so operators can instantly locate incidents, view camera feeds, and dispatch help in seconds.",
    image: "/fire-dashboard.png",
    link: "/fire",
    tags: ["Spatial Floor Plan", "Thermal Camera Feeds", "Confidence Scores", "Quick Dispatch"]
  },
  {
    number: "03",
    title: "3D Vehicle Configurator & Real-Time X-Ray Diagnostics",
    category: "Interactive 3D / Web Experience & Frontend",
    classification: PROF_WORK,
    role: "Product Designer & Frontend Developer",
    problem:
      "Heavy CAD files were freezing browsers during client presentations. I sat with the PM to understand the problem, designed the interface, and coded the WebGL frontend with an instant X-ray mode to inspect engines and cooling systems without lag.",
    image: "/car-3d.jpg",
    link: "/car-3d",
    tags: ["WebGL 3D Experience", "Dual-Mode Shaders", "Component Hotspots", "Frontend Code"]
  },
  {
    number: "04",
    title: "EduHire",
    category: "AI-Powered E-Learning / Mobile Product Design",
    classification: INDEP_PROJECT,
    role: "End-to-End Product Designer",
    problem:
      "Most hiring platforms just match resumes to job posts without checking practical skills. I designed an interactive mobile app where job seekers practice realistic interview scenarios with an AI guide and get step-by-step learning paths to fix their weak spots.",
    image: "/Edu.png",
    link: "/eduhire",
    tags: ["AI Chat Guidance", "Skill Assessments", "Mobile Design", "Learning Paths"]
  },
  {
    number: "05",
    title: "Audire",
    category: "AI Text-to-Speech / Mobile Product Design",
    classification: INDEP_PROJECT,
    role: "Lead Product Designer & UX Architect",
    problem:
      "Adjusting synthetic voice tone and pacing usually requires typing confusing code tags. I designed a mobile audio studio with simple timelines and sliders so creators can tweak pitch, speed, and emotion sentence by sentence.",
    image: "/Text.png",
    link: "/audire",
    tags: ["Prosody Timeline", "Waveform View", "Voice Personas", "Mobile Studio"]
  }
];

export default function SelectedWork() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-neutral-950 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-[#f2f2f2] font-sans pb-24">
      <div className="mx-auto max-w-[1240px] border-x border-black/[0.08] dark:border-white/[0.08]">
        {/* Header Section */}
        <section className="px-6 pb-10 pt-12 sm:px-12 sm:pt-16 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span>SELECTED WORK · 5 CORE CASE STUDIES</span>
          </div>

          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl font-normal text-neutral-950 dark:text-white">
            Work that solves
            <br />
            real problems.
          </h1>

          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            A curated collection of 5 flagship projects covering enterprise SaaS, live industrial floor maps, interactive 3D WebGL platforms, and mobile apps.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
              Focus: Enterprise SaaS &amp; AI
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
              Role: Product Designer (with Frontend Background)
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
              Location: Bangalore, India
            </span>
          </div>
        </section>

        {/* Flagship Projects List */}
        <section className="px-6 py-6 sm:px-12 lg:px-16 divide-y divide-black/[0.08] dark:divide-white/[0.08]">
          {flagshipProjects.map((project) => (
            <article
              key={project.number}
              className="py-8 sm:py-10 first:pt-2 last:pb-2 group">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                {/* Left UI Image Preview */}
                <div className="lg:col-span-7">
                  <Link
                    to={project.link}
                    className="block overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] transition-all duration-300 group-hover:border-black/25 dark:group-hover:border-white/25 group-hover:shadow-lg">
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 flex items-center justify-center p-3 sm:p-4">
                      <img
                        src={project.image}
                        alt={`${project.title} Interface Preview`}
                        loading="lazy"
                        className="h-full w-full object-contain rounded-lg transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />

                      {/* Hover Arrow Overlay */}
                      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-neutral-950 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:opacity-100 dark:bg-black/85 dark:text-white">
                        <ArrowUpRight size={16} strokeWidth={2} />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Right Metadata & Content */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-neutral-400 dark:text-neutral-500">
                          {project.number}
                        </span>
                        <span className="h-px w-3 bg-neutral-300 dark:bg-neutral-700" />
                        <span className="rounded border border-black/[0.08] dark:border-white/[0.1] bg-black/[0.02] dark:bg-white/[0.02] px-2 py-0.5 text-[10px] uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                          {project.classification}
                        </span>
                      </div>
                    </div>

                    <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                      {project.category}
                    </p>

                    {/* Title */}
                    <h2 className="mt-1.5 font-serif text-2xl sm:text-3xl font-normal tracking-tight text-neutral-950 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                      <Link to={project.link}>{project.title}</Link>
                    </h2>

                    {/* Role */}
                    <p className="mt-1 font-mono text-xs text-neutral-800 dark:text-neutral-200">
                      <strong>Role:</strong> {project.role}
                    </p>

                    {/* Problem Description */}
                    <p className="mt-2.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {project.problem}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-neutral-600 dark:text-neutral-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Case Study CTA Link */}
                  <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.06]">
                    <Link
                      to={project.link}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-950 dark:text-white font-medium hover:opacity-70 transition-opacity">
                      <span>Explore Case Study</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Footer Navigation Strip */}
        <section className="px-6 py-10 sm:px-12 sm:py-14 lg:px-16 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-950 dark:text-white">
              Looking for additional projects?
            </h3>
            <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400">
              Browse internal tools, management platforms, fintech concepts, and design systems in the Work Archive.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-6 py-3 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 shrink-0">
            <span>Explore Work Archive</span>
            <ArrowUpRight size={14} />
          </Link>
        </section>
      </div>
    </main>
  );
}
