import { useState, useEffect } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  Loader2Icon,
  LockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  XIcon,
} from "lucide-react";

function JoinSessionModal({ isOpen, onClose, session, onJoin, isJoining }) {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [agreed, setAgreed] = useState(false);

  // reset when modal opens/closes
  useEffect(() => {
    function callUseEffect() {
      if (isOpen) {
        setSelectedTopics([]);
        setPassword("");
        setStep(1);
        setAgreed(false);
      }
    }
    callUseEffect();
  }, [isOpen]);

  if (!isOpen || !session) return null;

  const maxTopicCount = Math.max(
    1,
    Number(session?.questionCount) || session?.problems?.length || 1,
  );
  const isTopicLimitReached = selectedTopics.length >= maxTopicCount;

  const toggleTopic = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : prev.length >= maxTopicCount
          ? prev
          : [...prev, topic],
    );
  };

  const handleNext = () => {
    if (selectedTopics.length === 0) return;
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      handleNext();
      return;
    }
    if (isJoining || !agreed || (requiresPassword && !hasPassword)) return;

    onJoin({
      sessionId: session._id,
      topics: selectedTopics,
      password,
    });
  };

  const isStepOne = step === 1;
  const requiresPassword = Boolean(
    session?.isProtected ||
    session?.passwordEnabled ||
    session?.passwordRequired ||
    session?.requiresPassword,
  );
  const hasPassword = Boolean(password.trim());
  const canContinue =
    selectedTopics.length > 0 &&
    selectedTopics.length <= maxTopicCount &&
    (!requiresPassword || hasPassword);
  const canJoin = !isJoining && agreed && (!requiresPassword || hasPassword);

  const stepLabels = ["Setup", "Confirm"];

  const stepIndicator = (
    <div className="grid grid-cols-2 gap-2">
      {stepLabels.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = step === stepNumber;
        const isDone = step > stepNumber;

        return (
          <div
            key={label}
            className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-2 py-2 text-[10px] font-semibold uppercase tracking-widest ${
              isActive
                ? "border-primary/60 bg-primary/15 text-primary"
                : isDone
                  ? "border-success/40 bg-success/10 text-success"
                  : "border-base-300 bg-base-200/60 text-base-content/55"
            }`}
          >
            <span className="grid size-4 place-items-center rounded-full bg-current/10 text-[10px]">
              {stepNumber}
            </span>
            {label}
          </div>
        );
      })}
    </div>
  );

  const StepOne = (
    <div className="grid h-full min-h-0 grid-cols-1 gap-3 lg:grid-cols-12">
      <section className="rounded-3xl border border-base-300/80 bg-linear-to-br from-base-100 via-base-100 to-base-200/55 p-3.5 lg:col-span-8">
        <div className="mb-3 flex items-center gap-2">
          <SparklesIcon className="size-4 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-widest text-base-content/60">
            Topic Selection
          </p>
        </div>

        <div className="rounded-2xl border border-base-300/60 bg-linear-to-br from-base-100 to-base-100/80 p-3">
          <p className="text-xs text-base-content/55">
            Choose one or more topics to customize the interview.
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {session.available_topic?.map((topic) => {
              const active = selectedTopics.includes(topic);
              const isDisabled = !active && isTopicLimitReached;

              return (
                <button
                  type="button"
                  key={topic}
                  onClick={() => toggleTopic(topic)}
                  disabled={isDisabled}
                  className={`rounded-full border px-4 py-2 text-sm whitespace-nowrap transition ${
                    active
                      ? "border-primary/60 bg-primary/15 text-primary"
                      : "border-base-300 bg-base-100/90 hover:border-primary/50"
                  } ${isDisabled ? "cursor-not-allowed opacity-45 hover:border-base-300" : ""}`}
                >
                  {topic}
                </button>
              );
            })}
          </div>

          <div className="mt-3 rounded-xl border border-base-300 bg-base-100 px-3 py-2.5 text-xs text-base-content/65">
            Selected {selectedTopics.length}/{maxTopicCount} topic
            {maxTopicCount === 1 ? "" : "s"}
            {selectedTopics.length > 0 && (
              <span className="ml-2 font-medium text-base-content">
                {selectedTopics.join(", ")}
              </span>
            )}
          </div>

          {isTopicLimitReached && (
            <p className="mt-2 text-xs font-medium text-warning">
              Max number of questions reached. Unselect a topic to choose
              another.
            </p>
          )}
        </div>

        {requiresPassword && (
          <div className="mt-2.5 rounded-2xl border border-base-300/60 bg-linear-to-br from-base-100 to-base-100/80 p-3">
            <label className="block">
              <span className="mb-1.5 flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-base-content/70">
                <LockIcon className="size-3.5 text-primary" />
                Password
              </span>
              <input
                type="password"
                placeholder="Enter session password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-sm input-bordered w-full rounded-lg border-base-300 bg-base-100 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <span className="mt-1.5 block text-[11px] text-base-content/55">
                Password is required for this session.
              </span>
            </label>
          </div>
        )}
      </section>

      <aside className="rounded-3xl border border-base-300/80 bg-linear-to-br from-primary/8 via-base-100 to-secondary/12 p-3.5 lg:col-span-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-base-content/60">
          Session Access
        </p>
        <ul className="mt-2 space-y-2 text-sm text-base-content/80">
          <li className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2">
            Topics available: {session.available_topic?.length || 0}
          </li>
          <li className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2">
            Max selectable topics: {maxTopicCount}
          </li>
          <li className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2">
            Protection: {requiresPassword ? "Password required" : "Open"}
          </li>
          <li className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2">
            Selected now: {selectedTopics.length}
          </li>
        </ul>
      </aside>
    </div>
  );

  const StepTwo = (
    <div className="grid h-full grid-cols-1 gap-3 lg:grid-cols-12">
      <section className="rounded-3xl border border-base-300/80 bg-linear-to-br from-base-100 via-base-100 to-base-200/55 p-3.5 lg:col-span-8">
        <div className="mb-3 flex items-center gap-2">
          <CheckCircle2Icon className="size-4 text-primary" />
          <h3 className="text-sm font-semibold uppercase tracking-widest text-base-content/65">
            Final Review
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <div className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2">
            <p className="text-xs text-base-content/55">Name</p>
            <p className="font-medium">{session.name || "Interview Session"}</p>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2">
            <p className="text-xs text-base-content/55">Type</p>
            <p className="font-medium capitalize">{session.type || "live"}</p>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2">
            <p className="text-xs text-base-content/55">Duration</p>
            <p className="font-medium">
              {session.duration ? `${session.duration} mins` : "Standard"}
            </p>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2">
            <p className="text-xs text-base-content/55">Problems</p>
            <p className="font-medium">
              {session.problems?.length ||
                session.questionCount ||
                "As assigned"}
            </p>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2 sm:col-span-2">
            <p className="text-xs text-base-content/55">Chosen Topics</p>
            <p className="font-medium">{selectedTopics.join(", ")}</p>
          </div>
        </div>

        <div className="mt-2.5 flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/10 p-4">
          <input
            type="checkbox"
            id="agreeTerms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 checkbox checkbox-primary checkbox-sm"
          />
          <div className="text-sm">
            <label
              htmlFor="agreeTerms"
              className="cursor-pointer font-semibold text-primary"
            >
              I agree to the standard session terms
            </label>
            <p className="mt-1.5 leading-relaxed text-base-content/80">
              By joining this session, I agree to maintain professional conduct,
              avoid unauthorized external help, and acknowledge that coding
              activity may be monitored.
            </p>
          </div>
        </div>
      </section>

      <aside className="rounded-3xl border border-base-300/80 bg-linear-to-br from-primary/10 via-base-100 to-secondary/15 p-3.5 lg:col-span-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-base-content/60">
          Ready Check
        </p>
        <ul className="mt-2 space-y-2 text-sm text-base-content/80">
          <li className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2">
            Topics selected for session focus.
          </li>
          <li className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2">
            Session details reviewed.
          </li>
          <li className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2">
            Terms {agreed ? "accepted" : "pending"}.
          </li>
        </ul>
      </aside>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/55 p-2 backdrop-blur-sm md:p-4">
      <form
        onSubmit={handleSubmit}
        className="relative mx-auto flex h-[min(94dvh,760px)] w-full max-w-5xl flex-col overflow-hidden rounded-[1.75rem] border border-base-300/80 bg-base-100 shadow-2xl"
      >
        <div className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />

        <header className="relative border-b border-base-300/80 bg-base-100/95 px-4 py-3.5 md:px-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-2xl border border-base-300 bg-base-100 p-2.5">
                <ShieldCheckIcon className="size-4.5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-tight md:text-xl">
                  {isStepOne ? "Join Session" : "Confirm and Enter"}
                </h2>
                <p className="mt-0.5 text-xs text-base-content/65 md:text-sm">
                  {isStepOne
                    ? "Choose topics and unlock the interview room."
                    : "Review details and accept terms before joining."}
                </p>
                <div className="mt-2.5">{stepIndicator}</div>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-base-300 p-2 text-base-content/70 transition hover:bg-base-200 hover:text-base-content"
              aria-label="Close join session modal"
            >
              <XIcon className="size-5" />
            </button>
          </div>
        </header>

        <main className="relative min-h-0 flex-1 overflow-hidden px-3 py-3 md:px-4 md:py-4">
          {isStepOne ? StepOne : StepTwo}
        </main>

        <footer className="relative flex items-center justify-between border-t border-base-300/80 bg-base-100/95 px-4 py-3 md:px-5">
          <button
            type="button"
            onClick={step === 2 ? () => setStep(1) : onClose}
            className="inline-flex items-center gap-2 rounded-xl border border-base-300 px-4 py-2 text-sm font-medium text-base-content/80 transition hover:bg-base-200"
          >
            {step === 2 && <ArrowLeftIcon className="size-4" />}
            {step === 2 ? "Back" : "Cancel"}
          </button>

          {isStepOne ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={!canContinue}
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-secondary px-5 py-2 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none"
            >
              Next
              <ArrowRightIcon className="size-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!canJoin}
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-secondary px-5 py-2 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none"
            >
              {isJoining ? (
                <Loader2Icon className="size-4 animate-spin" />
              ) : (
                <CheckCircle2Icon className="size-4" />
              )}
              {isJoining ? "Joining..." : "Enter Session"}
            </button>
          )}
        </footer>
      </form>
    </div>
  );
}

export default JoinSessionModal;
