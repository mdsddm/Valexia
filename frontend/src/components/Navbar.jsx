import React from "react";
import { Link, useLocation } from "react-router";
import Theme from "../components/Theme";
import { Gem, BookOpenIcon, LayoutDashboardIcon } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";
const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => path === location.pathname;
  return (
    <nav className="bg-base-100/70 backdrop-blur-xl border-b border-base-300 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to={"/"}
          className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
        >
          <div className="size-10 rounded-xl bg-linear-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-md">
            <Gem className="size-7 text-primary-content" />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="font-black text-xl bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider">
              Valexia
            </span>
            <span className="text-xs opacity-60 font-medium">
              Code Together
            </span>
          </div>
        </Link>

        <div className="flex item-center gap-12">
          <div className="flex items-center gap-6">
            {/* PROBLEMS PAGE LINK */}
            <Link
              to={"/problems"}
              className={`px-4 py-2.5 rounded-lg transition-all duration-200 hover:bg-primary/90 hover:text-primary-content/90
                 ${isActive("/problems") ? "bg-primary text-primary-content" : "hover:bg-base-200 text-base-content/70 hover:text-base-content"}`}
            >
              <div className="flex items-center gap-2.5">
                <BookOpenIcon className="size-5" />
                <span className="font-medium hidden sm:inline">Problems</span>
              </div>
            </Link>
            {/* DASHBOARD PAGE LINK */}
            <Link
              to={"/dashboard"}
              className={`px-4 py-2.5 rounded-lg transition-all duration-200
                hover:bg-primary/90 hover:text-primary-content/90
                 ${isActive("/dashboard") ? "bg-primary text-primary-content" : "hover:bg-base-200 text-base-content/70 hover:text-base-content"}`}
            >
              <div className="flex items-center gap-2.5">
                <LayoutDashboardIcon className="size-5" />
                <span className="font-medium hidden sm:inline">Dashbord</span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {/* Theme component */}
            <Theme />
            {/* User Button */}
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
