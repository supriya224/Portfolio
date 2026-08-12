import {
  BriefcaseBusiness,
  HomeIcon,
  Sun,
  Moon,
  DownloadCloud,
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

  const isHomeActive = location.pathname === "/";
  const isWorkActive = location.pathname === "/work";

  const toggleTheme = () => {
    const nextTheme = !darkMode;

    setDarkMode(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="w-full bg-[#f7f5f2] text-neutral-950 transition-colors duration-300 dark:bg-[#111111] dark:text-neutral-100">
      <nav className="mx-auto flex w-full max-w-[820px] items-center justify-between px-5 py-5 sm:px-8 sm:py-6 ">
        
        {/* Navigation */}
        <div className="flex min-w-0 items-center gap-5 sm:gap-8">
          
          {/* Home */}
          <Link
            to="/"
            className={`flex shrink-0 items-center gap-2 text-[15px] transition-colors sm:text-[16px] ${
              isHomeActive
                ? "font-medium text-neutral-950 dark:text-white"
                : "text-neutral-400 hover:text-neutral-950 dark:text-neutral-500 dark:hover:text-white"
            }`}
          >
            <HomeIcon
              className="h-4 w-4 shrink-0"
              strokeWidth={1.7}
            />

            <span>Home</span>
          </Link>

          {/* Work */}
          <Link
            to="/work"
            className={`flex shrink-0 items-center gap-2 text-[15px] transition-colors sm:text-[16px] ${
              isWorkActive
                ? "font-medium text-neutral-950 dark:text-white"
                : "text-neutral-400 hover:text-neutral-950 dark:text-neutral-500 dark:hover:text-white"
            }`}
          >
            <BriefcaseBusiness
              className="h-4 w-4 shrink-0"
              strokeWidth={1.7}
            />

            <span>Work</span>
          </Link>
        </div>

        {/* Right controls */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          
          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1pI_WUJKX30BcneKcCGq9eTQ0QN1sdKlj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download resume"
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-black/5 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <DownloadCloud
              className="h-[18px] w-[18px]"
              strokeWidth={1.7}
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
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-black/5 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {darkMode ? (
              <Sun
                className="h-[18px] w-[18px] text-orange-300"
                strokeWidth={1.7}
              />
            ) : (
              <Moon
                className="h-[18px] w-[18px]"
                strokeWidth={1.7}
              />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}