import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CircleAlert,
  FileText,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

type WireframeProps = {
  title: string;
  children?: React.ReactNode;
};

function Wireframe({ title, children }: WireframeProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white dark:border-white/[0.08] dark:bg-[#181818]">
      <div className="flex h-11 items-center gap-2 border-b border-black/[0.07] px-4 dark:border-white/[0.07]">
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />

        <span className="ml-3 text-[11px] text-neutral-400">
          {title}
        </span>
      </div>

      <div className="min-h-[360px] bg-[#f8f8f6] p-5 dark:bg-[#202020]">
        {children}
      </div>
    </div>
  );
}
function Block({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`rounded-md bg-neutral-200/80 dark:bg-neutral-700/60 ${className}`}
    />
  );
}

export default function FoodSafety() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-neutral-950 transition-colors duration-300 dark:bg-[#111111] dark:text-white">
      <div className="mx-auto max-w-[1200px] border-x border-black/[0.08] dark:border-white/[0.08]">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="border-b border-black/[0.08] px-6 pb-20 pt-24 dark:border-white/[0.08] sm:px-10 sm:pb-28 sm:pt-32 lg:px-16">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              SmartFoodSafe
            </p>

            <span className="text-xs uppercase tracking-[0.16em] text-neutral-400">
              UX/UI Case Study
            </span>
          </div>

          <div className="mt-24 max-w-5xl">

            <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-[92px]">
              Making supplier
              <br />
              compliance actionable.
            </h1>

            <p className="mt-9 max-w-2xl text-lg leading-8 text-neutral-500 dark:text-neutral-400 sm:text-xl">
              Designing an enterprise workflow for QA and Food Safety
              teams to monitor compliance, identify risks and resolve
              food-safety queries.
            </p>

          </div>

          <div className="mt-20 flex items-center gap-3 text-sm text-neutral-400">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.1] dark:border-white/[0.1]">
              <ArrowDown size={16} strokeWidth={1.5} />
            </div>

            <span>Explore case study</span>
          </div>
        </section>


        {/* =====================================================
            PROJECT META
        ====================================================== */}

        <section className="grid grid-cols-2 border-b border-black/[0.08] dark:border-white/[0.08] sm:grid-cols-4">

          <div className="border-r border-black/[0.08] p-6 dark:border-white/[0.08] sm:p-8">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
              Role
            </p>
            <p className="mt-3 text-sm">
              UX/UI Designer
            </p>
          </div>

          <div className="border-b border-black/[0.08] p-6 dark:border-white/[0.08] sm:border-b-0 sm:border-r sm:p-8">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
              Type
            </p>
            <p className="mt-3 text-sm">
              Product Design
            </p>
          </div>

          <div className="border-r border-black/[0.08] p-6 dark:border-white/[0.08] sm:p-8">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
              Platform
            </p>
            <p className="mt-3 text-sm">
              Desktop Web
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
              Tools
            </p>
            <p className="mt-3 text-sm">
              Figma · FigJam
            </p>
          </div>

        </section>


        {/* =====================================================
            PROBLEM
        ====================================================== */}

        <section className="grid gap-12 border-b border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-16 lg:py-28">

          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              01 — The Challenge
            </span>
          </div>

          <div>

            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
              Compliance information existed,
              but the workflow was difficult to manage.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-500 dark:text-neutral-400">
              QA and Food Safety teams need to monitor suppliers,
              identify risks, track certificates and resolve
              food-safety queries without losing context.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">

              {[
                ["Visibility", "Understand supplier compliance quickly."],
                ["Prioritization", "Identify high-risk issues first."],
                ["Query Management", "Track issues from creation to resolution."],
                ["Collaboration", "Keep responses and documents connected."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-xl border border-black/[0.08] p-5 dark:border-white/[0.08]"
                >
                  <h3 className="text-sm font-medium">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                    {text}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>


        {/* =====================================================
            CORE INSIGHT
        ====================================================== */}

        <section className="border-b border-black/[0.08] px-6 py-24 dark:border-white/[0.08] sm:px-10 lg:px-16 lg:py-32">

          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            The Insight
          </p>

          <h2 className="mt-8 max-w-4xl font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-6xl">
            The dashboard shouldn't just
            show problems. It should help
            people resolve them.
          </h2>

          <div className="mt-12 flex flex-wrap items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">

            <span className="rounded-full border border-black/[0.08] px-4 py-2 dark:border-white/[0.08]">
              Monitor
            </span>

            <ArrowUpRight size={15} />

            <span className="rounded-full border border-black/[0.08] px-4 py-2 dark:border-white/[0.08]">
              Identify
            </span>

            <ArrowUpRight size={15} />

            <span className="rounded-full border border-black/[0.08] px-4 py-2 dark:border-white/[0.08]">
              Act
            </span>

            <ArrowUpRight size={15} />

            <span className="rounded-full border border-black/[0.08] px-4 py-2 dark:border-white/[0.08]">
              Collaborate
            </span>

            <ArrowUpRight size={15} />

            <span className="rounded-full border border-black/[0.08] px-4 py-2 dark:border-white/[0.08]">
              Resolve
            </span>

          </div>

        </section>


        {/* =====================================================
            USERS
        ====================================================== */}

        <section className="border-b border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 lg:px-16 lg:py-28">

          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                02 — Users
              </p>

              <h2 className="mt-5 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
                Three people.
                <br />
                One workflow.
              </h2>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">

            {[
              {
                icon: ShieldCheck,
                role: "QA Manager",
                need: "Know which suppliers require attention.",
              },
              {
                icon: CircleAlert,
                role: "Food Safety Team",
                need: "Investigate and resolve food-safety issues.",
              },
              {
                icon: Users,
                role: "Supplier",
                need: "Understand requirements and respond clearly.",
              },
            ].map((user) => {
              const Icon = user.icon;

              return (
                <div
                  key={user.role}
                  className="group rounded-2xl border border-black/[0.08] bg-white p-7 transition-transform duration-500 hover:-translate-y-1 dark:border-white/[0.08] dark:bg-[#191919]"
                >
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-neutral-400"
                  />

                  <p className="mt-10 text-xs uppercase tracking-[0.15em] text-neutral-400">
                    Primary user
                  </p>

                  <h3 className="mt-2 text-xl font-medium">
                    {user.role}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                    {user.need}
                  </p>
                </div>
              );
            })}

          </div>
        </section>


        {/* =====================================================
            USER FLOW
        ====================================================== */}

        <section className="border-b border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 lg:px-16 lg:py-28">

          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            03 — User Flow
          </p>

          <h2 className="mt-5 max-w-2xl font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
            From identifying a risk
            to resolving the issue.
          </h2>

          <div className="mt-14 overflow-x-auto pb-4">
            <div className="flex min-w-[850px] items-center gap-3">

              {[
                "Dashboard",
                "Identify Risk",
                "Supplier",
                "Raise Query",
                "Supplier Response",
                "Review",
                "Resolve",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-3">

                  <div className="rounded-xl border border-black/[0.08] bg-white px-5 py-4 text-sm dark:border-white/[0.08] dark:bg-[#191919]">
                    <span className="mr-2 text-xs text-neutral-400">
                      0{index + 1}
                    </span>
                    {item}
                  </div>

                  {index < 6 && (
                    <ArrowUpRight
                      size={16}
                      className="text-neutral-400"
                    />
                  )}

                </div>
              ))}

            </div>
          </div>
        </section>


        {/* =====================================================
            WIREFRAMES
        ====================================================== */}

        <section className="border-b border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 lg:px-16 lg:py-28">

          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            04 — Wireframes
          </p>

          <h2 className="mt-5 max-w-2xl font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
            Structure first.
            <br />
            Visual polish later.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-500 dark:text-neutral-400">
            I focused first on hierarchy, information density,
            navigation and the relationship between suppliers,
            compliance and queries.
          </p>


          {/* WIREFRAME 01 */}
          <div className="mt-14">
            <Wireframe title="Dashboard">

              <div className="grid h-full grid-cols-[150px_1fr] gap-5">

                {/* Sidebar */}
                <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-[#181818]">

                  <Block className="h-5 w-24" />

                  <div className="mt-8 space-y-3">
                    <Block className="h-7 w-full" />
                    <Block className="h-7 w-full" />
                    <Block className="h-7 w-full" />
                    <Block className="h-7 w-full" />
                    <Block className="h-7 w-full" />
                  </div>

                </div>

                {/* Main */}
                <div>

                  <div className="flex justify-between">
                    <Block className="h-7 w-44" />
                    <Block className="h-7 w-28" />
                  </div>

                  <div className="mt-5 grid grid-cols-4 gap-3">
                    <Block className="h-20" />
                    <Block className="h-20" />
                    <Block className="h-20" />
                    <Block className="h-20" />
                  </div>

                  <div className="mt-4 grid grid-cols-[1.5fr_1fr] gap-4">
                    <Block className="h-52" />
                    <Block className="h-52" />
                  </div>

                  <Block className="mt-4 h-28 w-full" />

                </div>

              </div>

            </Wireframe>
          </div>


          {/* WIREFRAME 02 */}
          <div className="mt-8 grid gap-8 lg:grid-cols-2">

            <Wireframe title="Supplier Management">

              <div className="flex gap-4">

                <div className="w-32 space-y-3">
                  <Block className="h-6 w-24" />
                  <Block className="h-8 w-full" />
                  <Block className="h-8 w-full" />
                  <Block className="h-8 w-full" />
                  <Block className="h-8 w-full" />
                </div>

                <div className="flex-1">

                  <Block className="h-9 w-full" />

                  <div className="mt-5 space-y-2">

                  {[1, 2, 3, 4, 5, 6].map((row) => (
  <div
    key={row}
    className="grid grid-cols-4 gap-3"
  >
    <Block className="h-8" />
    <Block className="h-8" />
    <Block className="h-8" />
    <Block className="h-8" />
  </div>
))}

                  </div>

                </div>

              </div>

            </Wireframe>


            <Wireframe title="Query Detail">

              <div className="grid grid-cols-[1fr_170px] gap-4">

                <div>

                  <Block className="h-7 w-52" />

                  <Block className="mt-5 h-20 w-full" />

                  <Block className="mt-4 h-20 w-full" />

                  <Block className="mt-4 h-28 w-full" />

                </div>

                <div className="space-y-3">
                  <Block className="h-24" />
                  <Block className="h-24" />
                  <Block className="h-24" />
                </div>

              </div>

            </Wireframe>

          </div>

        </section>


        {/* =====================================================
            DASHBOARD
        ====================================================== */}

        <section className="border-b border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 lg:px-16 lg:py-28">

          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            05 — Dashboard
          </p>

          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
            Answer the important questions first.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-500 dark:text-neutral-400">
            The dashboard was structured around what needs attention,
            rather than simply displaying as many metrics as possible.
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["Total Suppliers", "248"],
              ["Open Queries", "32"],
              ["High Risk", "08"],
              ["Expiring Certificates", "14"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-black/[0.08] bg-white p-6 dark:border-white/[0.08] dark:bg-[#191919]"
              >
                <p className="text-xs text-neutral-400">
                  {label}
                </p>

                <p className="mt-5 font-serif text-4xl">
                  {value}
                </p>
              </div>
            ))}

          </div>

        </section>


        {/* =====================================================
            QUERY EXPERIENCE
        ====================================================== */}

        <section className="border-b border-black/[0.08] px-6 py-20 dark:border-white/[0.08] sm:px-10 lg:px-16 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                Query Management
              </p>

              <h2 className="mt-5 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
                Keep the whole conversation together.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-neutral-500 dark:text-neutral-400">
                Instead of separating communication, documents and
                status information, the query detail view brings
                the complete resolution context together.
              </p>

            </div>


            <div className="space-y-3">

              {[
                "Query status",
                "Supplier information",
                "Conversation",
                "Supporting documents",
                "Resolution history",
                "Approval",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-black/[0.08] bg-white p-4 dark:border-white/[0.08] dark:bg-[#191919]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] text-xs dark:border-white/[0.08]">
                    {index + 1}
                  </div>

                  <span className="text-sm">
                    {item}
                  </span>

                  <Check
                    size={16}
                    className="ml-auto text-neutral-400"
                  />
                </div>
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            DESIGN PRINCIPLE
        ====================================================== */}

        <section className="border-b border-black/[0.08] px-6 py-24 dark:border-white/[0.08] sm:px-10 lg:px-16 lg:py-32">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Design Principle
            </p>

            <h2 className="mt-8 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-6xl">
              Show the right information
              at the right moment.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-neutral-500 dark:text-neutral-400">
              The goal wasn't to add more information to the product.
              It was to make the existing information easier to understand,
              prioritize and act on.
            </p>

          </div>

        </section>


        {/* =====================================================
            REFLECTION
        ====================================================== */}

        <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            06 — Reflection
          </p>

          <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
            Good enterprise UX isn't about
            showing more information.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500 dark:text-neutral-400">
            It's about showing the right information at the right
            moment and making the next action clear.
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">

            {[
              {
                icon: Search,
                title: "Monitor",
                text: "Understand the current compliance state.",
              },
              {
                icon: CircleAlert,
                title: "Identify",
                text: "Surface risks and issues that need attention.",
              },
              {
                icon: FileText,
                title: "Resolve",
                text: "Connect queries, responses and evidence.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/[0.08] p-6 dark:border-white/[0.08]"
                >
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-neutral-400"
                  />

                  <h3 className="mt-8 text-base font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>

        </section>

      </div>
    </main>
  );
}