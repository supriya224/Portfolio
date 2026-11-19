import {
  ArrowUpRight,
  BrainCircuit,
  Briefcase,
  CheckCircle2,
  Code2,
  Layers3,
  Lightbulb,
  MapPin,
  Palette
} from "lucide-react";

const BANGALORE_INDIA = "Bangalore, India";
const getSectionTag = (label: string) => `// ${label}`;

const designAreas = [
  {
    number: "01",
    title: "Enterprise SaaS & B2B Dashboards",
    icon: Layers3,
    description:
      "Turning messy spreadsheets and complicated business requirements into clean dashboards, clear data tables, and multi-role permission flows.",
    skills: ["Data Tables & Filters", "Role Permissions", "Audit Workflows", "KPI Metrics"]
  },
  {
    number: "02",
    title: "AI Product & Systems UX",
    icon: BrainCircuit,
    description:
      "Designing trustworthy interfaces for AI tools: showing confidence ratings, minimizing false alarm fatigue, and keeping human users in control.",
    skills: ["Confidence Cues", "False-Alarm Triage", "Human Controls", "Status Feeds"]
  },
  {
    number: "03",
    title: "Design Systems & Component Libraries",
    icon: Palette,
    description:
      "Building modular Figma component libraries with auto-layout and clear variables that map 1:1 to React and Tailwind tokens.",
    skills: ["Figma Auto-Layout", "Design Tokens", "Accessibility (WCAG)", "Reusable Components"]
  },
  {
    number: "04",
    title: "User Research & Product Strategy",
    icon: Lightbulb,
    description:
      "Sitting directly with product managers and stakeholders to map user journeys, test wireframes, and validate real-world usability.",
    skills: [
      "User Workflows",
      "Information Architecture",
      "Figma Wireframing",
      "Developer Handoff"
    ]
  }
];

const technicalSkills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5 & CSS3",
  "Tailwind CSS",
  "MongoDB",
  "AWS S3",
  "Figma & FigJam",
  "REST APIs",
  "Git & GitHub"
];

const careerTimeline = [
  {
    period: "OCT 2025 — PRESENT",
    role: "UX/UI & Product Designer",
    company: "Advitiix Technovate",
    location: BANGALORE_INDIA,
    description:
      "Sole product designer leading the UI/UX for enterprise client applications. Designed connected dashboards for Volvo Partner Connect 2.0 (PDP, scorecards, dealer investments), spatial 2D floor maps for the Fire Detection live app, and internal platforms. Built reusable design libraries in Figma and handled developer handoffs.",
    highlights: [
      "Sole designer for Volvo Partner Connect 2.0 dealer analytics",
      "Researched and built 2D spatial floor maps for live fire detection",
      "Maintained Figma component libraries with auto-layout and direct token mapping"
    ]
  },
  {
    period: "APR 2025 — SEP 2025",
    role: "UX/UI & Graphic Designer",
    company: "Central Data Storage",
    location: BANGALORE_INDIA,
    description:
      "Designed clean interfaces for cloud storage and backup software. Simplified file organization, storage quota views, and user settings across desktop and mobile screens.",
    highlights: [
      "Redesigned storage management flows and folder structures",
      "Created design system guidelines and marketing assets",
      "Worked with frontend engineers to ensure accurate layout delivery"
    ]
  },
  {
    period: "SEP 2024 — MAR 2025",
    role: "Full Stack Developer",
    company: "Touch Cloud Computing Technologies",
    location: BANGALORE_INDIA,
    description:
      "Worked as a frontend and full-stack developer using React, Next.js, TypeScript, MongoDB, and AWS S3. This engineering foundation helps me design realistic components that don't break during implementation.",
    highlights: [
      "Built production React components and API integrations",
      "Managed AWS S3 asset uploads and MongoDB data structures",
      "Learned firsthand how frontend constraints and states work in real production"
    ]
  }
];

function SkillPill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-black/[0.08] dark:border-white/[0.1] px-3.5 py-1.5 text-xs text-neutral-600 dark:text-neutral-300 font-mono">
      {children}
    </span>
  );
}

export default function AboutPage() {
  const resumeUrl =
    "https://drive.google.com/file/d/1NUZyCR1y4WqBA25RMbUZXfOT6MMC8GjE/view?usp=sharing";

  return (
    <main className="min-h-screen bg-[#f7f5f2] text-neutral-950 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-[#f2f2f2] font-sans pb-24">
      <div className="mx-auto min-h-screen w-full max-w-[1240px] border-x border-black/[0.08] dark:border-white/[0.08]">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="px-6 pb-12 pt-12 sm:px-12 sm:pt-16 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            {/* Left Content */}
            <div className="max-w-3xl">
              <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <span>ABOUT &amp; BACKGROUND</span>
              </div>

              <h1 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-950 dark:text-white leading-[1.05]">
                I design complex products into clear, intuitive experiences.
              </h1>

              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                Hi, I&apos;m Supriya Maurya — a Product Designer based in Bangalore with a background in frontend development. I specialize in enterprise SaaS dashboards, AI products, and B2B platforms.
              </p>

              <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                Having worked as a developer before transitioning into product design, I bridge user empathy with practical technical understanding. I understand how components are built in React and Tailwind, ensuring that Figma designs hand off cleanly to engineering without endless rework.
              </p>

              {/* Meta pills */}
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-neutral-400" strokeWidth={1.5} />
                  <span>{BANGALORE_INDIA}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5 text-neutral-400" strokeWidth={1.5} />
                  <span>Product Designer at Advitiix</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Code2 className="h-3.5 w-3.5 text-neutral-400" strokeWidth={1.5} />
                  <span>React · Next.js · TypeScript</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:supriyam224@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-5 py-3 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200">
                  <span>Start a Conversation</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-black/15 bg-transparent px-5 py-3 font-mono text-xs uppercase tracking-wider text-neutral-700 transition-colors hover:border-black hover:text-black dark:border-white/15 dark:text-neutral-300 dark:hover:border-white dark:hover:text-white">
                  <span>Download Resume</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-start lg:justify-end">
              <div className="group relative w-full max-w-[320px] overflow-hidden rounded-2xl border border-black/[0.08] bg-neutral-100 dark:border-white/[0.08] dark:bg-neutral-900 shadow-lg">
                <img
                  src="/about.jpeg"
                  alt="Supriya Maurya - Product Designer"
                  className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div className="font-mono text-xs text-white">
                    <span className="font-semibold block">Supriya Maurya</span>
                    <span className="text-white/80 text-[11px]">{BANGALORE_INDIA}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DESIGN AREAS & CRAFT
        ====================================================== */}
        <section className="px-6 py-12 sm:px-12 sm:py-16 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("SPECIALIZATIONS")}
          </div>

          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Core Design Competencies
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {designAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article
                  key={area.number}
                  className="group relative rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/[0.4] dark:bg-white/[0.02] p-8 transition-all duration-300 hover:border-black/20 dark:hover:border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-neutral-400">{area.number}</span>
                    <Icon className="h-5 w-5 text-neutral-400 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-normal tracking-tight text-neutral-950 dark:text-white">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {area.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-neutral-600 dark:text-neutral-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            TECHNICAL FOUNDATION & CODE
        ====================================================== */}
        <section className="px-6 py-12 sm:px-12 sm:py-16 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
                {getSectionTag("DESIGN + CODE HYBRID")}
              </div>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
                I design products I know how to build.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                Having worked as a frontend developer writing React and TypeScript before focusing on product design, I think in components, data states, and real-world edge cases.
              </p>
              <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                This means zero confusion when handing off to engineers: my Figma designs have clean auto-layout, realistic token names, and specs for error and loading states.
              </p>
            </div>

            <div className="lg:col-span-7 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/[0.4] dark:bg-white/[0.02] p-6 sm:p-7">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">
                ENGINEERING TOOLS &amp; SKILLS
              </span>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((tech) => (
                  <SkillPill key={tech}>{tech}</SkillPill>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-black/[0.06] dark:border-white/[0.06] space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    <strong>Component Parity:</strong> Figma components match React prop interfaces 1:1.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    <strong>Realistic States:</strong> Always designing for empty data, long text wraps, error states, and slow network loads.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    <strong>Accessibility:</strong> High color contrast (WCAG AA) and keyboard-navigable focus states.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CAREER TIMELINE
        ====================================================== */}
        <section className="px-6 py-12 sm:px-12 sm:py-16 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("EXPERIENCE")}
          </div>

          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Professional Experience
          </h2>

          <div className="mt-8 space-y-6">
            {careerTimeline.map((item) => (
              <div
                key={`${item.company}-${item.period}`}
                className="relative grid gap-6 border-l-2 border-neutral-300 dark:border-neutral-700 pl-6 sm:grid-cols-12 sm:pl-8 sm:gap-8">
                {/* Timeline dot */}
                <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" />

                <div className="sm:col-span-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                    {item.period}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-normal text-neutral-950 dark:text-white">
                    {item.company}
                  </h3>
                  <p className="font-mono text-xs text-neutral-800 dark:text-neutral-200 mt-1 font-medium">
                    {item.role}
                  </p>
                  <p className="font-mono text-[11px] text-neutral-400 mt-0.5">{item.location}</p>
                </div>

                <div className="sm:col-span-8">
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300 font-mono">
                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 shrink-0 mt-1.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            SOCIAL & CONTACT STRIP
        ====================================================== */}
        <section className="px-6 py-12 sm:px-12 lg:px-16 flex flex-wrap items-center justify-between gap-6 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
              Available for Product Design Roles
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <a
              href="mailto:supriyam224@gmail.com"
              className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors">
              Email ↗
            </a>
            <a
              href="https://www.behance.net/supriyamaurya5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors">
              Behance ↗
            </a>
            <a
              href="https://www.instagram.com/supri_241d/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors">
              Instagram ↗
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors">
              Resume ↗
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
