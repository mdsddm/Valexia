import React from "react";
import { Link, useLocation } from "react-router";
import Theme from "../components/Theme";
import { Gem, BookOpenIcon, LayoutDashboardIcon } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => path === location.pathname;

  return (
    <nav className="bg-base-100/70 backdrop-blur-xl border-b border-base-300 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to={"/"}
          className="flex items-center gap-2 shri hover:scale-105 transition-transform duration-200"
        >
          <div className="size-8 rounded-lg bg-linear-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-sm">
            <Gem className="size-5 text-primary-content" />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="font-bold text-lg bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono">
              Valexia
            </span>
            <span className="text-[10px] opacity-60 font-medium">
              Code Together
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          {/* PROBLEMS */}
          <Link
            to={"/problems"}
            className={`px-3 py-2 rounded-md transition-all duration-200
            ${
              isActive("/problems")
                ? "bg-primary text-primary-content"
                : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
            }`}
          >
            <div className="flex items-center gap-2">
              <BookOpenIcon className="size-4" />
              <span className="font-medium hidden sm:inline text-sm">
                Problems
              </span>
            </div>
          </Link>

          {/* DASHBOARD */}
          <Link
            to={"/dashboard"}
            className={`px-3 py-2 rounded-md transition-all duration-200
            ${
              isActive("/dashboard")
                ? "bg-primary text-primary-content"
                : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
            }`}
          >
            <div className="flex items-center gap-2">
              <LayoutDashboardIcon className="size-4" />
              <span className="font-medium hidden sm:inline text-sm">
                Dashboard
              </span>
            </div>
          </Link>

          <Theme />
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
