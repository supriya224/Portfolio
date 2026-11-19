import {
  BriefcaseBusiness,
  DownloadCloud,
  HomeIcon,
  Moon,
  Star,
  Sun
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ACTIVE_LINK_CLASS =
  "bg-neutral-900 text-white shadow-sm dark:bg-white dark:text-neutral-950";
const INACTIVE_LINK_CLASS =
  "text-neutral-600 hover:bg-black/[0.05] hover:text-black dark:text-neutral-400 dark:hover:bg-white/[0.08] dark:hover:text-white";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggleTheme() {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  const isHomeActive = location.pathname === "/";
  const isWorkActive = location.pathname === "/work";
  const isSelectedWorkActive = location.pathname === "/selected-work";

  const resumeUrl =
    "https://drive.google.com/file/d/1NUZyCR1y4WqBA25RMbUZXfOT6MMC8GjE/view?usp=sharing";

  return (
    <aside
      aria-label="Bottom Navigation Bar"
      className="fixed bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-50 max-w-[94vw] transition-all duration-300">
      <nav className="flex items-center gap-1 sm:gap-1.5 rounded-full border p-1.5 sm:p-2 backdrop-blur-xl shadow-2xl transition-all duration-300 border-black/10 bg-white/90 text-neutral-800 shadow-black/10 dark:border-white/15 dark:bg-[#121212]/90 dark:text-neutral-200 dark:shadow-black/70">
        {/* Home */}
        <Link
          to="/"
          className={`group flex items-center gap-2 rounded-full px-3 py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${isHomeActive ? ACTIVE_LINK_CLASS : INACTIVE_LINK_CLASS
            }`}>
          <HomeIcon
            aria-hidden="true"
            className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:scale-110"
            strokeWidth={1.8}
          />
          <span>Home</span>
        </Link>

        {/* Work */}
        <Link
          to="/work"
          className={`group flex items-center gap-2 rounded-full px-3 py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${isWorkActive ? ACTIVE_LINK_CLASS : INACTIVE_LINK_CLASS
            }`}>
          <BriefcaseBusiness
            aria-hidden="true"
            className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:scale-110"
            strokeWidth={1.8}
          />
          <span>Work</span>
        </Link>

        {/* Selected Work */}
        <Link
          to="/selected-work"
          className={`group flex items-center gap-2 rounded-full px-3 py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${isSelectedWorkActive ? ACTIVE_LINK_CLASS : INACTIVE_LINK_CLASS
            }`}>
          <Star
            aria-hidden="true"
            className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:scale-110"
            strokeWidth={1.8}
          />
          <span className="hidden sm:inline">Selected Work</span>
          <span className="sm:hidden">Selected</span>
        </Link>

        {/* Divider */}
        <span
          className="mx-1 h-5 w-px bg-black/10 dark:bg-white/15"
          aria-hidden="true"
        />

        {/* Resume */}
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Resume"
          title="View Resume"
          className="group flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-neutral-600 transition-all duration-200 hover:bg-black/[0.05] hover:text-black dark:text-neutral-400 dark:hover:bg-white/[0.08] dark:hover:text-white">
          <DownloadCloud
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-110"
            strokeWidth={1.8}
          />
        </a>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          className="group flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-neutral-600 transition-all duration-200 hover:bg-black/[0.05] hover:text-black dark:text-neutral-400 dark:hover:bg-white/[0.08] dark:hover:text-white">
          {darkMode ? (
            <Sun
              className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 text-amber-400"
              strokeWidth={1.8}
            />
          ) : (
            <Moon
              className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 text-neutral-700"
              strokeWidth={1.8}
            />
          )}
        </button>
      </nav>
    </aside>
  );
}