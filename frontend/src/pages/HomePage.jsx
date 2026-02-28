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

          <div className="flex gap-12">
            {/* AUTH BUTTON */}
            <SignInButton mode="modal">
              <button className="btn btn-primary btn-sm md:btn-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200">
                Get Started
                <ArrowRightIcon className="size-4 ml-1" />
              </button>
            </SignInButton>

            {/* Theme component */}
            <Theme />
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="badge badge-primary badge-lg gap-2 shadow-sm">
              <ZapIcon className="size-4" />
              Real-time Collaboration
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Code Together,
              </span>
              <br />
              <span className="text-base-content">Learn Together</span>
            </h1>

            <p className="text-lg md:text-xl opacity-70 max-w-xl leading-relaxed">
              The ultimate platform for collaborative coding interviews and pair
              programming. Connect face-to-face, code in real-time, and ace your
              technical interviews.
            </p>

            {/* FEATURE PILLS */}
            <div className="flex flex-wrap gap-3">
              <div className="badge badge-outline badge-lg gap-2">
                <CheckIcon className="size-4 text-success" />
                Live Video Chat
              </div>

              <div className="badge badge-outline badge-lg gap-2">
                <CheckIcon className="size-4 text-success" />
                Code Editor
              </div>

              <div className="badge badge-outline badge-lg gap-2">
                <CheckIcon className="size-4 text-success" />
                Multi-Language
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-4">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-lg shadow-md hover:shadow-xl transition-all duration-300">
                  Start Coding Now
                  <ArrowRightIcon className="size-5 ml-1" />
                </button>
              </SignInButton>

              <button className="btn btn-outline btn-lg backdrop-blur-md">
                <VideoIcon className="size-5 mr-1" />
                Watch Demo
              </button>
            </div>

            {/* STATS */}
            <div className="stats stats-vertical lg:stats-horizontal bg-base-200 border border-base-300 shadow-md transition-colors duration-300">
              <div className="stat">
                <div className="stat-value text-primary">10K+</div>
                <div className="stat-title opacity-70">Active Users</div>
              </div>

              <div className="stat">
                <div className="stat-value text-secondary">50K+</div>
                <div className="stat-title opacity-70">Sessions</div>
              </div>

              <div className="stat">
                <div className="stat-value text-accent">99.9%</div>
                <div className="stat-title opacity-70">Uptime</div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl opacity-30 rounded-3xl"></div>

            <img
              src="/hero.png"
              alt="CodeCollab Platform"
              className="relative w-full rounded-3xl border border-base-300 shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-bold">
            Everything You Need to{" "}
            <span className="text-primary font-mono">Succeed</span>
          </h2>

          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Powerful features designed to make your coding interviews seamless
            and productive
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="card bg-base-200 border border-base-300 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <VideoIcon className="size-8 text-primary" />
              </div>

              <h3 className="card-title">HD Video Call</h3>
              <p className="opacity-70">
                Crystal clear video and audio for seamless communication during
                interviews
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="card bg-base-200 border border-base-300 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                <Code2Icon className="size-8 text-secondary" />
              </div>

              <h3 className="card-title">Live Code Editor</h3>
              <p className="opacity-70">
                Collaborate in real-time with syntax highlighting and multiple
                language support
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="card bg-base-200 border border-base-300 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                <UsersIcon className="size-8 text-accent" />
              </div>

              <h3 className="card-title">Easy Collaboration</h3>
              <p className="opacity-70">
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
