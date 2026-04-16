import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DARK_THEME = "forest";
const LIGHT_THEME = "caramellatte";

const normalizeTheme = (value) => {
  return value === LIGHT_THEME ? LIGHT_THEME : DARK_THEME;
};

const Theme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return normalizeTheme(localStorage.getItem("theme") || DARK_THEME);
    }
    return DARK_THEME;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const event = new CustomEvent("theme-change", {
      detail: { theme },
    });

    window.dispatchEvent(event);
  }, [theme]);

  const isLight = theme === LIGHT_THEME;

  const toggleTheme = () => {
    setTheme((prev) => (prev === LIGHT_THEME ? DARK_THEME : LIGHT_THEME));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group relative grid size-9 place-items-center rounded-xl border border-base-300 bg-base-200/70 text-base-content/80 shadow-sm transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-md"
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      title={`Switch to ${isLight ? "dark" : "light"} theme`}
    >
      <span className="absolute inset-0 rounded-xl bg-linear-to-br from-primary/10 to-secondary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <Sun
        className={`absolute inset-0 m-auto size-4.5 transition-all duration-500 ${isLight ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
        strokeWidth={2.1}
      />
      <Moon
        className={`absolute inset-0 m-auto size-4.5 transition-all duration-500 ${isLight ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"}`}
        strokeWidth={2.1}
      />
    </button>
  );
};

export default Theme;
