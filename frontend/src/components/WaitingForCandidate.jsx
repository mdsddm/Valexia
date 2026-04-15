import { Gem, Copy, Check, Mic, Camera } from "lucide-react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const WaitingForCandidate = ({ sessionId }) => {
  const [copied, setCopied] = useState(false);
  const [permissionsGranted, setPermissionsGranted] = useState(false);

  useEffect(() => {
    // Proactively request mic & camera permissions from the host 
    // so they are ready by the time the candidate joins.
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setPermissionsGranted(true);
        // We release the tracks immediately so the camera light turns off;
        // The Stream SDK will take over the devices natively when it's time.
        stream.getTracks().forEach((track) => track.stop());
      })
      .catch((err) => {
        console.warn("Permissions denied or not available", err);
      });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(sessionId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full bg-base-100 flex items-center justify-center relative overflow-hidden transition-colors duration-300">
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
        <div className="text-center space-y-3 pb-2">
          <h1 className="text-2xl font-black bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono">
            Waiting for Candidate...
          </h1>
          <p className="opacity-60 text-sm">Please hold on until the candidate joins the session.</p>
          
          <div className="flex justify-center mt-2">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${permissionsGranted ? 'bg-success/10 text-success border-success/20' : 'bg-warning/10 text-warning border-warning/20'}`}>
              <Mic className="size-3.5" />
              <Camera className="size-3.5" />
              {permissionsGranted ? 'Camera & Mic Ready' : 'Allow Devices (Prompting)'}
            </span>
          </div>
        </div>

        {/* Session ID display to make it useful */}
        <div className="mt-4 p-4 bg-base-200/50 backdrop-blur-md rounded-xl border border-base-300 max-w-sm w-full flex flex-col gap-2 shadow-inner">
            <span className="text-xs uppercase tracking-wider font-semibold opacity-50 px-1">Session ID</span>
            <div className="flex items-center gap-2">
                <div className="bg-base-100 px-3 py-2 rounded-lg border border-base-300 font-mono text-sm flex-1 truncate select-all">
                    {sessionId}
                </div>
                <button 
                  onClick={handleCopy}
                  className="btn btn-square btn-primary btn-sm"
                  title="Copy Session ID"
                >
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                </button>
            </div>
        </div>

        <div className="w-32 mt-4">
          <Skeleton height={10} />
        </div>
      </div>
    </div>
  );
};

export default WaitingForCandidate;
