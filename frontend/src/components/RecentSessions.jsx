import { Code2, Clock, Users, Trophy } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { formatDistanceToNow } from "date-fns";
import { RecentSessionsSkeleton } from "./AppSkeletons.jsx";
import { useNavigate } from "react-router";

function RecentSessions({ sessions, isLoading }) {
  const navigate = useNavigate();

  return (
    <div className="space-y-5">
      {/* HEADER */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-linear-to-br from-primary to-secondary shadow-sm">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Recent Sessions</h2>
            <p className="text-xs text-base-content/60">
              Review completed interviews and open post-session analysis.
            </p>
          </div>
        </div>
        <div className="badge badge-outline">{sessions.length} Total</div>
      </div>

      {/* CONTENT */}
      {isLoading ? (
        <RecentSessionsSkeleton />
      ) : sessions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sessions.map((session) => {
            const isScheduled = session.type === "scheduled";
            const isActive = session.status === "active";

            return (
              <div
                key={session._id}
                className="rounded-2xl border border-base-300/80 bg-linear-to-br from-base-100 to-base-200/45 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-primary/30"
              >
                {/* TOP */}
                <div className="flex items-start justify-between mb-3">
                  {/* ICON + TITLE */}
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${
                        isActive
                          ? "bg-success"
                          : "bg-linear-to-br from-primary to-secondary"
                      }`}
                    >
                      <Code2 className="w-5 h-5 text-white" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold leading-tight">
                        {session.problem || "Interview Session"}
                      </h3>

                      {session.difficulty && (
                        <span
                          className={`mt-1 inline-flex text-xs px-2 py-0.5 rounded-full ${getDifficultyBadgeClass(
                            session.difficulty,
                          )}`}
                        >
                          {session.difficulty}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* STATUS */}
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      isActive
                        ? "bg-success/20 text-success"
                        : isScheduled
                          ? "bg-warning/20 text-warning"
                          : "bg-base-300 text-base-content/70"
                    }`}
                  >
                    {isActive
                      ? "Live"
                      : isScheduled
                        ? "Scheduled"
                        : "Completed"}
                  </span>
                </div>

                {/* DETAILS */}
                <div className="space-y-2 text-xs text-base-content/70 mb-4">
                  {/* TIME */}
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    {isScheduled && session.scheduledTime ? (
                      <span>
                        {new Date(session.scheduledTime).toLocaleString()}
                      </span>
                    ) : (
                      <span>
                        {formatDistanceToNow(new Date(session.createdAt), {
                          addSuffix: true,
                        })}
                      </span>
                    )}
                  </div>

                  {/* USERS */}
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5" />
                    <span>
                      {session.participant ? "2 participants" : "1 participant"}
                    </span>
                  </div>

                  {/* DURATION */}
                  {session.duration && (
                    <div className="flex items-center gap-2">
                      <span>⏱</span> <span>{session.duration} min</span>
                    </div>
                  )}
                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between text-xs text-base-content/50 pt-3 border-t border-base-300/80 gap-2">
                  <span>
                    {new Date(session.updatedAt).toLocaleDateString()}
                  </span>

                  {session.status === "completed" && (
                    <button
                      className="btn btn-xs btn-primary"
                      onClick={() =>
                        navigate(`/session/${session._id}/analysis`)
                      }
                    >
                      Analyze
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 rounded-2xl border border-dashed border-base-300 bg-base-100/60">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Trophy className="w-8 h-8 text-primary/50" />
          </div>
          <p className="text-sm font-medium text-base-content/70">
            No sessions yet
          </p>
          <p className="text-xs text-base-content/50 mt-1">
            Start your first session
          </p>
        </div>
      )}
    </div>
  );
}

export default RecentSessions;
