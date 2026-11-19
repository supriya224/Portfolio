import {
  ArrowDownRight,
  ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";

const resumeUrl =
  "https://drive.google.com/file/d/1NUZyCR1y4WqBA25RMbUZXfOT6MMC8GjE/view?usp=sharing";

const PROF_WORK = "PROFESSIONAL WORK" as const;
const INDEP_PROJECT = "INDEPENDENT PROJECT" as const;
const BANGALORE_LOCATION = "Bangalore, India";
const ADVITIIX_ROLE = "UX/UI & Product Designer at Advitiix Technovate";

const getSectionTag = (num: string) => `// ${num}`;

interface FlagshipProject {
  id: string;
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

const FLAGSHIP_PROJECTS: FlagshipProject[] = [
  {
    id: "volvo",
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
    id: "fire",
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
    id: "car-3d",
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
    id: "eduhire",
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
    id: "audire",
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

const CAPABILITIES = [
  {
    num: "01",
    title: "Enterprise SaaS & B2B Dashboards",
    description:
      "I build clear dashboards for complex industries. From deep data tables and filters to multi-role permissions, I turn dense spreadsheets into clean screens that teams actually enjoy using.",
    skills: [
      "Dense Data Tables & Filtering",
      "Multi-Role Permission Systems",
      "Executive KPI Scorecards",
      "Audit Trail & Compliance"
    ]
  },
  {
    num: "02",
    title: "AI Product & Systems UX",
    description:
      "AI is only as good as how easily humans can trust and control it. I design practical interfaces that show confidence scores, handle false alarms, and keep users in control of final decisions.",
    skills: [
      "Confidence Scores & Visual Cues",
      "False-Alarm Triage Flows",
      "Fast Response & Status Loading",
      "Human-in-the-Loop Controls"
    ]
  },
  {
    num: "03",
    title: "Design Systems & Frontend Architecture",
    description:
      "Because I have a background in frontend development (React, TypeScript, Tailwind), I build Figma components with auto-layout and clear tokens so developers can build exactly what was designed without confusion.",
    skills: [
      "Figma Auto-Layout & Tokens",
      "Reusable React Components",
      "Responsive Layouts (Mobile & Web)",
      "Developer Handoff Specs"
    ]
  }
];

const CAREER_TIMELINE = [
  {
    period: "OCT 2025 — PRESENT",
    role: ADVITIIX_ROLE,
    company: "Advitiix Technovate",
    location: BANGALORE_LOCATION,
    description:
      "Working as the product designer on enterprise client projects. I lead the design for Volvo Partner Connect 2.0 modules (PDP, dealer investment, scorecards), real-time fire detection floor maps, and internal management tools. I build Figma design systems with auto-layout and collaborate closely with developers.",
    highlights: [
      "Sole designer for Volvo Partner Connect 2.0 dealer dashboards and scorecards",
      "Researched and designed spatial 2D floor plans for the Fire Detection live app",
      "Created reusable Figma component libraries and handled direct developer handoffs"
    ]
  },
  {
    period: "APR 2025 — SEP 2025",
    role: "UX/UI & Graphic Designer",
    company: "Central Data Storage",
    location: BANGALORE_LOCATION,
    description:
      "Designed clean web and mobile screens for cloud data storage products. Focused on simplifying how users organize files, view storage quotas, and navigate complex backup settings.",
    highlights: [
      "Redesigned storage management user flows and file hierarchy",
      "Created design system guidelines and marketing design assets",
      "Collaborated with engineering to ensure pixel-perfect responsive delivery"
    ]
  },
  {
    period: "SEP 2024 — MAR 2025",
    role: "Full Stack Developer",
    company: "Touch Cloud Computing Technologies",
    location: BANGALORE_LOCATION,
    description:
      "Worked as a frontend and full-stack developer building web apps with React, Next.js, TypeScript, MongoDB, and AWS. This development experience gives me a solid understanding of how code works, making handoffs smooth and realistic.",
    highlights: [
      "Built production React components and RESTful API integrations",
      "Handled cloud storage workflows with AWS S3 and database models in MongoDB",
      "Gained firsthand knowledge of component state, constraints, and edge cases"
    ]
  }
];

export default function HomePage() {
  return (
    <main
      id="portfolio-main"
      className="min-h-screen bg-[#f7f5f2] text-neutral-950 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-[#f2f2f2] font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black pb-24">
      <div className="mx-auto w-full max-w-[1240px] border-x border-black/[0.08] dark:border-white/[0.08]">
        {/* ========================================================
            1. HERO SECTION (5-10 SECOND RECRUITER CLARITY)
            ======================================================== */}
        <section
          id="hero"
          className="relative px-6 pt-10 pb-12 sm:px-12 sm:pt-14 sm:pb-14 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          {/* Top Status Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span>SUPRIYA MAURYA · PRODUCT DESIGNER</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>BANGALORE, INDIA · OPEN TO PRODUCT DESIGN ROLES</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mt-8 max-w-4xl">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[76px] font-normal tracking-tight text-neutral-950 dark:text-white leading-[1.02]">
              I design complex products into clear, simple experiences.
            </h1>

            <p className="mt-4 max-w-3xl text-base sm:text-xl font-normal text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
              Hi, I&apos;m Supriya — a Product Designer based in Bangalore with a background in frontend development. I work on enterprise SaaS dashboards, B2B platforms, and AI applications.
            </p>

            <p className="mt-2.5 max-w-3xl text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
              I collaborate directly with product managers and engineers to understand real user pain points, build modular Figma design systems, and deliver clean, production-ready interfaces.
            </p>
          </div>

          {/* Core Hiring Metadata Strip */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 border-y border-black/[0.08] dark:border-white/[0.08] py-4 font-mono text-xs">
            <div>
              <span className="text-neutral-400 uppercase tracking-widest block mb-1">Current Role</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">
                {ADVITIIX_ROLE}
              </span>
            </div>
            <div>
              <span className="text-neutral-400 uppercase tracking-widest block mb-1">Specialization</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">
                Enterprise SaaS · AI Products · B2B Platforms
              </span>
            </div>
            <div>
              <span className="text-neutral-400 uppercase tracking-widest block mb-1">Technical Stack</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">
                React.js · Next.js · TypeScript · Tailwind · AWS S3
              </span>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-5 py-3 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 shadow-sm">
              <span>View Selected Work</span>
              <ArrowDownRight size={14} />
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-black/15 bg-transparent px-5 py-3 font-mono text-xs uppercase tracking-wider text-neutral-800 dark:text-neutral-200 transition-colors hover:border-black dark:hover:border-white">
              <span>Download Resume</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href="mailto:supriyam224@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] px-5 py-3 font-mono text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
              <span>Get in Touch</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </section>

        {/* ========================================================
            2. SELECTED WORK (5 FLAGSHIP CASE STUDIES)
            ======================================================== */}
        <section
          id="work"
          className="px-6 py-12 sm:px-12 sm:py-16 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                <span>{getSectionTag("01")}</span>
                <span className="h-px w-6 bg-neutral-300 dark:bg-neutral-700" />
                <span>FLAGSHIP PROJECTS</span>
              </div>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
                Selected Work.
              </h2>
            </div>

            <Link
              to="/selected-work"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 transition-colors hover:text-black dark:hover:text-white">
              <span>EXPLORE ALL 5 CASE STUDIES</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <p className="mt-3 max-w-2xl text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Real enterprise and product design work covering dealer analytics dashboards, industrial safety floor maps, 3D interactive experiences, and AI tools.
          </p>

          {/* Project List */}
          <div className="mt-8 divide-y divide-black/[0.08] dark:divide-white/[0.08] border-t border-black/[0.08] dark:border-white/[0.08]">
            {FLAGSHIP_PROJECTS.map((project) => (
              <article
                key={project.id}
                className="py-8 sm:py-10 group">
                <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                  {/* Left UI Image Preview */}
                  <div className="lg:col-span-6">
                    <Link
                      to={project.link}
                      className="block overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] transition-all duration-300 group-hover:border-black/25 dark:group-hover:border-white/25 group-hover:shadow-lg">
                      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 flex items-center justify-center p-3">
                        <img
                          src={project.image}
                          alt={`${project.title} Interface Preview`}
                          loading="lazy"
                          className="h-full w-full object-contain rounded transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        />
                        <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-950 opacity-0 shadow-md backdrop-blur transition-all duration-300 group-hover:opacity-100 dark:bg-black/85 dark:text-white">
                          <ArrowUpRight size={15} strokeWidth={2} />
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Right Metadata & Content */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
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

                      <p className="mt-1.5 font-mono text-[11px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                        {project.category}
                      </p>

                      <h3 className="mt-1.5 font-serif text-2xl sm:text-3xl font-normal tracking-tight text-neutral-950 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                        <Link to={project.link}>{project.title}</Link>
                      </h3>

                      <p className="mt-1 font-mono text-xs text-neutral-700 dark:text-neutral-300">
                        <strong>Role:</strong> {project.role}
                      </p>

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

                    <div className="pt-2">
                      <Link
                        to={project.link}
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-950 dark:text-white font-medium hover:underline">
                        <span>View Case Study</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
              <span>View additional projects in the Work Archive</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>

        {/* ========================================================
            3. CAPABILITIES & SYSTEMIC CRAFT
            ======================================================== */}
        <section className="px-6 py-12 sm:px-12 sm:py-16 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
            <span>{getSectionTag("02")}</span>
            <span className="h-px w-6 bg-neutral-300 dark:bg-neutral-700" />
            <span>HOW I WORK &amp; SKILLS</span>
          </div>

          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Practical skills, built from real projects.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.num}
                className="relative rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
                    <span>DISCIPLINE</span>
                    <span className="font-bold">{cap.num}</span>
                  </div>

                  <h3 className="mt-4 font-serif text-xl sm:text-2xl font-normal tracking-tight text-neutral-950 dark:text-white">
                    {cap.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {cap.description}
                  </p>
                </div>

                <ul className="mt-5 pt-5 border-t border-black/[0.06] dark:border-white/[0.06] space-y-2 font-mono text-xs text-neutral-700 dark:text-neutral-300">
                  {cap.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-neutral-400" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            4. CAREER TIMELINE (VERIFIED & AUTHENTIC)
            ======================================================== */}
        <section
          id="experience"
          className="px-6 py-12 sm:px-12 sm:py-16 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                <span>{getSectionTag("03")}</span>
                <span className="h-px w-6 bg-neutral-300 dark:bg-neutral-700" />
                <span>EXPERIENCE</span>
              </div>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
                Where I&apos;ve worked.
              </h2>
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 transition-colors hover:text-black dark:hover:text-white">
              <span>READ DETAILED BACKGROUND</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="mt-8 space-y-6">
            {CAREER_TIMELINE.map((exp) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="relative grid gap-4 border-l-2 border-neutral-300 dark:border-neutral-700 pl-5 sm:grid-cols-12 sm:pl-7 sm:gap-6">
                {/* Timeline node */}
                <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" />

                <div className="sm:col-span-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                    {exp.period}
                  </span>
                  <h3 className="mt-1 font-serif text-xl sm:text-2xl font-normal text-neutral-950 dark:text-white">
                    {exp.company}
                  </h3>
                  <p className="font-mono text-xs text-neutral-800 dark:text-neutral-200 mt-0.5 font-medium">
                    {exp.role}
                  </p>
                  <p className="font-mono text-[11px] text-neutral-500 mt-0.5">{exp.location}</p>
                </div>

                <div className="sm:col-span-8">
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {exp.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300 font-mono">
                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 shrink-0 mt-1" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            5. CONTACT & COLLABORATION
            ======================================================== */}
        <section
          id="contact"
          className="relative px-6 py-12 sm:px-12 sm:py-16 lg:px-16 overflow-hidden">
          <div className="relative max-w-4xl">
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-rose-500 dark:text-rose-400 flex items-center gap-2">
              <span>{getSectionTag("04")}</span>
              <span className="h-px w-6 bg-rose-500/40" />
              <span>CONTACT &amp; COLLABORATION</span>
            </div>

            <h2 className="mt-5 font-sans font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-neutral-950 dark:text-white leading-[0.94] uppercase">
              Let&apos;s Architect<br />
              <span
                className="text-transparent [-webkit-text-stroke:1.5px_#171717] dark:[-webkit-text-stroke:1.5px_#ffffff]">
                Something
              </span><br />
              Extraordinary<span className="text-rose-500">.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
              Have a challenging product problem, an ambitious 0-to-1 idea, or an engineering-driven design challenge? Let&apos;s build something meaningful together.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:supriyam224@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-rose-600 dark:bg-rose-500 px-6 py-3 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-rose-700 dark:hover:bg-rose-600 shadow-md">
                <span>Start a Conversation</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-black/15 dark:border-white/15 bg-transparent px-6 py-3 font-mono text-xs uppercase tracking-wider text-neutral-800 dark:text-neutral-200 transition-colors hover:border-black dark:hover:border-white">
                <span>View Resume</span>
                <ArrowDownRight size={14} />
              </a>
            </div>

            {/* Availability Badge */}
            <div className="mt-8 pt-5 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center gap-2.5 font-mono text-xs text-neutral-500 dark:text-neutral-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Location: Bangalore, India · Available for On-Site, Hybrid &amp; Remote Roles</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
