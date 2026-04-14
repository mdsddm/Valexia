import { TrophyIcon, UsersIcon, ClockIcon, ZapIcon } from "lucide-react";

function StatsCards({
  activeSessionsCount,
  recentSessionsCount,
  liveSessionsCount = 0,
  scheduledSessionsCount = 0,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* 🔥 LIVE */}
      <div className="card bg-base-100 border-2 border-success/20 hover:border-success/40 transition-all">
        <div className="card-body">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-success/10 rounded-2xl">
              <ZapIcon className="size-7 text-success" />
            </div>
            <div className="badge badge-success">Live</div>
          </div>

          <div className="text-4xl font-black mb-1">{liveSessionsCount}</div>
          <div className="text-sm opacity-60">Live Sessions</div>
        </div>
      </div>

      {/* ⏳ UPCOMING */}
      <div className="card bg-base-100 border-2 border-warning/20 hover:border-warning/40 transition-all">
        <div className="card-body">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-warning/10 rounded-2xl">
              <ClockIcon className="size-7 text-warning" />
            </div>
            <div className="badge badge-warning">Scheduled</div>
          </div>

          <div className="text-4xl font-black mb-1">
            {scheduledSessionsCount}
          </div>
          <div className="text-sm opacity-60">Upcoming Sessions</div>
        </div>
      </div>

      {/* 📊 ACTIVE */}
      <div className="card bg-base-100 border-2 border-primary/20 hover:border-primary/40 transition-all">
        <div className="card-body">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <UsersIcon className="size-7 text-primary" />
            </div>
            <div className="badge badge-primary">Total</div>
          </div>

          <div className="text-4xl font-black mb-1">{activeSessionsCount}</div>
          <div className="text-sm opacity-60">Active Sessions</div>
        </div>
      </div>

      {/* 🏆 HISTORY */}
      <div className="card bg-base-100 border-2 border-secondary/20 hover:border-secondary/40 transition-all">
        <div className="card-body">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-secondary/10 rounded-2xl">
              <TrophyIcon className="size-7 text-secondary" />
            </div>
            <div className="badge badge-secondary">History</div>
          </div>

          <div className="text-4xl font-black mb-1">{recentSessionsCount}</div>
          <div className="text-sm opacity-60">Total Sessions</div>
        </div>
      </div>
    </div>
  );
}

export default StatsCards;
