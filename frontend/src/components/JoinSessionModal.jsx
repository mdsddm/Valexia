import { useState, useEffect } from "react";
import { LoaderIcon, XIcon } from "lucide-react";

function JoinSessionModal({ isOpen, onClose, session, onJoin, isJoining }) {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [password, setPassword] = useState("");

  // reset when modal opens/closes
  useEffect(() => {
    function callUseEffect() {
      if (isOpen) {
        setSelectedTopics([]);
        setPassword("");
      }
    }
    callUseEffect();
  }, [isOpen]);

  if (!isOpen || !session) return null;

  const toggleTopic = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );
  };

  const handleJoin = () => {
    if (selectedTopics.length === 0) return;

    onJoin({
      sessionId: session._id,
      topics: selectedTopics,
      password,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      {/* MODAL */}
      <div className="w-full max-w-lg bg-base-100 rounded-2xl shadow-2xl border border-base-300 overflow-hidden">
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-base-300">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              Join Session
            </h2>
            <p className="text-sm text-base-content/60 mt-1">
              Select topics and enter credentials
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
        <div className="p-6 space-y-6">
          {/* TOPICS */}
          <div>
            <p className="text-sm font-medium mb-2">
              Topics{" "}
              <span className="text-xs text-base-content/50">(required)</span>
            </p>

            <div className="flex flex-wrap gap-2">
              {session.topics?.map((topic) => {
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

          {/* PASSWORD */}
          {session.passwordEnabled && (
            <div>
              <p className="text-sm font-medium mb-2">Password</p>
              <input
                type="password"
                placeholder="Enter session password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-base-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          )}

          {/* SESSION INFO (nice UX touch) */}
          <div className="bg-base-200 border border-base-300 rounded-xl p-4 text-sm">
            <p className="font-medium mb-1">Session Info</p>
            <p>Topics available: {session.topics?.length || 0}</p>
            <p>
              Protection:{" "}
              {session.passwordEnabled ? "Password required 🔐" : "Open"}
            </p>
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
            onClick={handleJoin}
            disabled={isJoining || selectedTopics.length === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition disabled:opacity-50"
          >
            {isJoining ? (
              <LoaderIcon className="animate-spin size-5" />
            ) : (
              "Join Session"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinSessionModal;
