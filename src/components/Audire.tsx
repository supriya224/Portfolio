import {
  ArrowLeft,
  ArrowUpRight,
  AudioWaveform,
  Layers,
  Mic,
  Sliders,
  Sparkles,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const getSectionTag = (label: string) => `// ${label}`;

const projectMetadata = {
  title: "Audire",
  subtitle: "AI Text-to-Speech & Vocal Synthesis Mobile Experience",
  role: "Lead Product Designer & UX Architect",
  timeline: "Independent AI Product Exploration · 2025",
  category: "AI Product Design · Mobile UX",
  platforms: "iOS & Android (Design System & Mobile Prototyping)"
};

const problemPoints = [
  {
    title: "Intimidating Synthesizer Parameters",
    description:
      "Traditional TTS engines expose raw SSML tags and confusing numeric sliders (pitch in semitones, rate in percentages) that overwhelm non-technical content creators."
  },
  {
    title: "Opaque Latency & Generation Anxiety",
    description:
      "When users submit long text passages for neural rendering, long spinner delays without incremental audio streaming feedback cause high abandonment rates."
  },
  {
    title: "Rigid Monotone Delivery",
    description:
      "Most voice generators lack tactile sentence-by-sentence emotion and pacing inflection, resulting in robotic narration unsuitable for storytelling or e-learning."
  }
];

const targetPersonas = [
  {
    role: "Audiobook & Indie Creators",
    context: "Produces chapter narration and needs distinct voice personas with consistent emotional range.",
    need: "Fast character switching and natural pauses between dialogue lines."
  },
  {
    role: "Accessibility & Everyday Listeners",
    context: "Consumes long articles and PDFs on the go with visual fatigue.",
    need: "High-clarity pronunciation, zero-lag background streaming, and one-tap speech speed toggles."
  },
  {
    role: "Multilingual Language Learners",
    context: "Practices pronunciation and listening comprehension across diverse dialects.",
    need: "Phonetic accent accuracy, word-level highlighting sync, and pitch visualization."
  }
];

const coreWorkflows = [
  {
    step: "01",
    name: "Script Ingestion & Natural Chunking",
    detail: "Paste text or import documents. The engine automatically segments prose into natural breathing pauses and identifies speaker dialogues."
  },
  {
    step: "02",
    name: "Voice Persona & Timbre Matching",
    detail: "Choose from 60+ neural voices categorized by warmth, cadence, narrative tone, and dialect, with instant 3-second sample auditioning."
  },
  {
    step: "03",
    name: "Sentence-Level Prosody Tuning",
    detail: "Tap any phrase to adjust emotional nuance (whisper, excitement, gravitas), insert breath marks, or emphasize syllables using tactile sliders."
  },
  {
    step: "04",
    name: "Lossless Waveform Mastering & Export",
    detail: "Preview audio rendered progressively via streaming chunks, with instant export to MP3, WAV, or timestamped subtitle SRT files."
  }
];

const keyFeatures = [
  {
    number: "01",
    title: "Tactile Prosody & Rhythm Canvas",
    description:
      "Replaced cryptic code syntax with visual sentence cards. Designers and writers can drag pause handles to insert breath pauses (0.2s - 1.5s) and sweep pitch contours visually.",
    icon: Sliders
  },
  {
    number: "02",
    title: "Instant Streaming Low-Latency Audio Player",
    description:
      "Rather than forcing users to wait for the entire 5,000-word chapter to synthesize, the player buffers the first audio chunk in under 350ms, showing an animated waveform with word-by-word visual karaoke tracking.",
    icon: AudioWaveform
  },
  {
    number: "03",
    title: "Multi-Character Script Timeline",
    description:
      "Designed an intuitive multi-track timeline where two or more distinct AI voice personas can alternate dialogue, complete with overlap prevention and unified volume normalization.",
    icon: Mic
  },
  {
    number: "04",
    title: "Accessible Dark Audio Studio",
    description:
      "Crafted an OLED-optimized high-contrast dark interface minimizing eye fatigue during late-night audio editing sessions, meeting strict WCAG 2.1 AA touch target guidelines.",
    icon: Sparkles
  }
];

export default function Audire() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-neutral-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-[#f2f2f2] font-sans pb-32">
      <div className="mx-auto w-full max-w-[1240px] border-x border-black/[0.08] dark:border-white/[0.08]">
        {/* Top Back Navigation */}
        <section className="px-6 pt-10 pb-6 sm:px-12 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <Link
            to="/selected-work"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors">
            <ArrowLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span>Back to Selected Work</span>
          </Link>
        </section>

        {/* =====================================================
            1. PROJECT OVERVIEW & CONTEXT
        ====================================================== */}
        <header className="px-6 pt-12 pb-16 sm:px-12 sm:pt-16 sm:pb-20 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>CASE STUDY 05 · AI PRODUCT DESIGN</span>
            </div>
            <span className="text-[11px] text-neutral-400">INDEPENDENT PRODUCT EXPLORATION</span>
          </div>

          <h1 className="mt-8 font-serif text-5xl sm:text-7xl lg:text-[84px] font-normal tracking-tight text-neutral-950 dark:text-white leading-[0.98]">
            Audire AI Voice Studio
          </h1>

          <p className="mt-6 max-w-3xl text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
            Designing a next-generation mobile interface for neural speech synthesis—transforming robotic text-to-speech tools into an intuitive, expressive voice acting studio in your pocket.
          </p>

          {/* Metadata Grid */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 border-t border-black/[0.08] dark:border-white/[0.08] pt-8 font-mono text-xs">
            <div>
              <span className="text-neutral-400 uppercase tracking-widest block mb-1">Role</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">{projectMetadata.role}</span>
            </div>
            <div>
              <span className="text-neutral-400 uppercase tracking-widest block mb-1">Timeline</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">{projectMetadata.timeline}</span>
            </div>
            <div>
              <span className="text-neutral-400 uppercase tracking-widest block mb-1">Category</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">{projectMetadata.category}</span>
            </div>
            <div>
              <span className="text-neutral-400 uppercase tracking-widest block mb-1">Target Platform</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">{projectMetadata.platforms}</span>
            </div>
          </div>
        </header>

        {/* Hero Visual Preview */}
        <section className="px-6 py-12 sm:px-12 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-neutral-900 shadow-2xl">
            <img
              src="/Text.png"
              alt="Audire AI Voice Studio Interface"
              className="w-full h-auto object-cover max-h-[640px]"
            />
            <div className="p-4 sm:p-6 bg-black/60 backdrop-blur-sm border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-neutral-300">
              <span>FIG 1.0 · MOBILE INTERFACE SYSTEM &amp; TIMELINE CONTROLS</span>
              <span className="text-neutral-400">Word-level sync · Neural timbre modulation</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            2. PROBLEM STATEMENT
        ====================================================== */}
        <section className="px-6 py-20 sm:px-12 sm:py-24 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("02 · PROBLEM DISCOVERY")}
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Why speech synthesis interfaces fail on mobile
          </h2>
          <p className="mt-5 max-w-3xl text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Neural voice models have achieved near-human fidelity, yet the mobile interfaces used to control them remain trapped in developer-centric paradigms. Mobile users are asked to type esoteric syntax or tweak arbitrary floating-point numbers on tiny screens.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {problemPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 sm:p-7">
                <h3 className="font-serif text-xl font-normal tracking-tight text-neutral-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            3. TARGET USERS & RESEARCH INSIGHTS
        ====================================================== */}
        <section className="px-6 py-20 sm:px-12 sm:py-24 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("03 · USER RESEARCH & CONSTRAINTS")}
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Audience Ergonomics &amp; Mental Models
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {targetPersonas.map((persona) => (
              <div
                key={persona.role}
                className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-2">
                    Persona Archetype
                  </span>
                  <h3 className="font-serif text-xl font-normal text-neutral-950 dark:text-white">
                    {persona.role}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {persona.context}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] font-mono text-xs text-neutral-700 dark:text-neutral-300">
                  <strong>Core Need:</strong> {persona.need}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            4. INFORMATION ARCHITECTURE & KEY WORKFLOWS
        ====================================================== */}
        <section className="px-6 py-20 sm:px-12 sm:py-24 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("04 · INFORMATION ARCHITECTURE")}
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            From Raw Text to Polished Audio
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreWorkflows.map((flow) => (
              <div
                key={flow.step}
                className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-6">
                <span className="font-mono text-2xl font-light text-neutral-400">{flow.step}</span>
                <h3 className="mt-4 font-serif text-lg font-normal text-neutral-950 dark:text-white">
                  {flow.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {flow.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            5 & 6. KEY FEATURES & INTERFACE SOLUTIONS
        ====================================================== */}
        <section className="px-6 py-20 sm:px-12 sm:py-24 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("05 & 06 · INTERFACE SOLUTIONS")}
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Engineered for Precision &amp; Speed
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {keyFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <article
                  key={feat.number}
                  className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-neutral-400">{feat.number}</span>
                    <Icon className="h-5 w-5 text-neutral-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-normal text-neutral-950 dark:text-white">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {feat.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            7. ENTERPRISE & DOMAIN COMPLEXITY
        ====================================================== */}
        <section className="px-6 py-20 sm:px-12 sm:py-24 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("07 · DOMAIN COMPLEXITY")}
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Managing AI Latency &amp; Audio Buffers
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-8">
              <h3 className="font-serif text-xl font-normal text-neutral-950 dark:text-white">
                Streaming Chunk UX
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Rather than treating generation as a batch request with an arbitrary spinning wheel, the interface visualizes streaming audio buffer states. The first chunk begins playback within 350ms, while background workers pre-fetch subsequent sentence blocks in the pipeline.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-8">
              <h3 className="font-serif text-xl font-normal text-neutral-950 dark:text-white">
                Multilingual Phoneme Handling
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Supported over 40 language phonemes with bespoke phonetic spelling fallback drawers. When unusual proper nouns or medical terminology are encountered, creators can type a phonetic pronunciation guide with instant audio preview.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            8 & 9. DESIGN SYSTEM & TECHNICAL FEASIBILITY
        ====================================================== */}
        <section className="px-6 py-20 sm:px-12 sm:py-24 lg:px-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("08 & 09 · DESIGN SYSTEM & CODE ARCHITECTURE")}
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Component System &amp; Frontend Considerations
          </h2>

          <div className="mt-10 space-y-4 font-mono text-xs">
            <div className="p-5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] flex items-start gap-4">
              <Zap className="h-5 w-5 text-neutral-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-neutral-950 dark:text-white block mb-1">
                  Audio Web API &amp; Waveform Canvas Sync
                </strong>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Engineered waveform rendering on an HTML5 2D canvas running at 60fps, decoupled from React component re-renders to prevent audio micro-stutters during scrubber interaction.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] flex items-start gap-4">
              <Layers className="h-5 w-5 text-neutral-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-neutral-950 dark:text-white block mb-1">
                  Token-Driven Dark Ergonomics
                </strong>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Strict token system utilizing true black backgrounds (`#0a0a0a`), subtle border rails (`border-white/[0.08]`), and high-contrast amber/emerald playback indicators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            10. IMPACT & RETROSPECTIVE
        ====================================================== */}
        <section className="px-6 py-20 sm:px-12 sm:py-24 lg:px-16">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {getSectionTag("10 · IMPACT & RETROSPECTIVE")}
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950 dark:text-white">
            Design Retrospective
          </h2>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Audire demonstrated that AI capabilities are only as powerful as the ergonomic handles provided to human creators. By abstracting the model&apos;s mathematical complexity behind tactile audio timeline mechanics, we proved that deep audio synthesis can be made accessible and delightful on a mobile touchscreen.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/selected-work"
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-6 py-3 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200">
              <span>Back to Selected Work</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-xl border border-black/15 dark:border-white/15 bg-transparent px-6 py-3 font-mono text-xs uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:border-black dark:hover:border-white transition-colors">
              <span>View Work Archive</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
