"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

/* Light / dark switch. Stored in localStorage ("theme": "light" | "dark").
   With no saved choice the site follows the visitor's OS setting.
   The <html> class is set before first paint by THEME_INIT_SCRIPT (layout). */

type Theme = "light" | "dark";

export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}})();`;

function subscribe(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  // Follow OS changes while the visitor hasn't picked a theme.
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onOs = (e: MediaQueryListEvent) => {
    try {
      if (localStorage.getItem("theme")) return;
    } catch {}
    document.documentElement.classList.toggle("dark", e.matches);
  };
  mq.addEventListener("change", onOs);
  return () => {
    obs.disconnect();
    mq.removeEventListener("change", onOs);
  };
}
const getSnapshot = (): Theme => (document.documentElement.classList.contains("dark") ? "dark" : "light");
const getServerSnapshot = (): Theme | null => null;

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore<Theme | null>(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next: Theme = document.documentElement.classList.contains("dark") ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#07162C]/10 bg-white text-[#07162C] transition-colors hover:border-[#07162C]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#07162C]/30 ${className}`}
    >
      {theme === null ? (
        <span className="h-4 w-4" aria-hidden />
      ) : isDark ? (
        <Sun size={16} aria-hidden />
      ) : (
        <Moon size={16} aria-hidden />
      )}
    </button>
  );
}
