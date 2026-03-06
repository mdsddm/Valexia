import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, Gem, ZapIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center">
              <Gem className="w-7 h-7 text-white" />
            </div>

            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Welcome back,{" "}
                <span className="hidden lg:inline">
                  {user?.firstName || "there"} {user?.lastName || ""}
                </span>
                !
              </h1>

              <p className="ml-1 text-base md:text-lg text-base-content/60">
                Ready to level up your coding skills?
              </p>
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={onCreateSession}
            className="group flex items-center gap-3 px-6 py-3 bg-linear-to-r from-primary to-secondary text-white font-semibold rounded-xl transition-all duration-200 hover:opacity-90"
          >
            <ZapIcon className="w-5 h-5" />
            <span>Create Session</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
