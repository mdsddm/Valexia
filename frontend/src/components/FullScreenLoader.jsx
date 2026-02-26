import { Gem } from "lucide-react";

const FullScreenLoader = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center relative overflow-hidden transition-colors duration-300">
      {/* Background Glow Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

      <div
        className="relative flex flex-col items-center gap-6"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        {/* Logo */}
        <div className="size-20 rounded-2xl bg-linear-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-xl">
          <Gem className="size-10 text-primary-content animate-pulse" />
        </div>
        {/* Text */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-black bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono">
            Valexia
          </h1>
          <p className="opacity-60 text-sm">Syncing your session...</p>
        </div>
        <span className="loading loading-dots loading-md text-primary"></span>
        <span className="sr-only">Syncing your session...</span>
      </div>
    </div>
  );
};

export default FullScreenLoader;
