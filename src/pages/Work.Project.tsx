import { useMemo, useState } from "react";
import { Shuffle } from "lucide-react";

const CATEGORY = {
  CASE_STUDY: "Case Study",
  WEB: "Web",
  MOBILE_APP: "Mobile App",
} as const;

type Category = "All" | (typeof CATEGORY)[keyof typeof CATEGORY];

type Project = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "AI Hiring Platform",
    category: CATEGORY.WEB,
    image: "/fintech.png",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=12-13565&p=f",
  },
  {
    id: 2,
    title: "Fintech App",
    category: CATEGORY.MOBILE_APP,
    image: "/finura copy.png",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=28-5244&p=f",
  },
  {
    id: 3,
    title: "Food Safety Management",
    category: CATEGORY.WEB,
    image: "/Food.png",
    link: "https://www.figma.com/design/QoRUE76kIbsfC1Cg25Hl1X/Food-safety-dashboard?node-id=0-1",
  },
  {
    id: 4,
    title: "Fashion Website",
    category: CATEGORY.WEB,
    image: "/Skincare.png",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=12-10682",
  },
  {
    id: 5,
    title: "EduHire",
    category: CATEGORY.CASE_STUDY,
    image: "/Edu.png",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=12-10337",
  },
  {
    id: 6,
    title: "Skincare Website",
    category: CATEGORY.WEB,
    image: "/Skincare.png",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=12-10337",
  },
  {
    id: 7,
    title: "Text To Speak",
    category: CATEGORY.CASE_STUDY,
    image: "/Text.png",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=1-345",
  },
  {
    id: 8,
    title: "Jewelry App",
    category: CATEGORY.MOBILE_APP,
    image: "/Lumera.png",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=1-8932",
  },
];

const categories: Category[] = [
  "All",
  CATEGORY.CASE_STUDY,
  CATEGORY.WEB,
  CATEGORY.MOBILE_APP,
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title}`}
      className="group block"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-black/[0.08]
          
          transition-all
          duration-500
          group-hover:-translate-y-1
          group-hover:shadow-[0_18px_45px_rgba(1,0,2,1)]
          dark:border-white/[0.08]
          dark:bg-[#191919]
          dark:group-hover:shadow-[0_18px_45px_rgba(0,0,0,12)]
        "
      >
        {/* aspect-[4/3] */}
        {/* Image */}
        <div className="relative   overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.035]
            "
          />

          {/* Bottom shadow / gradient */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[50%]
              bg-gradient-to-t
              from-black/90
              via-black/50
              to-transparent
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {/* Project information */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              flex
              items-end
              justify-between
              gap-4
              p-5
              text-white
              opacity-0
              translate-y-3
              transition-all
              duration-500
              group-hover:translate-y-0
              group-hover:opacity-100
              sm:p-6
            "
          >
            <div>
              <p className="mb-1.5 text-[10px] uppercase tracking-[0.18em] text-white/60">
                {project.category}
              </p>

              <h2 className="font-serif text-2xl tracking-[-0.03em] sm:text-3xl">
                {project.title}
              </h2>
            </div>

            {/* Arrow */}
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-white/10
                backdrop-blur-md
                transition-all
                duration-500
                group-hover:bg-white
                group-hover:text-black
              "
            >
              <span className="text-lg">↗</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function WorkPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [shuffled, setShuffled] = useState(false);

  const filteredProjects = useMemo(() => {
    const filtered =
      activeCategory === "All"
        ? [...projects]
        : projects.filter(
            (project) => project.category === activeCategory
          );

    if (!shuffled) {
      return filtered;
    }

    return [...filtered].sort(() => Math.random() - 0.5);
  }, [activeCategory, shuffled]);

  function handleShuffle() {
    setShuffled((value) => !value);
  }

  
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-neutral-950 transition-colors duration-300 dark:bg-[#111111] dark:text-white">

      {/* Page rails */}
      <div className="mx-auto min-h-screen w-full max-w-[1200px] border-x border-black/[0.08] dark:border-white/[0.08]">

        {/* Intro */}
        <section className="px-6 pb-14 pt-24 sm:px-10 sm:pt-24 lg:px-16">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
                Work
              </p>

              <h1 className="mt-5 font-serif text-5xl tracking-[-0.045em] sm:text-7xl">
                Selected experiments
              </h1>
            </div>

            <button
              type="button"
              onClick={handleShuffle}
              className="group flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-neutral-950 dark:hover:text-white"
            >
              <span className="hidden sm:inline">
                Shuffle
              </span>

              <Shuffle
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:rotate-180"
              />
            </button>

          </div>

        </section>


        {/* Filters */}
        <section className="border-y border-black/[0.08] dark:border-white/[0.08]">

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 px-6 py-5 sm:px-10 lg:px-16">

            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setShuffled(false);
                  }}
                  className={`text-sm transition-colors duration-200 ${
                    active
                      ? "font-medium text-neutral-950 dark:text-white"
                      : "text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}

          </div>

        </section>


      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
  {filteredProjects.length > 0 ? (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  ) : (
    <div className="border border-black/[0.08] py-24 text-center text-sm text-neutral-400 dark:border-white/[0.08]">
      No projects in this category yet.
    </div>
  )}
</section>

        {/* Bottom */}
        <section className="border-t border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 lg:px-16">

          <div className="flex items-center justify-between">

            <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
              More work coming soon
            </p>

            <span className="text-xs text-neutral-400">
              {filteredProjects.length.toString().padStart(2, "0")} projects
            </span>

          </div>

        </section>

      </div>
    </main>
  );
}