import {
  BriefcaseBusiness,
  DownloadCloud,
  HomeIcon,
  Moon,
  Star,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
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
  const isSelectedWorkActive =
    location.pathname === "/selected-work";

  return (
    <header className="relative z-50 bg-[#f7f5f2] text-neutral-950 transition-colors duration-300 dark:bg-[#111111] dark:text-white">
      <div className="mx-auto w-full max-w-[1200px] border-x border-black/[0.08] dark:border-white/[0.08]">

        <nav className="flex min-h-[88px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* Navigation */}
          <div className="flex items-center gap-6 sm:gap-8 lg:gap-10">

            {/* Home */}
            <Link
              to="/"
              className={`group relative flex items-center gap-2 text-sm transition-colors duration-200 sm:text-[16px] ${
                isHomeActive
                  ? "font-medium text-neutral-900 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-950 dark:text-neutral-500 dark:hover:text-white"
              }`}
            >
              <HomeIcon
                aria-hidden="true"
                className="h-[17px] w-[17px]"
                strokeWidth={1.6}
              />

              <span>Home</span>

              {isHomeActive && (
                <span className="absolute -bottom-[31px] left-0 h-px w-full bg-neutral-950 dark:bg-white sm:-bottom-[32px]" />
              )}
            </Link>


            {/* Work */}
            <Link
              to="/work"
              className={`group relative flex items-center gap-2 text-sm transition-colors duration-200 sm:text-[16px] ${
                isWorkActive
                  ? "font-medium text-neutral-950 dark:text-white"
                  : "text-neutral-400 hover:text-neutral-950 dark:text-neutral-500 dark:hover:text-white"
              }`}
            >
              <BriefcaseBusiness
                aria-hidden="true"
                className="h-[17px] w-[17px]"
                strokeWidth={1.6}
              />

              <span>Work</span>

              {isWorkActive && (
                <span className="absolute -bottom-[31px] left-0 h-px w-full bg-neutral-950 dark:bg-white sm:-bottom-[32px]" />
              )}
            </Link>


            {/* Selected Work */}
            <Link
              to="/selected-work"
              className={`group relative flex items-center gap-2 text-sm transition-colors duration-200 sm:text-[16px] ${
                isSelectedWorkActive
                  ? "font-medium text-neutral-950 dark:text-white"
                  : "text-neutral-400 hover:text-neutral-950 dark:text-neutral-500 dark:hover:text-white"
              }`}
            >
              <Star
                aria-hidden="true"
                className="h-[17px] w-[17px]"
                strokeWidth={1.6}
              />

              <span className="hidden sm:inline">
                Selected Work
              </span>

              <span className="sm:hidden">
                Selected
              </span>

              {isSelectedWorkActive && (
                <span className="absolute -bottom-[31px] left-0 h-px w-full bg-neutral-950 dark:bg-white sm:-bottom-[32px]" />
              )}
            </Link>

          </div>


          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">

            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/1QL32lJG0s-ZX1a4QPFa6FSlqkQquSijF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View resume"
              className="group flex h-9 w-9 items-center justify-center rounded-full text-neutral-400 transition-all duration-200 hover:bg-black/[0.05] hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-white/[0.08] dark:hover:text-white"
            >
              <DownloadCloud
                className="h-[18px] w-[18px] transition-transform duration-200 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </a>


            {/* Theme */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="group flex h-9 w-9 items-center justify-center rounded-full text-neutral-400 transition-all duration-200 hover:bg-black/[0.05] hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-white/[0.08] dark:hover:text-white"
            >
              {darkMode ? (
                <Sun
                  className="h-[18px] w-[18px] transition-transform duration-300 group-hover:rotate-45"
                  strokeWidth={1.5}
                />
              ) : (
                <Moon
                  className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-rotate-12"
                  strokeWidth={1.5}
                />
              )}
            </button>

          </div>

        </nav>
      </div>
    </header>
  );
}