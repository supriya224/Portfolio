import { useMemo, useState } from "react";
import { Shuffle, ArrowUpRight } from "lucide-react";

const CATEGORY = {
  CASE_STUDY: "Case Study",
  WEB: "Web",
  MOBILE_APP: "Mobile App",
  LINK: "Link"
} as const;

type Category = "All" | (typeof CATEGORY)[keyof typeof CATEGORY];

type Project = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  description?: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "AI Image Generator",
    category: CATEGORY.WEB,
    image: "./AI.png",
    description:
      "AI-powered hiring experience across onboarding, profile enrichment and interview preparation.",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=12-13565&p=f&t=XVIuih7DG3dpy79j-0"
  },
  {
    id: 2,
    title: "Fintech App",
    category: CATEGORY.MOBILE_APP,
    image: "./finura copy.png",
    description:
      "Multi-agent workflows, execution, analytics and a scalable design system.",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=28-5244&p=f&t=XVIuih7DG3dpy79j-0"
  },
  {
    id: 3,
    title: "Food Safety Management",
    category: CATEGORY.WEB,
    image: "./foods copy.png",
    description:
      "Lending and payments experience designed for traders and low-digital-literacy users.",
    link: "https://www.figma.com/design/QoRUE76kIbsfC1Cg25Hl1X/Food-safety-dashboard?node-id=0-1&t=ati9AM8mgZaJfQKz-0"
  },
  {
    id: 4,
    title: "Fashion Website",
    category: CATEGORY.WEB,
    image: "./Fashion.png",
    description:
      "A simple and focused commerce experience across desktop and mobile.",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=12-10682&t=XVIuih7DG3dpy79j-0"
  },
  {
    id: 5,
    title: "EduHire Case Study",
    category: CATEGORY.CASE_STUDY,
    image: "./Edu.png",
    description:
      "Mobile-first product flows and reusable interface components.",
    link: "https://www.figma.com/design/gD7WTRylKSftCvHBxLXdO5/Edu-app?node-id=552-5181&t=xc3I4nciQkPgdrPl-0"
  },
  {
    id: 6,
    title: "Skincare website",
    category: CATEGORY.WEB,
    image: "./Skincare.png",
    description:
      "A flexible component system bringing consistency across products.",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=12-10337&t=XVIuih7DG3dpy79j-0"
  },
  {
    id: 7,
    title: "Text To speak",
    category: CATEGORY.CASE_STUDY,
    image: "./Text.png",
    description:
      "A flexible component system bringing consistency across products.",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=1-345&t=XVIuih7DG3dpy79j-0"
  },

  {
    id: 8,
    title: "Jwelry App",
    category: CATEGORY.MOBILE_APP,
    image: "./Lumera.png",
    description: "THis is mobile app.",
    link: "https://www.figma.com/design/uCCI3aLXDFuIWuUTV77e2k/portolfio?node-id=1-8932&t=N3z4uixgYTIuSshB-0"
  }
];

const categories: Category[] = ["All", "Case Study", "Web", "Mobile App"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const [shuffled, setShuffled] = useState(false);

  const filteredProjects = useMemo(() => {
    const filtered =
      activeCategory === "All"
        ? [...projects]
        : projects.filter((project) => project.category === activeCategory);

    if (!shuffled) {
      return filtered;
    }

    return [...filtered].sort(() => Math.random() - 0.5);
  }, [activeCategory, shuffled]);

  const handleShuffle = () => {
    setShuffled((value) => !value);
  };

  return (
    <div className="min-h-screen bg-[#f7f5f2] text-neutral-950 transition-colors duration-300 dark:bg-[#111111] dark:text-neutral-100">
      <div className="mx-auto min-h-screen w-full max-w-[820px]">
        <main className="px-6 py-8 sm:px-10 sm:py-12">
          {/* Header */}
          <header>
            <p className="text-[18px] font-medium tracking-[-0.02em] text-neutral-500 dark:text-neutral-400">
              Selected Work Showcase
            </p>
          </header>

          {/* Filters */}
          <div className="mt-6 flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    type="button"
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setShuffled(false);
                    }}
                    className={`text-[18px] transition-colors duration-200 ${
                      active
                        ? "text-neutral-950 dark:text-white"
                        : "text-neutral-500 hover:text-neutral-950 dark:text-neutral-500 dark:hover:text-neutral-200"
                    }`}>
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Shuffle */}
            <button
              type="button"
              onClick={handleShuffle}
              className="group flex w-fit items-center gap-2 text-[18px] text-neutral-500 transition-colors hover:text-neutral-950 dark:hover:text-white">
              <span>Shuffle</span>

              <Shuffle
                size={18}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>
          </div>

          {/* Project Grid */}
          <section className="mt-12">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              
            {filteredProjects.map((project) => (
  <a
    key={project.id}
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block cursor-pointer"
  >
    <article>
      {/* Image */}
      <div className="overflow-hidden bg-white p-2 dark:bg-[#191919]">
        <div className="relative aspect-[16/10] overflow-hidden border border-black/[0.07] bg-[#fafafa] dark:border-white/[0.08] dark:bg-[#151515]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
        </div>
      </div>

      {/* Project Information */}
      <div className="flex items-start justify-between gap-6 px-1 pt-5">
        <div>
          <h2 className="text-[16px] font-medium tracking-[-0.02em]">
            {project.title}
          </h2>

          <p className="mt-1 text-[16px] text-neutral-500 dark:text-neutral-400">
            {project.category}
          </p>
        </div>

        <ArrowUpRight
          size={20}
          strokeWidth={1.5}
          className="mt-1 text-neutral-400 transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-950 dark:group-hover:text-white"
        />
      </div>
    </article>
  </a>
))}
              </div>
            ) : (
              <div className="border-t border-black/[0.1] py-20 text-center text-neutral-500 dark:border-white/[0.1]">
                No projects in this category yet.
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
