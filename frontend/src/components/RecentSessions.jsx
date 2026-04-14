import { Code2, Clock, Users, Trophy, Loader } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { formatDistanceToNow } from "date-fns";

function RecentSessions({ sessions, isLoading }) {
  return (
    <div>
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 rounded-xl bg-linear-to-br from-primary to-secondary">
          <Clock className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-lg font-semibold">Recent Sessions</h2>
      </div>

      {/* CONTENT */}
      {isLoading ? (
        <div className="flex justify-center py-16">
          <Loader className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : sessions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sessions.map((session) => {
            const isScheduled = session.type === "scheduled";
            const isActive = session.status === "active";

            return (
              <div
                key={session._id}
                className="p-4 rounded-xl border border-base-300 bg-base-100 hover:shadow-md transition"
              >
                {/* TOP */}
                <div className="flex items-start justify-between mb-3">
                  {/* ICON + TITLE */}
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isActive
                          ? "bg-green-500"
                          : "bg-linear-to-brrom-primary to-secondary"
                      }`}
                    >
                      <Code2 className="w-5 h-5 text-white" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">
                        {session.problem || "Interview Session"}
                      </h3>

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
                  </div>

                  {/* STATUS */}
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      isActive
                        ? "bg-green-100 text-green-700"
                        : isScheduled
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-600"
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
                <div className="space-y-2 text-xs text-base-content/60 mb-3">
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
                      ⏱ <span>{session.duration} min</span>
                    </div>
                  )}
                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between text-xs text-base-content/40 pt-2 border-t border-base-300">
                  <span>
                    {new Date(session.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Trophy className="w-8 h-8 text-primary/50" />
          </div>
          <p className="text-sm font-medium text-base-content/70">
            No sessions yet
          </p>
          <p className="text-xs text-base-content/50 mt-1">
            Start your first session 🚀
          </p>
        </div>
      )}
    </div>
  );
}

export default RecentSessions;
