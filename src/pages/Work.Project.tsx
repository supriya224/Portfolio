import { useState, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const CAT_ENTERPRISE = "Enterprise & Systems" as const;
const CAT_AI_FINTECH = "AI & Fintech" as const;
const CAT_ECOMMERCE = "E-Commerce & Mobile" as const;

const PROF_WORK = "PROFESSIONAL WORK" as const;
const INDEP_PROJECT = "INDEPENDENT PROJECT" as const;
const CONCEPT_EXPLORATION = "CONCEPTUAL EXPLORATION" as const;

type Classification = typeof PROF_WORK | typeof INDEP_PROJECT | typeof CONCEPT_EXPLORATION;
type FilterCategory = "All" | typeof CAT_ENTERPRISE | typeof CAT_AI_FINTECH | typeof CAT_ECOMMERCE;

interface ArchiveProject {
  id: string;
  title: string;
  category: string;
  filterCategory: typeof CAT_ENTERPRISE | typeof CAT_AI_FINTECH | typeof CAT_ECOMMERCE;
  classification: Classification;
  description: string;
  image: string;
  link: string;
  isExternal?: boolean;
}

const archiveProjects: ArchiveProject[] = [
  {
    id: "advitiix",
    title: "Advitiix Multi-Role Management Platform",
    category: "Founding Product Suite · 0 to 1",
    filterCategory: CAT_ENTERPRISE,
    classification: PROF_WORK,
    description:
      "End-to-end design and frontend development for Admin, Project Manager, Employee, and Food Kiosk operations within a unified multi-tenant design system.",
    image: "/Leave.png",
    link: "/advitiix"
  },
  {
    id: "model-pipeline",
    title: "Model Pipeline & AI Dashboards",
    category: "MLOps Telemetry · Data Visualization",
    filterCategory: CAT_ENTERPRISE,
    classification: PROF_WORK,
    description:
      "Real-time machine learning pipeline telemetry dashboards, model performance drift detection, and automated stakeholder reporting digests.",
    image: "/AI.png",
    link: "/model-pipeline"
  },
  {
    id: "car-3d",
    title: "3D Car Design & X-Ray Diagnostics",
    category: "Three.js & WebGL · Spatial Hardware UX",
    filterCategory: CAT_ENTERPRISE,
    classification: PROF_WORK,
    description:
      "Interactive 3D vehicle platform solving WebGL polygon rendering bottlenecks with dual assembled and interior X-ray diagnostic modes.",
    image: "/car-3d.jpg",
    link: "/car-3d"
  },
  {
    id: "finora",
    title: "Paymi AI Financial Intelligence",
    category: "AI Fintech · Conversational Assistant",
    filterCategory: CAT_AI_FINTECH,
    classification: INDEP_PROJECT,
    description:
      "Conversational AI banking assistant and predictive cashflow diagnostics helping users forecast runway, analyze subscriptions, and optimize savings.",
    image: "/fintech.png",
    link: "/finora"
  },
  {
    id: "urbangent",
    title: "UrbanGent Menswear",
    category: "Editorial E-Commerce · Visual Design",
    filterCategory: CAT_ECOMMERCE,
    classification: CONCEPT_EXPLORATION,
    description:
      "High-contrast editorial typography, lookbook storytelling, and responsive catalog browsing for contemporary luxury menswear.",
    image: "/Fashion.png",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=12-10682",
    isExternal: true
  },
  {
    id: "bareskin",
    title: "Bareskin Dermatological Care",
    category: "Cosmetics Web Experience · Brand System",
    filterCategory: CAT_ECOMMERCE,
    classification: CONCEPT_EXPLORATION,
    description:
      "Minimalist e-commerce interface highlighting clean ingredient transparency, personalized skin diagnostic quiz, and regimen builder.",
    image: "/Skincare.png",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=12-10337",
    isExternal: true
  },
  {
    id: "lumera",
    title: "Lumera Fine Jewelry",
    category: "Luxury Mobile App · Product Catalog",
    filterCategory: CAT_ECOMMERCE,
    classification: CONCEPT_EXPLORATION,
    description:
      "Tactile mobile shopping experience featuring high-resolution precious gemstone zoom, metal customizer, and seamless cart checkout.",
    image: "/Lumera.png",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=1-8932",
    isExternal: true
  },
  {
    id: "ai-tool",
    title: "AI Generative Studio Landing",
    category: "Creative Tool · Landing Page",
    filterCategory: CAT_AI_FINTECH,
    classification: CONCEPT_EXPLORATION,
    description:
      "Landing page exploration showcasing interactive prompt generators, model style presets, and community asset gallery.",
    image: "/AI.png",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=12-13565&p=f",
    isExternal: true
  }
];

const categories: FilterCategory[] = [
  "All",
  CAT_ENTERPRISE,
  CAT_AI_FINTECH,
  CAT_ECOMMERCE
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return archiveProjects;
    return archiveProjects.filter((p) => p.filterCategory === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#f7f5f2] text-neutral-950 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-[#f2f2f2] font-sans pb-24">
      <div className="mx-auto max-w-[1240px] border-x border-black/[0.08] dark:border-white/[0.08]">
        {/* Header Intro */}
        <section className="px-6 pb-10 pt-12 sm:px-12 sm:pt-16 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            <span className="h-2 w-2 rounded-full bg-neutral-400" />
            <span>WORK ARCHIVE · EXPLORATIONS &amp; PROJECTS</span>
          </div>

          <h1 className="mt-4 font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-neutral-950 dark:text-white leading-[1.02]">
            Work Archive.
          </h1>

          <p className="mt-3 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            A complete collection of additional client platforms, management dashboards, 3D WebGL experiments, fintech apps, and brand design explorations.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-sm"
                    : "border border-black/[0.08] dark:border-white/[0.08] text-neutral-600 dark:text-neutral-400 hover:border-black/30 dark:hover:border-white/30"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Project Grid */}
        <section className="px-6 py-8 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => {
              const cardContent = (
                <article className="h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] transition-all duration-300 hover:border-black/25 dark:hover:border-white/25 hover:shadow-lg">
                  <div>
                    {/* Image Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-black/[0.06] dark:border-white/[0.06]">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />
                      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-950 opacity-0 shadow-md backdrop-blur transition-all duration-300 group-hover:opacity-100 dark:bg-black/85 dark:text-white">
                        <ArrowUpRight size={14} strokeWidth={2} />
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                        <span className="text-neutral-500 dark:text-neutral-400 uppercase tracking-widest text-[11px]">
                          {project.category}
                        </span>
                        <span className="rounded border border-black/[0.08] dark:border-white/[0.1] bg-black/[0.02] dark:bg-white/[0.02] px-2 py-0.5 text-[10px] uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                          {project.classification}
                        </span>
                      </div>

                      <h2 className="mt-3 font-serif text-xl sm:text-2xl font-normal tracking-tight text-neutral-950 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                        {project.title}
                      </h2>

                      <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="px-5 pb-5 pt-2.5 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between font-mono text-xs text-neutral-700 dark:text-neutral-300">
                    <span className="group-hover:underline">
                      {project.isExternal ? "View External Design ↗" : "View Case Study →"}
                    </span>
                    <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100" />
                  </div>
                </article>
              );

              return project.isExternal ? (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full">
                  {cardContent}
                </a>
              ) : (
                <Link key={project.id} to={project.link} className="group block h-full">
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Selected Work Banner */}
        <section className="px-6 py-10 sm:px-12 sm:py-14 lg:px-16 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-950 dark:text-white">
              Looking for the 5 core flagship case studies?
            </h3>
            <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400">
              Review Volvo Partner Connect 2.0, Fire Detection Live App, and 3D Vehicle Configurator.
            </p>
          </div>

          <Link
            to="/selected-work"
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-6 py-3 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 shrink-0">
            <span>View Selected Work</span>
            <ArrowUpRight size={14} />
          </Link>
        </section>
      </div>
    </main>
  );
}
