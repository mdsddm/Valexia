import { useEffect, useState } from "react";
import { themes } from "../lib/themes.js";
import {
  CheckCheckIcon,
  CheckCircle,
  CheckIcon,
  ChevronDown,
} from "lucide-react";
const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "forest");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dropdown dropdown-center">
      <div
        tabIndex={0}
        role="button"
        className="flex items-center gap-2.5
             px-4 py-2.5
             rounded-lg
             bg-accent/10 text-accent
             hover:bg-accent hover:text-accent-content
             transition-all duration-200
             cursor-pointer"
      >
        <span className="font-medium">Theme</span>
        <ChevronDown className="size-4 transition-transform duration-200" />
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-300 mt-1 rounded-box z-1 w-52 p-2 shadow-2xl"
      >
        {themes.map((themeObj) => {
          return (
            <li
              className="hover:bg-primary/80 hover:text-primary-content rounded-box"
              key={themeObj.value}
            >
              <button
                onClick={() => setTheme(themeObj.value)}
                className="flex items-center justify-between w-full px-6 py-2 rounded-box"
              >
                <span>{themeObj.name}</span>

                {theme === themeObj.value && (
                  <CheckCircle size={18} className="ml-2" />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Theme;
