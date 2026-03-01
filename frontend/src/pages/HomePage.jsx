import { Link } from "react-router";
import Theme from "../components/Theme";
import {
  Gem,
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      {/* NAVBAR */}
      <nav className="bg-base-100/70 backdrop-blur-xl border-b border-base-300 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to={"/"}
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
          >
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-sm">
              <Gem className="size-5 text-primary-content" />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono">
                Valexia
              </span>
              <span className="text-[10px] opacity-60 font-medium">
                Code Together
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {/* AUTH BUTTON */}
            <SignInButton mode="modal">
              <button className="btn btn-primary btn-sm shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200">
                Get Started
                <ArrowRightIcon className="size-4 ml-1" />
              </button>
            </SignInButton>

            {/* Theme */}
            <Theme />
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <div className="badge badge-primary gap-2 shadow-sm text-sm">
              <ZapIcon className="size-3.5" />
              Real-time Collaboration
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Code Together,
              </span>
              <br />
              <span className="text-base-content">Learn Together</span>
            </h1>

            <p className="text-base md:text-lg opacity-70 max-w-lg leading-relaxed">
              The ultimate platform for collaborative coding interviews and pair
              programming. Connect face-to-face, code in real-time, and ace your
              technical interviews.
            </p>

            {/* FEATURE PILLS */}
            <div className="flex flex-wrap gap-2">
              <div className="badge badge-outline gap-2 text-sm">
                <CheckIcon className="size-3.5 text-success" />
                Live Video Chat
              </div>

              <div className="badge badge-outline gap-2 text-sm">
                <CheckIcon className="size-3.5 text-success" />
                Code Editor
              </div>

              <div className="badge badge-outline gap-2 text-sm">
                <CheckIcon className="size-3.5 text-success" />
                Multi-Language
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-3 pt-2">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-md shadow-sm hover:shadow-lg transition-all duration-300">
                  Start Coding Now
                  <ArrowRightIcon className="size-4 ml-1" />
                </button>
              </SignInButton>

              <button className="btn btn-outline btn-md">
                <VideoIcon className="size-4 mr-1" />
                Watch Demo
              </button>
            </div>

            {/* STATS */}
            <div className="stats stats-vertical lg:stats-horizontal bg-base-200 border border-base-300 shadow-sm">
              <div className="stat py-3">
                <div className="stat-value text-primary text-2xl">10K+</div>
                <div className="stat-title opacity-70 text-sm">
                  Active Users
                </div>
              </div>

              <div className="stat py-3">
                <div className="stat-value text-secondary text-2xl">50K+</div>
                <div className="stat-title opacity-70 text-sm">Sessions</div>
              </div>

              <div className="stat py-3">
                <div className="stat-value text-accent text-2xl">99.9%</div>
                <div className="stat-title opacity-70 text-sm">Uptime</div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl opacity-30 rounded-2xl"></div>

            <img
              src="/hero.png"
              alt="CodeCollab Platform"
              className="relative w-full rounded-2xl border border-base-300 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need to{" "}
            <span className="text-primary font-mono">Succeed</span>
          </h2>

          <p className="text-base opacity-70 max-w-xl mx-auto">
            Powerful features designed to make your coding interviews seamless
            and productive
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="card bg-base-200 border border-base-300 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="card-body items-center text-center">
              <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                <VideoIcon className="size-6 text-primary" />
              </div>

              <h3 className="card-title text-lg">HD Video Call</h3>
              <p className="opacity-70 text-sm">
                Crystal clear video and audio for seamless communication during
                interviews
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="card bg-base-200 border border-base-300 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="card-body items-center text-center">
              <div className="size-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-3">
                <Code2Icon className="size-6 text-secondary" />
              </div>

              <h3 className="card-title text-lg">Live Code Editor</h3>
              <p className="opacity-70 text-sm">
                Collaborate in real-time with syntax highlighting and multiple
                language support
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="card bg-base-200 border border-base-300 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="card-body items-center text-center">
              <div className="size-14 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
                <UsersIcon className="size-6 text-accent" />
              </div>

              <h3 className="card-title text-lg">Easy Collaboration</h3>
              <p className="opacity-70 text-sm">
                Share your screen, discuss solutions, and learn from each other
                in real-time
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
