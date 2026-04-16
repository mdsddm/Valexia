import { useUser } from "@clerk/clerk-react";
import {
  ArrowRightIcon,
  CalendarClock,
  Gem,
  Sparkles,
  ZapIcon,
} from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();
  const displayName = [user?.firstName, user?.lastName]
    .filter(Boolean)
    .join(" ")
    .trim();

  return (
    <section className="relative overflow-hidden rounded-3xl border border-base-300 bg-linear-to-br from-base-100 via-base-100 to-base-200/70 px-6 py-6 md:px-8 md:py-7 shadow-sm">
      <div className="pointer-events-none absolute -top-16 -right-14 h-52 w-52 rounded-full bg-primary/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-secondary/12 blur-3xl" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-base-content/60">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Interview Workspace
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-base-content">
              Welcome back{displayName ? `, ${displayName}` : ""}.
            </h1>
            <p className="max-w-2xl text-sm md:text-base text-base-content/70 leading-relaxed">
              Start a focused coding session, assess real-world problem solving,
              and keep candidate feedback structured from first question to
              final decision.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <div className="inline-flex items-center gap-2 rounded-xl border border-base-300 bg-base-100 px-3 py-2 text-xs font-medium text-base-content/75">
              <Gem className="h-4 w-4 text-secondary" />
              Candidate-ready flow
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-base-300 bg-base-100 px-3 py-2 text-xs font-medium text-base-content/75">
              <CalendarClock className="h-4 w-4 text-primary" />
              Live and scheduled sessions
            </div>
          </div>
        </div>

        <div className="flex items-end">
          <button
            onClick={onCreateSession}
            className="group inline-flex items-center gap-3 rounded-2xl bg-linear-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
          >
            <ZapIcon className="h-4.5 w-4.5" />
            Start New Session
            <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
