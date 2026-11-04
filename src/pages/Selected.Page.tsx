import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const selectedProjects = [
  {
    number: "01",
    title: "Fire & Smoke Detection",
    description:
      "Redesigning industrial incident monitoring around location, context and rapid response.",
    category: "Enterprise · UX/UI",
    image: "/Fire.png",
    link: "/fire",
  },
  {
    number: "02",
    title: "Paymi",
    description:
      "An AI-powered fintech experience helping users understand spending, saving and financial decisions.",
    category: "AI · Fintech",
    image: "/fintech.png",
    link: "/finora",
  },
  {
    number: "03",
    title: "Food Safety Dashboard",
    description:
      "Simplifying complex operational data into a clearer monitoring experience.",
    category: "B2B · Dashboard",
    image: "/Food.png",
    link: "/food",
  },
  {
    number: "04",
    title: "EduHire",
    description:
      "Designing a smarter hiring experience for discovering and evaluating candidates.",
    category: "AI · Product Design",
    image: "/Edu.png",
    link: "/eduhire",
  },
];

export default function SelectedWork() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-neutral-950 transition-colors duration-300 dark:bg-[#111111] dark:text-white">

      <div className="mx-auto max-w-[1200px] border-x border-black/[0.08] dark:border-white/[0.08]">

        {/* INTRO */}
        <section className="px-6 pb-16 pt-24 sm:px-10 sm:pt-24 lg:px-16">

          <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">
            Selected Work
          </p>

          <h1 className="mt-7 max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">
            Work that solves
            <br />
            real problems.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-500 dark:text-neutral-400">
            A selection of products and systems I've designed across
            AI, fintech, enterprise and consumer experiences.
          </p>

        </section>


        {/* CARD GRID */}
        <section className="border-t border-black/[0.08] px-4 py-4 dark:border-white/[0.08] sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {selectedProjects.map((project) => (

              <Link
                key={project.number}
                to={project.link}
                className="group"
              >

                {/* CARD */}
                <article className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-white/[0.08] dark:bg-[#191919] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

                  {/* IMAGE */}
                  <div className="relative overflow-hidden bg-[#eceae6] p-3 dark:bg-[#222222]">

                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-black/[0.06] bg-[#f7f7f7] dark:border-white/[0.06] dark:bg-[#151515]">

                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                      />

                      {/* Floating arrow */}
                      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-950 opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover:opacity-100 dark:bg-black/80 dark:text-white">

                        <ArrowUpRight
                          size={17}
                          strokeWidth={1.5}
                        />

                      </div>

                    </div>

                  </div>


                  {/* CARD CONTENT */}
                  <div className="p-6 sm:p-7">

                    {/* TOP ROW */}
                    <div className="flex items-center justify-between">

                      <span className="text-xs tracking-[0.12em] text-neutral-400">
                        {project.number}
                      </span>

                      <span className="text-xs text-neutral-400">
                        {project.category}
                      </span>

                    </div>


                    {/* TITLE */}
                    <h2 className="mt-7 font-serif text-3xl tracking-[-0.03em] sm:text-4xl">
                      {project.title}
                    </h2>


                    {/* DESCRIPTION */}
                    <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500 dark:text-neutral-400 sm:text-base">
                      {project.description}
                    </p>


                    {/* BOTTOM */}
                    <div className="mt-7 flex items-center justify-between border-t border-black/[0.07] pt-5 dark:border-white/[0.08]">

                      <span className="text-sm text-neutral-400 transition-colors group-hover:text-neutral-950 dark:group-hover:text-white">
                        View case study
                      </span>

                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        className="text-neutral-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-950 dark:group-hover:text-white"
                      />

                    </div>

                  </div>

                </article>

              </Link>

            ))}

          </div>

        </section>


        {/* BOTTOM */}
        <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <p className="max-w-2xl font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
            More work, experiments and explorations are available in the
            full archive.
          </p>

          <Link
            to="/work"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-50"
          >
            View all work
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </Link>

        </section>

      </div>

    </main>
  );
}