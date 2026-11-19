import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const resumeUrl =
    "https://drive.google.com/file/d/1NUZyCR1y4WqBA25RMbUZXfOT6MMC8GjE/view?usp=sharing";

  return (
    <footer className="w-full border-t border-black/[0.08] dark:border-white/[0.08] bg-[#f7f5f2] dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <div className="mx-auto max-w-[1240px] px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
        {/* Main CTA Block */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end border-b border-black/[0.08] dark:border-white/[0.08] pb-10">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              // LET&apos;S CONNECT
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-neutral-950 dark:text-white leading-[1.05]">
              Let&apos;s build thoughtful products together.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
              Currently open to Product Design roles focused on enterprise SaaS, AI products, and B2B platforms. Based in Bangalore, India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href="mailto:supriyam224@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-950 px-5 py-3 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200">
              <span>Start a Conversation</span>
              <ArrowUpRight size={14} />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/15 dark:border-white/15 bg-transparent px-5 py-3 font-mono text-xs uppercase tracking-wider text-neutral-800 dark:text-neutral-200 transition-colors hover:border-black dark:hover:border-white">
              <span>View Resume</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links & Information Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 font-mono text-xs">
          <div>
            <span className="text-neutral-400 uppercase tracking-widest block mb-3">Positioning</span>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Product Designer<br />
              Enterprise SaaS &amp; AI<br />
              Design Systems &amp; Code
            </p>
          </div>

          <div>
            <span className="text-neutral-400 uppercase tracking-widest block mb-3">Navigation</span>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/selected-work" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Work Archive
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors">
                  About &amp; Experience
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-neutral-400 uppercase tracking-widest block mb-3">Connect</span>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:supriyam224@gmail.com"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors">
                  supriyam224@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/supriyamaurya5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Behance ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/supri_241d/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Instagram ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-neutral-400 uppercase tracking-widest block mb-3">Availability</span>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium mb-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Roles</span>
            </div>
            <p className="text-neutral-500 text-[11px] leading-relaxed">
              Open to mid-level Product Designer, Enterprise UX, and AI Design positions.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} Supriya Maurya · All rights reserved.</p>
          <p>Hand-crafted with React &amp; Tailwind CSS · Bangalore, India</p>
        </div>
      </div>
    </footer>
  );
}
