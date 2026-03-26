import { Code2Icon, LoaderIcon, PlusIcon, XIcon } from "lucide-react";
import { TOPIC_GROUPS } from "../data/problems.js";

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      {/* MODAL */}
      <div className="w-full max-w-2xl bg-base-100 rounded-2xl shadow-2xl border border-base-300 overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-base-300">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Create Session
            </h2>
            <p className="text-sm text-base-content/60 mt-1">
              Setup your interview session
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-base-200 transition"
          >
            <XIcon className="size-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">

          {/* SESSION TYPE */}
          <div>
            <p className="text-sm font-medium mb-2">Session Type</p>
            <div className="flex gap-3">
              {["live", "scheduled"].map((type) => (
                <button
                  key={type}
                  onClick={() =>
                    setRoomConfig((prev) => ({ ...prev, type }))
                  }
                  className={`flex-1 py-2 rounded-lg border text-sm transition ${
                    roomConfig.type === type
                      ? "bg-primary text-white border-primary"
                      : "border-base-300 hover:border-primary"
                  }`}
                >
                  {type === "live" ? "Live" : "Scheduled"}
                </button>
              ))}
            </div>
          </div>

          {/* SCHEDULE */}
          {roomConfig.type === "scheduled" && (
            <div>
              <p className="text-sm font-medium mb-2">Date & Time</p>
              <input
                type="datetime-local"
                value={roomConfig.scheduledAt || ""}
                onChange={(e) =>
                  setRoomConfig((prev) => ({
                    ...prev,
                    scheduledAt: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 rounded-lg border border-base-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          )}

          {/* TOPICS */}
          <div>
            <p className="text-sm font-medium mb-2">
              Topics <span className="text-xs text-base-content/50">(select at least one)</span>
            </p>

            <div className="space-y-4 max-h-56 overflow-y-auto pr-1">
              {Object.entries(TOPIC_GROUPS).map(([group, topics]) => (
                <div key={group}>
                  <p className="text-xs uppercase text-base-content/50 mb-2">
                    {group}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => {
                      const active = selectedTopics.includes(topic);

                      return (
                        <button
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
          </div>

          {/* CONFIG */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium mb-2">Questions</p>
              <select
                value={roomConfig.questionCount}
                onChange={(e) =>
                  setRoomConfig((prev) => ({
                    ...prev,
                    questionCount: Number(e.target.value),
                  }))
                }
                className="w-full px-3 py-2 rounded-lg border border-base-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Duration</p>
              <select
                value={roomConfig.duration}
                onChange={(e) =>
                  setRoomConfig((prev) => ({
                    ...prev,
                    duration: Number(e.target.value),
                  }))
                }
                className="w-full px-3 py-2 rounded-lg border border-base-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/40"
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
          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Password Protection</p>
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
                className="mt-3 w-full px-3 py-2 rounded-lg border border-base-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            )}
          </div>

          {/* SUMMARY */}
          <div className="bg-base-200 border border-base-300 rounded-xl p-4 flex gap-3">
            <Code2Icon className="size-5 mt-1 text-primary" />
            <div className="text-sm space-y-1">
              <p className="font-medium">Summary</p>
              <p>Type: {roomConfig.type}</p>
              {roomConfig.type === "scheduled" && (
                <p>Time: {roomConfig.scheduledAt || "Not set"}</p>
              )}
              <p>
                Topics:{" "}
                {selectedTopics.length
                  ? selectedTopics.join(", ")
                  : "None"}
              </p>
              <p>Questions: {roomConfig.questionCount}</p>
              <p>Duration: {roomConfig.duration} min</p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-base-300">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-base-300 hover:bg-base-200 transition"
          >
            Cancel
          </button>

          <button
            onClick={onCreateRoom}
            disabled={
              isCreating ||
              (roomConfig.type === "scheduled" && !roomConfig.scheduledAt) ||
              selectedTopics.length === 0
            }
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition disabled:opacity-50"
          >
            {isCreating ? (
              <LoaderIcon className="size-5 animate-spin" />
            ) : (
              <PlusIcon className="size-5" />
            )}
            {isCreating ? "Creating..." : "Create Session"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateSessionModal;
