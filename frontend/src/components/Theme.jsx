import { useEffect, useState } from "react";
import { themes } from "../lib/themes.js";
import { CheckCircle, Palette, ChevronDown } from "lucide-react";

const Theme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "forest";
    }
    return "forest";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="group flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-accent/10 text-accent hover:bg-accent hover:text-accent-content transition-all duration-200 cursor-pointer"
      >
        <Palette className="size-5 md:hidden" />

        <div className="hidden md:flex items-center gap-1">
          <span className="font-medium">Theme</span>
          <ChevronDown className="size-3.5 transition-transform duration-200 group-focus:rotate-180" />
        </div>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-200 mt-1 rounded-md z-10 w-44 p-1.5 shadow-xl"
      >
        {themes.map((themeObj) => (
          <li key={themeObj.value}>
            <button
              onClick={() => setTheme(themeObj.value)}
              className="flex items-center justify-between w-full px-3 py-1.5 rounded-md text-sm hover:bg-primary/80 hover:text-primary-content"
            >
              <span>{themeObj.name}</span>
              {theme === themeObj.value && <CheckCircle size={16} />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Theme;
