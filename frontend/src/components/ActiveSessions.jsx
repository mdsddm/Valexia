import {
  ArrowRightIcon,
  Code2Icon,
  CrownIcon,
  Gem,
  UsersIcon,
  ZapIcon,
  LoaderIcon,
  ClockIcon,
  TrashIcon,
} from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ActiveSessions({
  sessions = [],
  isLoading,
  isUserInSession,
  onJoinClick,
  onDeleteSession,
  currentUserId,
}) {
  const liveSessions = sessions.filter((s) => (s.type || "live") === "live");
  const scheduledSessions = sessions.filter((s) => s.type === "scheduled");

  const renderSessionCard = (session) => {
    const isScheduled = session.type === "scheduled";
    const isFull = session.participant && !isUserInSession(session);
    const isHost = session?.host?.clerkId === currentUserId;

    return (
      <div
        key={session._id}
        className="flex items-center justify-between gap-4 p-4 rounded-xl border border-base-300 bg-base-100 hover:shadow-md transition"
      >
        {/* LEFT */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="relative size-12 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center shrink-0">
            <Code2Icon className="size-6 text-white" />
            <div
              className={`absolute -top-1 -right-1 size-3 rounded-full border-2 border-base-100 ${
                isScheduled ? "bg-yellow-400" : "bg-green-500"
              }`}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-base truncate">
                {session.problems?.length
                  ? `${session.problems.length} Problems`
                  : "Interview Session"}
              </h3>

              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  isScheduled
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {isScheduled ? "Scheduled" : "Live"}
              </span>

              {session.difficulty && (
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${getDifficultyBadgeClass(
                    session.difficulty,
                  )}`}
                >
                  {session.difficulty}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs text-base-content/60 mt-1 flex-wrap">
              <div className="flex items-center gap-1">
                <CrownIcon className="size-3.5" />
                <span>{session.host?.name}</span>
              </div>

              <div className="flex items-center gap-1">
                <UsersIcon className="size-3.5" />
                <span>{session.participant ? "2/2" : "1/2"}</span>
              </div>

              {isScheduled && session.scheduledAt && (
                <div className="flex items-center gap-1">
                  <ClockIcon className="size-3.5" />
                  <span>{new Date(session.scheduledAt).toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          {/* DELETE → ONLY HOST */}
          {isHost && (
            <button
              onClick={() => onDeleteSession(session._id)}
              className="p-2 rounded-xl border border-primary text-primary hover:text-error hover:border-error transition"
            >
              <TrashIcon className="size-4" />
            </button>
          )}

          {/* JOIN / REJOIN */}
          {isScheduled ? (
            <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
              Starts Soon
            </span>
          ) : isFull ? (
            <span className="text-xs px-3 py-1 rounded-full bg-red-100 text-red-600">
              Full
            </span>
          ) : (
            <button
              onClick={() => onJoinClick(session)}
              className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-xl bg-primary text-primary-content hover:bg-secondary hover:text-secondary-content transition"
            >
              {isUserInSession(session) ? "Rejoin" : "Join"}
              <ArrowRightIcon className="size-4" />
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-linear-to-br from-primary to-secondary">
            <ZapIcon className="size-5 text-white" />
          </div>
          <h2 className="text-lg font-semibold">Active Sessions</h2>
        </div>

        <span className="text-sm text-base-content/60">
          {sessions.length} total
        </span>
      </div>

      {/* CONTENT */}
      {isLoading ? (
        <div className="flex justify-center py-12">
          <LoaderIcon className="size-8 animate-spin text-primary" />
        </div>
      ) : sessions.length > 0 ? (
        <div className="space-y-3">
          {liveSessions.length > 0 && (
            <div>
              <p className="text-xs font-medium text-green-600 mb-2">
                Live Now ({liveSessions.length})
              </p>
              <div className="space-y-3">
                {liveSessions.map(renderSessionCard)}
              </div>
            </div>
          )}

          {scheduledSessions.length > 0 && (
            <div>
              <p className="text-xs font-medium text-yellow-600 mb-2">
                Upcoming ({scheduledSessions.length})
              </p>
              <div className="space-y-3">
                {scheduledSessions.map(renderSessionCard)}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-12">
          <Gem className="w-8 h-8 mx-auto text-primary/40" />
          <p className="mt-3 text-sm text-base-content/60">
            No sessions available
          </p>
        </div>
      )}
    </div>
  );
}

export default ActiveSessions;
