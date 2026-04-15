import {
  Code2Icon,
  PlusIcon,
  XIcon,
  ClockIcon,
  ListChecksIcon,
  LockIcon,
} from "lucide-react";
import { TOPIC_GROUPS } from "../data/problems.js";
import Skeleton from "react-loading-skeleton";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  if (!isOpen) return null;

  const selectedTopics = roomConfig.topics || [];

  const toggleTopic = (topic) => {
    setRoomConfig((prev) => {
      const current = prev.topics || [];
      return {
        ...prev,
        topics: current.includes(topic)
          ? current.filter((t) => t !== topic)
          : [...current, topic],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isCreating ||
      selectedTopics.length === 0 ||
      (roomConfig.type === "scheduled" && !roomConfig.scheduledAt) ||
      (roomConfig.passwordEnabled && !roomConfig.password)
    ) return;
    onCreateRoom();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-base-100 rounded-3xl shadow-2xl border border-base-300 overflow-hidden">
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-base-300">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10">
              <Code2Icon className="size-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Create Session</h2>
              <p className="text-xs text-base-content/60">
                Setup your interview session
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-base-200 transition"
          >
            <XIcon className="size-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-7 max-h-[75vh] overflow-y-auto">
          {/* NAME */}
          <div>
            <p className="text-sm font-medium mb-3">Session Name</p>
            <input
              type="text"
              placeholder="e.g. Frontend React Interview"
              value={roomConfig.name || ""}
              onChange={(e) => setRoomConfig((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl border border-base-300 bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          {/* TYPE */}
          <div>
            <p className="text-sm font-medium mb-3">Session Type</p>
            <div className="grid grid-cols-2 gap-3">
              {["live", "scheduled"].map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setRoomConfig((prev) => ({ ...prev, type }))}
                  className={`py-3 rounded-xl border text-sm font-medium transition ${
                    roomConfig.type === type
                      ? "bg-primary text-white border-primary shadow"
                      : "border-base-300 hover:border-primary hover:text-primary"
                  }`}
                >
                  {type === "live" ? "⚡ Live Now" : "📅 Schedule"}
                </button>
              ))}
            </div>
          </div>

          {/* SCHEDULE */}
          {roomConfig.type === "scheduled" && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Select Date & Time</p>
              <input
                type="datetime-local"
                value={roomConfig.scheduledAt || ""}
                onChange={(e) =>
                  setRoomConfig((prev) => ({
                    ...prev,
                    scheduledAt: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 rounded-xl border border-base-300 bg-base-100
                           focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          )}

          {/* TOPICS */}
          <div>
            <p className="text-sm font-medium mb-3">Topics</p>

            {Object.entries(TOPIC_GROUPS).map(([group, topics]) => (
              <div key={group} className="mb-4">
                <p className="text-xs uppercase text-base-content/50 mb-2">
                  {group}
                </p>

                <div className="flex flex-wrap gap-2">
                  {topics.map((topic) => {
                    const active = selectedTopics.includes(topic);

                    return (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => toggleTopic(topic)}
                        className={`px-3 py-1.5 text-sm rounded-full border transition ${
                          active
                            ? "bg-primary text-white border-primary shadow-sm"
                            : "border-base-300 hover:border-primary hover:text-primary"
                        }`}
                      >
                        {topic}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* CONFIG */}
          <div className="grid grid-cols-2 gap-5">
            {/* QUESTIONS */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <ListChecksIcon className="size-4 text-primary" />
                Questions
              </label>

              <select
                value={roomConfig.questionCount}
                onChange={(e) =>
                  setRoomConfig((prev) => ({
                    ...prev,
                    questionCount: Number(e.target.value),
                  }))
                }
                className="select select-bordered w-full rounded-xl bg-base-100 text-base-content
             focus:outline-none focus:ring-2 focus:ring-primary/40
             hover:border-primary transition"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n} Question{n > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* DURATION */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <ClockIcon className="size-4 text-primary" />
                Duration
              </label>

              <select
                value={roomConfig.duration}
                onChange={(e) =>
                  setRoomConfig((prev) => ({
                    ...prev,
                    duration: Number(e.target.value),
                  }))
                }
                className="select select-bordered w-full rounded-xl bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                {[15, 30, 45, 60, 90].map((t) => (
                  <option key={t} value={t}>
                    {t} min
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* PASSWORD */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium flex items-center gap-2">
                <LockIcon className="size-4 text-primary" />
                Password Protection
              </p>

              <input
                type="checkbox"
                checked={!!roomConfig.passwordEnabled}
                onChange={(e) =>
                  setRoomConfig((prev) => ({
                    ...prev,
                    passwordEnabled: e.target.checked,
                    password: "",
                  }))
                }
                className="toggle toggle-primary"
              />
            </div>

            {roomConfig.passwordEnabled && (
              <input
                type="password"
                placeholder="Enter password"
                value={roomConfig.password || ""}
                onChange={(e) =>
                  setRoomConfig((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 rounded-xl border border-base-300
                           focus:ring-2 focus:ring-primary/40"
              />
            )}
          </div>

          {/* SUMMARY */}
          <div className="bg-base-200 border border-base-300 rounded-xl p-4 flex gap-3">
            <Code2Icon className="size-5 mt-1 text-primary" />
            <div className="text-sm space-y-1">
              <p className="font-medium">Summary</p>
              <p>Name: {roomConfig.name || "Interview Session"}</p>
              <p>Type: {roomConfig.type}</p>
              {roomConfig.type === "scheduled" && (
                <p>Time: {roomConfig.scheduledAt || "Not set"}</p>
              )}
              <p>
                Topics:{" "}
                {selectedTopics.length ? selectedTopics.join(", ") : "None"}
              </p>
              <p>Questions: {roomConfig.questionCount}</p>
              <p>Duration: {roomConfig.duration} min</p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center px-6 py-4 border-t border-base-300">
          <button
            type="button"
            onClick={onClose}
            className="text-sm px-4 py-2 rounded-lg border border-base-300 hover:bg-base-200"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={
              isCreating ||
              selectedTopics.length === 0 ||
              (roomConfig.type === "scheduled" && !roomConfig.scheduledAt) ||
              (roomConfig.passwordEnabled && !roomConfig.password)
            }
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white shadow hover:opacity-90 transition disabled:opacity-50"
          >
            {isCreating ? (
              <div className="w-5">
                <Skeleton height={16} />
              </div>
            ) : (
              <PlusIcon className="size-5" />
            )}
            {isCreating ? "Creating..." : "Create Session"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateSessionModal;
