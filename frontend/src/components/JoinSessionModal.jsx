import { useState, useEffect } from "react";
import { LoaderIcon, XIcon } from "lucide-react";

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

  const toggleTopic = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
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
    if (isJoining || !agreed) return;

    onJoin({
      sessionId: session._id,
      topics: selectedTopics,
      password,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      {/* MODAL */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-base-100 rounded-2xl shadow-2xl border border-base-300 overflow-hidden">
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-base-300">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              {step === 1 ? "Join Session" : "Session Overview"}
            </h2>
            <p className="text-sm text-base-content/60 mt-1">
              {step === 1 ? "Select topics and enter credentials" : "Review details and agree to terms"}
            </p>
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
        <div className="p-6 space-y-6">
          {step === 1 ? (
            <>
              {/* TOPICS */}
              <div>
                <p className="text-sm font-medium mb-2">
                  Topics{" "}
                  <span className="text-xs text-base-content/50">(required)</span>
                </p>

                <div className="flex flex-wrap gap-2">
                  {session.available_topic?.map((topic) => {
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

              {/* PASSWORD */}
              {session.isProtected && (
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
                <p className="font-medium mb-1">Security Info</p>
                <p>Topics available: {session.available_topic?.length || 0}</p>
                <p>
                  Protection:{" "}
                  {session.isProtected ? "Password required 🔐" : "Open"}
                </p>
              </div>
            </>
          ) : (
            <>
              {/* STEP 2: OVERVIEW & TERMS */}
              <div className="bg-base-200 border border-base-300 rounded-xl p-5 space-y-4">
                <div>
                  <p className="text-sm text-base-content/60">Session Name</p>
                  <p className="font-semibold text-lg">{session.name || "Interview Session"}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 border-t border-base-300 pt-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold opacity-60 mb-1">Duration</p>
                    <p className="font-medium">{session.duration ? `${session.duration} mins` : "Standard"}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold opacity-60 mb-1">Problems</p>
                    <p className="font-medium">{session.problems?.length || session.questionCount || "As assigned"}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold opacity-60 mb-1">Difficulty</p>
                    <p className="font-medium capitalize">{session.difficulty || "Standard"}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 mt-6 bg-primary/10 p-4 rounded-lg border border-primary/20">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 checkbox checkbox-primary checkbox-sm"
                />
                <div className="text-sm">
                  <label htmlFor="agreeTerms" className="font-semibold text-primary cursor-pointer">
                    I agree to the standard session terms
                  </label>
                  <p className="text-base-content/80 mt-1.5 leading-relaxed">
                    By joining this session, I agree to maintain a professional code of conduct, refrain from using unauthorized external help, and understand that my code execution is monitored. Wait for the host to officially begin.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-base-300 bg-base-200/30">
          <button
            type="button"
            onClick={step === 2 ? () => setStep(1) : onClose}
            className="px-4 py-2 rounded-lg border border-base-300 hover:bg-base-200 transition text-sm font-medium"
          >
            {step === 2 ? "Back" : "Cancel"}
          </button>

          {step === 1 ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={selectedTopics.length === 0}
              className="px-5 py-2 rounded-lg bg-primary text-primary-content hover:opacity-90 transition disabled:opacity-50 text-sm font-medium"
            >
              Next Step
            </button>
          ) : (
            <button
              type="submit"
              disabled={isJoining || !agreed}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-content hover:opacity-90 transition disabled:opacity-50 text-sm font-medium"
            >
              {isJoining ? (
                <LoaderIcon className="animate-spin size-4" />
              ) : (
                "Enter Session"
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default JoinSessionModal;
