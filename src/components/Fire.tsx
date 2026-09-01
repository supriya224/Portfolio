import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Camera,
  CheckCircle2,
  Clock3,
  Flame,
  MapPin,
  ShieldAlert,
  WifiOff,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const stats = [
  {
    label: "Detection",
    value: "Fire",
    icon: Flame,
  },
  {
    label: "Location",
    value: "Zone B · Floor 2",
    icon: MapPin,
  },
  {
    label: "Camera",
    value: "CAM-024",
    icon: Camera,
  },
  {
    label: "Status",
    value: "Active",
    icon: ShieldAlert,
  },
];

const edgeCases = [
  {
    title: "No active alert",
    description:
      "The dashboard clearly communicates that the facility is clear instead of leaving an ambiguous empty state.",
    icon: CheckCircle2,
  },
  {
    title: "Camera offline",
    description:
      "Disconnected cameras are surfaced as a system state so missing information is not mistaken for a clear environment.",
    icon: WifiOff,
  },
  {
    title: "Multiple alerts",
    description:
      "Different incidents remain distinguishable by location, type, severity and status.",
    icon: ShieldAlert,
  },
  {
    title: "Historical incidents",
    description:
      "Resolved events remain available through detection history for investigation and review.",
    icon: Clock3,
  },
];

/* =========================================================
   SECTION NUMBER
========================================================= */

function SectionNumber({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[12px] text-neutral-400">
        {number}
      </span>

      <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-neutral-400 sm:text-[13px]">
        {label}
      </span>
    </div>
  );
}

/* =========================================================
   REVEAL ANIMATION
========================================================= */

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry && entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* =========================================================
   FLOOR MAP
========================================================= */

function FloorMap() {
  const cameras = [
    { left: "23%", top: "36%", active: false },
    { left: "47%", top: "36%", active: true },
    { left: "69%", top: "36%", active: false },
    { left: "31%", top: "65%", active: false },
    { left: "56%", top: "65%", active: false },
    { left: "76%", top: "65%", active: false },
  ];

  return (
    <div className="relative aspect-[16/10] overflow-hidden border border-black/[0.08] bg-[#eeeae4] dark:border-white/[0.08] dark:bg-[#181818] sm:aspect-[16/9]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floor plan */}
      <div className="absolute left-[8%] top-[12%] h-[72%] w-[84%] border border-black/20 dark:border-white/20">
        {/* Horizontal wall */}
        <div className="absolute left-0 top-1/2 h-px w-full bg-black/15 dark:bg-white/15" />

        {/* Vertical walls */}
        <div className="absolute left-1/3 top-0 h-full w-px bg-black/15 dark:bg-white/15" />

        <div className="absolute left-2/3 top-0 h-full w-px bg-black/15 dark:bg-white/15" />

        {/* Center wall */}
        <div className="absolute left-1/3 top-1/2 h-px w-1/3 bg-black/15 dark:bg-white/15" />
      </div>

      {/* Zone labels */}
      <span className="absolute left-[13%] top-[19%] text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-400 sm:text-[11px]">
        Zone A
      </span>

      <span className="absolute left-[45%] top-[19%] text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-400 sm:text-[11px]">
        Zone B
      </span>

      <span className="absolute left-[72%] top-[19%] text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-400 sm:text-[11px]">
        Zone C
      </span>

      {/* Camera points */}
      {cameras.map((camera, index) => (
        <div
          key={`${camera.left}-${camera.top}`}
          className={`absolute h-2.5 w-2.5 rounded-full border-2 border-white shadow-sm sm:h-3 sm:w-3 ${
            camera.active
              ? "animate-pulse bg-red-500"
              : "bg-neutral-500"
          }`}
          style={{
            left: camera.left,
            top: camera.top,
          }}
        >
          <span className="sr-only">
            Camera {index + 1}
          </span>
        </div>
      ))}

      {/* Active incident */}
      <div className="absolute left-[42%] top-[27%]">
        <div className="absolute -inset-4 animate-ping rounded-full bg-red-500/20 sm:-inset-5" />

        <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white shadow-lg sm:h-10 sm:w-10">
          <Flame size={17} />
        </div>
      </div>

      {/* Incident card */}
      <div className="absolute left-[48%] top-[22%] w-[175px] rounded-xl border border-black/[0.08] bg-white/95 p-3 shadow-xl backdrop-blur-sm dark:border-white/[0.08] dark:bg-[#202020]/95 sm:left-[50%] sm:w-[220px] sm:p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-red-500 sm:text-[11px]">
              Active detection
            </p>

            <p className="mt-1 text-[12px] font-medium sm:text-[15px]">
              Fire detected
            </p>
          </div>

          <Flame
            size={15}
            className="shrink-0 text-red-500 sm:h-[17px] sm:w-[17px]"
          />
        </div>

        <div className="mt-2 space-y-0.5 text-[9px] text-neutral-500 dark:text-neutral-400 sm:mt-3 sm:space-y-1 sm:text-[12px]">
          <p>CAM-024 · Zone B</p>
          <p>Confidence 96%</p>
          <p>Severity Critical</p>
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-4 left-4 rounded-full border border-black/[0.08] bg-white/80 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.14em] text-neutral-500 backdrop-blur-sm dark:border-white/[0.08] dark:bg-black/30 sm:bottom-5 sm:left-5 sm:px-4 sm:py-2 sm:text-[11px]">
        Floor 02 · Live
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Fire() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-neutral-950 transition-colors duration-300 dark:bg-[#111111] dark:text-neutral-100">
      {/* Page rails */}
      <div className="mx-auto min-h-screen w-full max-w-[1180px] border-x border-black/[0.06] dark:border-white/[0.07]">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-14 lg:pt-28">
          <Reveal>
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400 sm:text-[13px]">
              <span className="h-2 w-2 rounded-full bg-red-500" />

              Fire & Smoke Detection
            </div>
          </Reveal>

          <Reveal className="mt-7 sm:mt-8">
            <h1 className="max-w-[950px] font-serif text-[48px] leading-[0.98] tracking-[-0.045em] sm:text-[68px] lg:text-[88px]">
              Turning an alert into an actionable location.
            </h1>
          </Reveal>

          <Reveal className="mt-7 max-w-[680px] sm:mt-8">
            <p className="text-[17px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[20px] sm:leading-8">
              A fire and smoke monitoring dashboard redesigned
              around the physical environment — helping employees
              understand where an incident is happening, what was
              detected and what needs attention.
            </p>
          </Reveal>

          {/* Meta */}
          <Reveal className="mt-10 sm:mt-12">
            <div className="grid grid-cols-2 gap-y-7 border-y border-black/[0.1] py-6 dark:border-white/[0.1] sm:grid-cols-4 sm:py-7">
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 sm:text-[12px]">
                  Role
                </p>

                <p className="mt-2 text-[13px] sm:text-[15px]">
                  UX/UI Product Designer
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 sm:text-[12px]">
                  Product
                </p>

                <p className="mt-2 text-[13px] sm:text-[15px]">
                  Industrial Monitoring
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 sm:text-[12px]">
                  Focus
                </p>

                <p className="mt-2 text-[13px] sm:text-[15px]">
                  UX · UI · Information Architecture
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 sm:text-[12px]">
                  Platform
                </p>

                <p className="mt-2 text-[13px] sm:text-[15px]">
                  Desktop
                </p>
              </div>
            </div>
          </Reveal>

          {/* Hero visual */}
          <Reveal className="mt-14 sm:mt-20">
            <div className="overflow-hidden bg-white p-1.5 shadow-[0_20px_80px_rgba(0,0,0,0.06)] dark:bg-[#191919] sm:p-2">
              <FloorMap />
            </div>
          </Reveal>
        </section>

        {/* =================================================
            PROBLEM
        ================================================= */}

        <section className="border-t border-black/[0.08] px-5 py-24 dark:border-white/[0.08] sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionNumber
              number="01"
              label="The problem"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-12">
              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                An alert existed.
                <br />
                Context didn't.
              </h2>

              <div className="space-y-5 text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px] sm:leading-8">
                <p>
                  The initial dashboard could tell an employee that
                  an alert had been triggered, but it didn't help
                  them quickly understand where the incident was or
                  how serious it was.
                </p>

                <p>
                  The employee still had to connect the alert with a
                  camera and then determine where that camera was
                  physically located.
                </p>

                <p className="font-medium text-neutral-950 dark:text-neutral-100">
                  In an emergency, that extra mental step matters.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            INSIGHT
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionNumber
              number="02"
              label="The insight"
            />

            <div className="mt-10 max-w-[900px]">
              <p className="font-serif text-[38px] leading-[1.1] tracking-[-0.035em] sm:text-[54px]">
                The problem wasn't detection.
                <br />
                It was understanding.
              </p>

              <p className="mt-7 max-w-[680px] text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px] sm:leading-8">
                Instead of making the alert more prominent, I changed
                the central concept of the dashboard. The interface
                needed to connect the detection directly to the
                physical environment.
              </p>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            SOLUTION
        ================================================= */}

        <section className="border-y border-black/[0.08] py-24 dark:border-white/[0.08] sm:py-28">
          <div className="px-5 sm:px-8 lg:px-14">
            <Reveal>
              <SectionNumber
                number="03"
                label="The solution"
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-12">
                <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                  From alert-centric
                  <br />
                  to location-centric.
                </h2>

                <p className="text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px] sm:leading-8">
                  I introduced a floor-map experience with camera
                  locations, allowing an active detection to be
                  understood in its physical context. Supporting
                  information was structured around the questions an
                  employee needs to answer immediately.
                </p>
              </div>
            </Reveal>

            {/* Information cards */}
            <Reveal className="mt-12 sm:mt-16">
              <div className="grid grid-cols-2 border-l border-t border-black/[0.08] dark:border-white/[0.08] sm:grid-cols-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="group border-b border-r border-black/[0.08] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:border-white/[0.08] dark:hover:bg-[#191919] sm:p-7"
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-neutral-400 transition-transform duration-300 group-hover:scale-110"
                      />

                      <p className="mt-8 text-[10px] uppercase tracking-[0.14em] text-neutral-400 sm:mt-10 sm:text-[12px]">
                        {stat.label}
                      </p>

                      <p className="mt-2 text-[14px] font-medium sm:text-[17px]">
                        {stat.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* =================================================
            EXPERIENCE
        ================================================= */}

        <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionNumber
              number="04"
              label="The experience"
            />

            <h2 className="mt-10 max-w-[850px] font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[54px]">
              A clearer path from detection to investigation.
            </h2>

            <div className="mt-12 grid gap-0 border-l border-t border-black/[0.08] dark:border-white/[0.08] md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Live dashboard",
                  description:
                    "See the facility state and active incidents.",
                },
                {
                  number: "02",
                  title: "Location",
                  description:
                    "Identify the affected floor, zone and camera.",
                },
                {
                  number: "03",
                  title: "Incident",
                  description:
                    "Understand type, severity, confidence and status.",
                },
                {
                  number: "04",
                  title: "History",
                  description:
                    "Investigate previous detections and camera activity.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="border-b border-r border-black/[0.08] p-6 transition-colors duration-300 hover:bg-black/[0.02] dark:border-white/[0.08] dark:hover:bg-white/[0.02] sm:p-7"
                >
                  <span className="font-mono text-[11px] text-neutral-400">
                    {item.number}
                  </span>

                  <h3 className="mt-10 text-[17px] font-medium sm:text-[19px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-neutral-500 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* =================================================
            EDGE CASES
        ================================================= */}

        <section className="border-t border-black/[0.08] px-5 py-24 dark:border-white/[0.08] sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionNumber
              number="05"
              label="Edge cases"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:gap-12">
              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                Monitoring can't assume everything is normal.
              </h2>

              <div className="grid gap-px bg-black/[0.08] dark:bg-white/[0.08] sm:grid-cols-2">
                {edgeCases.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group bg-[#f7f5f2] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:bg-[#111111] dark:hover:bg-[#191919] sm:p-7"
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.5}
                        className="text-neutral-400 transition-transform duration-300 group-hover:scale-110"
                      />

                      <h3 className="mt-9 text-[17px] font-medium sm:text-[18px]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-[14px] leading-6 text-neutral-500 dark:text-neutral-400 sm:text-[15px]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            TRADE-OFFS
        ================================================= */}

        <section className="border-t border-black/[0.08] px-5 py-24 dark:border-white/[0.08] sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionNumber
              number="06"
              label="Trade-offs"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-12">
              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
                Show what matters.
                <br />
                Hide what doesn't.
              </h2>

              <div className="space-y-5 text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-[18px] sm:leading-8">
                <p>
                  Monitoring products can easily become overloaded
                  with metrics, statuses and camera information.
                </p>

                <p>
                  I prioritized the information needed for immediate
                  response:{" "}
                  <strong className="text-neutral-950 dark:text-white">
                    location, incident type, severity, camera, time
                    and status.
                  </strong>
                </p>

                <p>
                  Deeper information moved into supporting views such
                  as camera status and detection history.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            LEARNING
        ================================================= */}

        <section className="border-t border-black/[0.08] px-5 py-28 dark:border-white/[0.08] sm:px-8 sm:py-32 lg:px-14">
          <Reveal>
            <SectionNumber
              number="07"
              label="What I learned"
            />

            <div className="mt-10 max-w-[1000px]">
              <blockquote className="font-serif text-[36px] leading-[1.12] tracking-[-0.035em] sm:text-[54px]">
                “The most important information isn't always the
                information that's easiest to display.”
              </blockquote>

              <p className="mt-8 max-w-[700px] text-[16px] leading-7 text-neutral-500 dark:text-neutral-400 sm:mt-10 sm:text-[18px] sm:leading-8">
                For operational products, I learned to start with the
                decision the user needs to make immediately after
                seeing the information. That shift helped me design
                the interface around action rather than simply
                displaying system output.
              </p>
            </div>
          </Reveal>
        </section>

        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="border-t border-black/[0.08] px-5 py-16 dark:border-white/[0.08] sm:px-8 sm:py-20 lg:px-14">
          <Reveal>
            <a
              href="/work"
              className="group flex items-center justify-between gap-6"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[13px]">
                  Back to
                </p>

                <p className="mt-2 font-serif text-[32px] tracking-[-0.03em] sm:text-[36px]">
                  Selected Work
                </p>
              </div>

              <ArrowUpRight
                size={28}
                strokeWidth={1.3}
                className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-8 sm:w-8"
              />
            </a>
          </Reveal>
        </section>
      </div>
    </div>
  );
}