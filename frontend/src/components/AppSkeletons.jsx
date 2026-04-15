import Skeleton from "react-loading-skeleton";

export function ActiveSessionsSkeleton({ count = 3 }) {
  return (
    <div className="space-y-3 py-2">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={`active-session-skeleton-${index}`}
          className="flex items-center justify-between gap-4 p-4 rounded-xl border border-base-300 bg-base-100"
        >
          <div className="flex items-center gap-4 flex-1">
            <Skeleton circle width={48} height={48} />
            <div className="flex-1 space-y-2">
              <Skeleton width="45%" height={16} />
              <Skeleton width="60%" height={12} />
            </div>
          </div>
          <Skeleton width={80} height={32} borderRadius={10} />
        </div>
      ))}
    </div>
  );
}

export function RecentSessionsSkeleton({ count = 3 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={`recent-session-skeleton-${index}`}
          className="p-4 rounded-xl border border-base-300 bg-base-100 space-y-3"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <Skeleton width={40} height={40} borderRadius={10} />
              <div className="space-y-2">
                <Skeleton width={120} height={14} />
                <Skeleton width={70} height={12} />
              </div>
            </div>
            <Skeleton width={65} height={22} borderRadius={999} />
          </div>
          <Skeleton count={3} height={11} />
        </div>
      ))}
    </div>
  );
}

export function ProblemsTableSkeleton({ count = 7 }) {
  return (
    <div className="flex flex-col divide-y divide-base-300/50">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={`problem-row-skeleton-${index}`}
          className="px-6 py-5 grid grid-cols-1 md:grid-cols-[1fr_120px_100px] items-center gap-4"
        >
          <Skeleton width="70%" height={16} />
          <div className="hidden md:block justify-self-center">
            <Skeleton width={90} height={22} borderRadius={999} />
          </div>
          <div className="hidden md:block justify-self-end">
            <Skeleton width={72} height={28} borderRadius={8} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function CodeEditorSkeleton() {
  return (
    <div className="h-full w-full p-6 space-y-4 bg-base-100">
      <Skeleton width="35%" height={16} />
      <Skeleton height="78%" borderRadius={12} />
      <Skeleton width="30%" height={12} />
    </div>
  );
}

export function VideoCallSkeleton() {
  return (
    <div className="h-full w-full p-6 bg-base-100">
      <div className="h-full w-full rounded-xl border border-base-300 p-4">
        <Skeleton height="100%" borderRadius={12} />
      </div>
    </div>
  );
}
