import { useEffect, useState } from "react";
import {
  CalendarClockIcon,
  CheckCircle2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  Code2Icon,
  ListChecksIcon,
  Loader2Icon,
  LockIcon,
  PlusIcon,
  SparklesIcon,
  XIcon,
} from "lucide-react";
import { TOPIC_GROUPS } from "../data/problems.js";

const QUESTION_DIFFICULTIES = ["easy", "medium", "hard"];

function formatDifficultyLabel(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (isOpen) {
      const frame = window.requestAnimationFrame(() => {
        setStep(1);
      });

      return () => window.cancelAnimationFrame(frame);
    }

    return undefined;
  }, [isOpen]);

  const selectedTopics = roomConfig.topics || [];
  const dataStructureTopics = TOPIC_GROUPS["Data Structures"] || [];
  const algorithmTopics = TOPIC_GROUPS.Algorithms || [];

  const questionCount = Math.max(1, Number(roomConfig.questionCount) || 1);
  const questionDifficulties = Array.from(
    { length: questionCount },
    (_, index) => roomConfig.questionDifficulties?.[index] || "medium",
  );
  const isScheduled = roomConfig.type === "scheduled";

  const canGoNextFromBasics =
    selectedTopics.length > 0 &&
    selectedTopics.length <= questionCount &&
    (!isScheduled || Boolean(roomConfig.scheduledAt)) &&
    (!roomConfig.passwordEnabled || Boolean(roomConfig.password));

  const canGoNextFromDifficulty = questionDifficulties.length === questionCount;

  const canSubmit =
    !isCreating &&
    selectedTopics.length > 0 &&
    selectedTopics.length <= questionCount &&
    (!isScheduled || Boolean(roomConfig.scheduledAt)) &&
    (!roomConfig.passwordEnabled || Boolean(roomConfig.password));

  const isTopicLimitReached = selectedTopics.length >= questionCount;

  const stepLabels = ["Setup", "Difficulty", "Review"];

  const updateRoomConfig = (partial) => {
    setRoomConfig((prev) => ({ ...prev, ...partial }));
  };

  const toggleTopic = (topic) => {
    if (!topic) return;

    setRoomConfig((prev) => {
      const current = prev.topics || [];
      const exists = current.includes(topic);
      const maxTopics = Math.max(1, Number(prev.questionCount) || 1);

      if (!exists && current.length >= maxTopics) {
        return prev;
      }

      return {
        ...prev,
        topics: exists
          ? current.filter((item) => item !== topic)
          : [...current, topic],
      };
    });
  };

  const handleQuestionCountChange = (nextCount) => {
    setRoomConfig((prev) => {
      const count = Math.max(1, Number(nextCount) || 1);
      const currentPlan = Array.isArray(prev.questionDifficulties)
        ? prev.questionDifficulties
        : [];

      return {
        ...prev,
        questionCount: count,
        topics: (prev.topics || []).slice(0, count),
        questionDifficulties: Array.from(
          { length: count },
          (_, index) => currentPlan[index] || "medium",
        ),
      };
    });
  };

  const handleQuestionDifficultyChange = (index, value) => {
    setRoomConfig((prev) => {
      const count = Math.max(1, Number(prev.questionCount) || 1);
      const currentPlan = Array.isArray(prev.questionDifficulties)
        ? prev.questionDifficulties
        : [];

      return {
        ...prev,
        questionDifficulties: Array.from({ length: count }, (_, itemIndex) =>
          itemIndex === index ? value : currentPlan[itemIndex] || "medium",
        ),
      };
    });
  };

  const applyDifficultyPreset = (preset) => {
    const map = {
      balanced: ["easy", "medium", "medium", "hard", "hard"],
      gradual: ["easy", "easy", "medium", "hard", "hard"],
      challenge: ["medium", "hard", "hard", "hard", "hard"],
    };

    const source = map[preset] || map.balanced;
    setRoomConfig((prev) => ({
      ...prev,
      questionDifficulties: Array.from(
        { length: questionCount },
        (_, index) => source[index] || "medium",
      ),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (step === 1 && canGoNextFromBasics) {
      setStep(2);
      return;
    }

    if (step === 2 && canGoNextFromDifficulty) {
      setStep(3);
      return;
    }

    if (step === 3 && canSubmit) {
      onCreateRoom();
    }
  };

  const goBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const isStepOne = step === 1;
  const isStepTwo = step === 2;
  const isStepThree = step === 3;

  const stepIndicator = (
    <div className="grid grid-cols-3 gap-2">
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
    <div className="grid h-full min-h-0 grid-cols-1 gap-3 lg:grid-cols-2">
      <section className="h-full min-h-0 rounded-3xl border border-base-300/80 bg-linear-to-br from-base-100 via-base-100 to-base-200/55 p-3.5">
        <div className="mb-3 flex items-center gap-2">
          <SparklesIcon className="size-4 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-widest text-base-content/60">
            Session Blueprint
          </p>
        </div>

        <div className="flex h-[calc(100%-1.75rem)] min-h-0 flex-col overflow-y-auto">
          {/* Session Name */}
          <div className="rounded-2xl border border-base-300/60 bg-linear-to-br from-base-100 to-base-100/80 p-3 mb-2.5">
            <label className="block">
              <span className="mb-1.5 block text-small font-semibold uppercase tracking-widest text-base-content/70">
                Session Name
              </span>
              <input
                type="text"
                placeholder="React Frontend Interview"
                value={roomConfig.name || ""}
                onChange={(event) =>
                  updateRoomConfig({ name: event.target.value })
                }
                className="input input-m input-bordered w-full rounded-lg border-base-300 bg-base-100 text-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </label>
          </div>

          {/* Session Type Toggle */}
          <div className="rounded-2xl border border-base-300/60 bg-linear-to-br from-base-100 to-base-100/80 p-3 mb-2.5">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-base-content/70">
              Session Type
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => updateRoomConfig({ type: "live" })}
                className={`rounded-lg border px-2.5 py-2 text-xs font-semibold transition flex items-center justify-center gap-1.5 ${
                  roomConfig.type === "live"
                    ? "border-primary bg-primary/20 text-primary"
                    : "border-base-300 bg-base-100 text-base-content/60 hover:border-primary/40"
                }`}
              >
                <Code2Icon className="size-4" />
                Live
              </button>
              <button
                type="button"
                onClick={() => updateRoomConfig({ type: "scheduled" })}
                className={`rounded-lg border px-2.5 py-2 text-xs font-semibold transition flex items-center justify-center gap-1.5 ${
                  roomConfig.type === "scheduled"
                    ? "border-primary bg-primary/20 text-primary"
                    : "border-base-300 bg-base-100 text-base-content/60 hover:border-primary/40"
                }`}
              >
                <CalendarClockIcon className="size-4" />
                Scheduled
              </button>
            </div>
          </div>

          {/* Calendar (shows only when Scheduled) */}
          {isScheduled && (
            <div className="rounded-2xl border border-base-300/60 bg-linear-to-br from-base-100 to-base-100/80 p-3 mb-2.5">
              <label className="block">
                <span className="mb-1.5 flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-base-content/70">
                  <CalendarClockIcon className="size-3.5 text-primary" />
                  Date & Time
                </span>
                <input
                  type="datetime-local"
                  value={roomConfig.scheduledAt || ""}
                  onChange={(event) =>
                    updateRoomConfig({ scheduledAt: event.target.value })
                  }
                  className="input input-sm input-bordered w-full rounded-lg border-base-300 bg-base-100 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </label>
            </div>
          )}

          {/* Duration & Questions */}
          <div className="grid grid-cols-2 gap-2.5 mb-2.5">
            <div className="rounded-2xl border border-base-300/60 bg-linear-to-br from-base-100 to-base-100/80 p-3">
              <label className="block">
                <span className="mb-1.5 flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-base-content/70">
                  <ClockIcon className="size-3.5 text-primary" />
                  Duration
                </span>
                <select
                  value={roomConfig.duration}
                  onChange={(event) =>
                    updateRoomConfig({ duration: Number(event.target.value) })
                  }
                  className="select select-sm select-bordered w-full rounded-lg border-base-300 bg-base-100 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {[15, 30, 45, 60, 90].map((duration) => (
                    <option key={duration} value={duration}>
                      {duration}m
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="rounded-2xl border border-base-300/60 bg-linear-to-br from-base-100 to-base-100/80 p-3">
              <label className="block">
                <span className="mb-1.5 flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-base-content/70">
                  <ListChecksIcon className="size-3.5 text-primary" />
                  Questions
                </span>
                <select
                  value={roomConfig.questionCount}
                  onChange={(event) =>
                    handleQuestionCountChange(Number(event.target.value))
                  }
                  className="select select-sm select-bordered w-full rounded-lg border-base-300 bg-base-100 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {[1, 2, 3, 4, 5].map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {/* Password */}
          <div className="rounded-2xl border border-base-300/60 bg-linear-to-br from-base-100 to-base-100/80 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-base-content/70">
                <LockIcon className="size-3.5 text-primary" />
                Password
              </span>
              <input
                type="checkbox"
                checked={!!roomConfig.passwordEnabled}
                onChange={(event) =>
                  setRoomConfig((prev) => ({
                    ...prev,
                    passwordEnabled: event.target.checked,
                    password: "",
                  }))
                }
                className="toggle toggle-xs toggle-primary"
              />
            </div>
            {roomConfig.passwordEnabled && (
              <input
                type="password"
                placeholder="Password"
                value={roomConfig.password || ""}
                onChange={(event) =>
                  updateRoomConfig({ password: event.target.value })
                }
                className="input input-sm input-bordered w-full rounded-lg border-base-300 bg-base-100 text-sm placeholder-base-content/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            )}
          </div>
        </div>
      </section>

      <section className="flex h-full min-h-0 flex-col rounded-3xl border border-base-300/80 bg-linear-to-br from-base-100 via-base-100 to-base-200/55 p-3.5">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-widest text-base-content/60">
            Topic Tiles
          </p>
          <span className="rounded-full border border-base-300 bg-base-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-base-content/60">
            {selectedTopics.length}/{questionCount} picked
          </span>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden">
          <div className="flex min-h-0 flex-2 flex-col overflow-hidden rounded-2xl border border-base-300/90 bg-base-100/70 p-2.5">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-base-content/60">
              Data Structures
            </p>
            <div className="flex min-h-0 flex-1 flex-wrap items-start content-start gap-2 overflow-y-auto pr-1">
              {dataStructureTopics.map((topic) => {
                const isSelected = selectedTopics.includes(topic);
                const isDisabled = !isSelected && isTopicLimitReached;

                return (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => toggleTopic(topic)}
                    disabled={isDisabled}
                    className={`rounded-full border px-4 py-2.5 text-center text-sm whitespace-nowrap transition ${
                      isSelected
                        ? "border-primary/60 bg-primary/15 text-primary"
                        : "border-base-300 bg-base-100/90 hover:border-primary/50"
                    } ${isDisabled ? "cursor-not-allowed opacity-45 hover:border-base-300" : ""}`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex min-h-0 flex-3 flex-col overflow-hidden rounded-2xl border border-base-300/90 bg-base-100/70 p-2.5">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-base-content/60">
              Algorithms
            </p>
            <div className="flex min-h-0 flex-1 flex-wrap items-start content-start gap-2 overflow-y-auto pr-1">
              {algorithmTopics.map((topic) => {
                const isSelected = selectedTopics.includes(topic);
                const isDisabled = !isSelected && isTopicLimitReached;

                return (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => toggleTopic(topic)}
                    disabled={isDisabled}
                    className={`rounded-full border px-4 py-2.5 text-center text-sm whitespace-nowrap transition ${
                      isSelected
                        ? "border-primary/60 bg-primary/15 text-primary"
                        : "border-base-300 bg-base-100/90 hover:border-primary/50"
                    } ${isDisabled ? "cursor-not-allowed opacity-45 hover:border-base-300" : ""}`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const StepTwo = (
    <div className="grid h-full grid-cols-1 gap-3 lg:grid-cols-12">
      <section className="rounded-3xl border border-base-300/80 bg-linear-to-br from-base-100 via-base-100 to-base-200/55 p-3.5 lg:col-span-8">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-base-content/60">
              Difficulty Planner
            </p>
            <p className="mt-1 text-xs text-base-content/55">
              Set the level for each question slot.
            </p>
          </div>
          <span className="rounded-full border border-base-300 bg-base-100 px-3 py-1 text-xs font-semibold text-base-content/65">
            {questionCount} slots
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {questionDifficulties.map((difficulty, index) => (
            <div
              key={`difficulty-slot-${index}`}
              className="rounded-2xl border border-base-300 bg-base-100/90 p-3"
            >
              <p className="text-sm font-semibold text-base-content">
                Question {index + 1}
              </p>
              <p className="mb-2 text-xs text-base-content/55">
                Choose expected challenge.
              </p>

              <div className="grid grid-cols-3 gap-1 rounded-xl border border-base-300 bg-base-100 p-1">
                {QUESTION_DIFFICULTIES.map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => handleQuestionDifficultyChange(index, level)}
                    className={`rounded-lg px-2 py-1.5 text-xs font-semibold transition ${
                      difficulty === level
                        ? "bg-primary text-primary-content"
                        : "text-base-content/65 hover:bg-base-200"
                    }`}
                  >
                    {formatDifficultyLabel(level)}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <aside className="rounded-3xl border border-base-300/80 bg-linear-to-br from-primary/8 via-base-100 to-secondary/12 p-3.5 lg:col-span-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-base-content/60">
          Smart Presets
        </p>
        <div className="mt-2 space-y-2">
          <button
            type="button"
            onClick={() => applyDifficultyPreset("balanced")}
            className="w-full rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2 text-left text-xs font-semibold transition hover:border-primary/45"
          >
            Balanced Mix
          </button>
          <button
            type="button"
            onClick={() => applyDifficultyPreset("gradual")}
            className="w-full rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2 text-left text-xs font-semibold transition hover:border-primary/45"
          >
            Gradual Ramp Up
          </button>
          <button
            type="button"
            onClick={() => applyDifficultyPreset("challenge")}
            className="w-full rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2 text-left text-xs font-semibold transition hover:border-primary/45"
          >
            High Challenge
          </button>
        </div>

        <div className="mt-3 rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2 text-xs text-base-content/70">
          Tip: presets are editable, so you can apply one and tweak individual
          slots.
        </div>
      </aside>
    </div>
  );

  const StepThree = (
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
            <p className="font-medium">
              {roomConfig.name || "Interview Session"}
            </p>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2">
            <p className="text-xs text-base-content/55">Type</p>
            <p className="font-medium capitalize">{roomConfig.type}</p>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2">
            <p className="text-xs text-base-content/55">Duration</p>
            <p className="font-medium">{roomConfig.duration} min</p>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2">
            <p className="text-xs text-base-content/55">Questions</p>
            <p className="font-medium">{roomConfig.questionCount}</p>
          </div>
          {isScheduled && (
            <div className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2 sm:col-span-2">
              <p className="text-xs text-base-content/55">Schedule</p>
              <p className="font-medium">
                {roomConfig.scheduledAt || "Not selected"}
              </p>
            </div>
          )}
          <div className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2 sm:col-span-2">
            <p className="text-xs text-base-content/55">Difficulty Plan</p>
            <p className="font-medium capitalize">
              {questionDifficulties.join(", ")}
            </p>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2 sm:col-span-2">
            <p className="text-xs text-base-content/55">Topics</p>
            <p className="font-medium">
              {selectedTopics.length
                ? `${selectedTopics.slice(0, 8).join(", ")}${selectedTopics.length > 8 ? ` +${selectedTopics.length - 8} more` : ""}`
                : "None"}
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
            Topics mapped for question generation.
          </li>
          <li className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2">
            Difficulty slots are configured.
          </li>
          <li className="rounded-2xl border border-base-300 bg-base-100/90 px-3 py-2">
            Password {roomConfig.passwordEnabled ? "enabled" : "disabled"}.
          </li>
        </ul>
      </aside>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/55 p-2 backdrop-blur-sm md:p-4">
      <form
        onSubmit={handleSubmit}
        className="relative mx-auto flex h-[min(94dvh,760px)] w-full max-w-6xl flex-col overflow-hidden rounded-[1.75rem] border border-base-300/80 bg-base-100 shadow-2xl"
      >
        <div className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />

        <header className="relative border-b border-base-300/80 bg-base-100/95 px-4 py-3.5 md:px-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-2xl border border-base-300 bg-base-100 p-2.5">
                <Code2Icon className="size-4.5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-tight md:text-xl">
                  Create Session
                </h2>
                <p className="mt-0.5 text-xs text-base-content/65 md:text-sm">
                  A fast and clean flow for frontend interview setup.
                </p>
                <div className="mt-2.5">{stepIndicator}</div>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-base-300 p-2 text-base-content/70 transition hover:bg-base-200 hover:text-base-content"
              aria-label="Close create session modal"
            >
              <XIcon className="size-5" />
            </button>
          </div>
        </header>

        <main className="relative min-h-0 flex-1 overflow-hidden px-3 py-3 md:px-4 md:py-4">
          {isStepOne && StepOne}
          {isStepTwo && StepTwo}
          {isStepThree && StepThree}
        </main>

        <footer className="relative flex items-center justify-between border-t border-base-300/80 bg-base-100/95 px-4 py-3 md:px-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-base-300 px-4 py-2 text-sm font-medium text-base-content/80 transition hover:bg-base-200"
          >
            Cancel
          </button>

          <div className="flex items-center gap-2.5">
            {step > 1 && (
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center gap-2 rounded-xl border border-base-300 px-4 py-2 text-sm font-medium text-base-content/80 transition hover:bg-base-200"
              >
                <ChevronLeftIcon className="size-4" />
                Back
              </button>
            )}

            {isStepThree ? (
              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none"
              >
                {isCreating ? (
                  <Loader2Icon className="size-4 animate-spin" />
                ) : (
                  <PlusIcon className="size-5" />
                )}
                {isCreating ? "Creating..." : "Create Session"}
              </button>
            ) : (
              <button
                type="submit"
                disabled={
                  isStepOne ? !canGoNextFromBasics : !canGoNextFromDifficulty
                }
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none"
              >
                {isStepOne ? "Continue" : "Review"}
                <ChevronRightIcon className="size-4" />
              </button>
            )}
          </div>
        </footer>
      </form>
    </div>
  );
}

export default CreateSessionModal;
