import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import {
  useEndSession,
  useJoinSession,
  useSessionById,
} from "../hooks/useSessions.js";

import Navbar from "../components/Navbar.jsx";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { LogOutIcon, PhoneOffIcon } from "lucide-react";

import CodeEditorPanel from "../components/CodeEditorPanel.jsx";
import OutputPanel from "../components/OutputPanel.jsx";
import WhiteboardPanel from "../components/WhiteboardPanel.jsx";
import WaitingForCandidate from "../components/WaitingForCandidate.jsx";

import useStreamClient from "../hooks/useStreamClient.js";
import { StreamCall, StreamVideo } from "@stream-io/video-react-sdk";
import VideoCallUI from "../components/VideoCallUI.jsx";
import { API_BASE_URL } from "../lib/api";
import FullScreenLoader from "../components/FullScreenLoader.jsx";
import { VideoCallSkeleton } from "../components/AppSkeletons.jsx";

function SessionPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUser();
  const { getToken } = useAuth();
  const API = API_BASE_URL;

  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const {
    data: sessionData,
    isLoading: loadingSession,
    refetch,
  } = useSessionById(id);

  const joinSessionMutation = useJoinSession();
  const endSessionMutation = useEndSession();

  const session = sessionData?.session;

  const isHost = session?.host?.clerkId === user?.id;
  const isParticipant = session?.participant?.clerkId === user?.id;



  const { call, channel, chatClient, isInitializingCall, streamClient } =
    useStreamClient(session, loadingSession, isHost, isParticipant);

  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const problemData = session?.problems?.length > currentProblemIndex 
    ? session.problems[currentProblemIndex] 
    : session?.problems?.[0] || null;

  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [customInput, setCustomInput] = useState("");

  const [isMax, setIsMax] = useState(
    localStorage.getItem("ifSessionMax") === "true",
  );

  const toggleIsMax = () => setIsMax((prev) => !prev);

  const [timeLeft, setTimeLeft] = useState(null);
  const [activeTab, setActiveTab] = useState("code");

  const hasJoined = useRef(false);
  const lastProblemLangRef = useRef({ problemId: null, lang: null });

  const horizontalPanelRef = useRef(null);
  const verticalPanelRef = useRef(null);

  /* RUN CODE API */
  const runCodeAPI = async () => {
    try {
      const token = await getToken();
      const res = await fetch(`${API}/execute`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          language: selectedLanguage,
          code,
          problemId: problemData?._id,
          customInput,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Execution failed");
      }

      return data;
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  /* JOIN SESSION */
  useEffect(() => {
    if (!session || !user || loadingSession) return;
    if (session.status !== "active") return;
    if (isHost || isParticipant) return;
    if (hasJoined.current) return;

    hasJoined.current = true;

    joinSessionMutation.mutate({ id }, { onSuccess: refetch });
  }, [
    session,
    user,
    loadingSession,
    isHost,
    isParticipant,
    id,
    joinSessionMutation,
    refetch,
  ]);

  /* REDIRECT IF ENDED */
  useEffect(() => {
    if (!session || loadingSession) return;

    if (session.status === "completed") {
      navigate("/dashboard");
    }
  }, [session, loadingSession, navigate]);

  /* TIMER LOGIC */
  useEffect(() => {
    if (!session?.startedAt || session.status !== "active") return;

    const updateTimer = () => {
      const now = Date.now();
      const startedAt = new Date(session.startedAt).getTime();
      const elapsed = now - startedAt;
      const durationMs = (session.duration || 60) * 60 * 1000;
      const remaining = Math.max(0, durationMs - elapsed);
      setTimeLeft(remaining);

      if (remaining === 0) {
        if (isHost && session.status !== "completed") {
          endSessionMutation.mutate(id, {
            onSuccess: () => navigate("/dashboard"),
          });
        }
      }
    };

    updateTimer(); // Initial call
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [session?.startedAt, session?.duration, session?.status, isHost, endSessionMutation, id, navigate]);

  const formatTime = (ms) => {
    if (ms === null) return "--:--";
    const totalSeconds = Math.floor(ms / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    if (h > 0) return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  /* INITIALIZE CODE */
  useEffect(() => {
    if (!problemData) return;

    if (
        lastProblemLangRef.current.problemId === problemData._id &&
        lastProblemLangRef.current.lang === selectedLanguage
    ) return;

    const starter = problemData?.starterCode?.[selectedLanguage] || "";
    setCode(starter);

    lastProblemLangRef.current = { problemId: problemData._id, lang: selectedLanguage };
  }, [problemData, selectedLanguage]);

  /* PANEL LAYOUT */
  useEffect(() => {
    if (isMax) {
      horizontalPanelRef.current?.setLayout([70, 30]);
      verticalPanelRef.current?.setLayout([0, 100]);
    } else {
      horizontalPanelRef.current?.setLayout([50, 50]);
      verticalPanelRef.current?.setLayout([50, 50]);
    }

    localStorage.setItem("ifSessionMax", isMax);
  }, [isMax]);

  /* AUTO REFETCH (for host waiting) */
  useEffect(() => {
    if (!isHost) return;

    const interval = setInterval(() => {
      refetch();
    }, 3000);

    return () => clearInterval(interval);
  }, [isHost, refetch]);

  /* LANGUAGE CHANGE */
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;

    setSelectedLanguage(newLang);

    const starter = problemData?.starterCode?.[newLang] || "";
    setCode(starter);
    setOutput(null);
  };

  /* RUN CODE */
  const handleRunCode = async () => {
    setIsRunning(true);

    const result = await runCodeAPI();

    setIsRunning(false);

    if (!result.success) {
      toast.error(result.error || "Execution failed!");
      return;
    }

    toast.success("Code executed!");
    setOutput(result);
  };

  /* END SESSION */
  const handleEndSession = () => {
    if (confirm("End session for everyone?")) {
      endSessionMutation.mutate(id, {
        onSuccess: () => navigate("/dashboard"),
      });
    }
  };

  if (loadingSession && !session) {
    return <FullScreenLoader />;
  }

  return (
    <div className="h-screen bg-base-100 flex flex-col">
      <Navbar />
      
      {/* Session Toolbar */}
      {session?.startedAt && (
         <div className="bg-base-100 border-b border-base-300 py-3 px-6 flex justify-between items-center shadow-sm z-10 shrink-0">
            <div className="flex items-center gap-3 w-1/3">
                 <div className="badge badge-primary badge-outline font-semibold gap-1.5 p-3">
                     <span className={`w-2 h-2 rounded-full ${session.status === 'active' ? 'bg-success animate-pulse' : 'bg-base-300'}`}></span>
                     Live Session
                 </div>
                 <span className="text-sm text-base-content/70 font-medium hidden sm:block">
                     {isHost ? "Host" : "Candidate"}
                 </span>
            </div>
            
            <div className={`font-mono font-bold text-xl w-1/3 text-center ${timeLeft !== null && timeLeft < 300000 ? "text-error animate-pulse" : "text-base-content"}`}>
              {timeLeft === 0 ? "Ended" : formatTime(timeLeft)}
            </div>

            <div className="flex justify-end w-1/3">
                <button 
                  onClick={handleEndSession} 
                  className="btn btn-error py-0 min-h-0 h-9 px-4 text-sm font-semibold rounded-md shadow-sm hover:shadow-md transition-shadow gap-2"
                >
                  <LogOutIcon className="w-4 h-4" />
                  End Session
                </button>
            </div>
         </div>
      )}

      <div className="flex-1 min-h-0 relative">
        {isHost && (!session?.participant ? true : false) && (
          <div className="absolute inset-0 z-50 bg-base-100">
            <WaitingForCandidate sessionId={id} />
          </div>
        )}
        <PanelGroup ref={horizontalPanelRef} direction="horizontal">
          {/* LEFT */}
          <Panel defaultSize={50}>
            <div className="flex flex-col h-full bg-base-100">
              {/* TAB BAR */}
              <div className="flex border-b border-base-300 bg-base-100 shrink-0">
                <button 
                  className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'code' ? 'bg-base-200 border-b-2 border-primary text-primary' : 'text-base-content/70 hover:bg-base-200/50 hover:text-base-content'}`}
                  onClick={() => setActiveTab('code')}
                >
                  Code & Problem
                </button>
                <button 
                  className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'whiteboard' ? 'bg-base-200 border-b-2 border-primary text-primary' : 'text-base-content/70 hover:bg-base-200/50 hover:text-base-content'}`}
                  onClick={() => setActiveTab('whiteboard')}
                >
                  Whiteboard
                </button>
              </div>

              {/* TAB CONTENT */}
              <div className="flex-1 min-h-0 relative">
                <div style={{ display: activeTab === "code" ? "block" : "none", height: "100%" }}>
                  <PanelGroup ref={verticalPanelRef} direction="vertical">
                    <Panel defaultSize={50}>
                      <div className="p-6 flex flex-col h-full gap-4 relative overflow-hidden">
                        <div className="flex justify-between items-center shrink-0">
                          <h1 className="text-2xl font-bold">
                            {problemData?.title || "Select problem"}
                          </h1>
                          {session?.problems?.length > 1 && (
                            <div className="flex gap-2">
                              {session.problems.map((p, idx) => (
                                <button
                                  key={p._id}
                                  onClick={() => setCurrentProblemIndex(idx)}
                                  className={`btn btn-sm ${currentProblemIndex === idx ? "btn-primary" : "btn-outline"}`}
                                >
                                  Problem {idx + 1}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2 pb-10">
                          {problemData?.description?.text && (
                            <div className="prose prose-sm prose-invert max-w-none text-base-content">
                              <p className="whitespace-pre-wrap">{problemData.description.text}</p>
                            </div>
                          )}
                          {problemData?.examples?.length > 0 && (
                            <div className="mt-6 space-y-4">
                              <h3 className="text-lg font-semibold border-b border-base-300 pb-2">Examples</h3>
                              {problemData.examples.map((ex, i) => (
                                <div key={i} className="bg-base-200 p-4 rounded-lg">
                                  <p><strong>Input:</strong> <span className="font-mono text-sm">{ex.input}</span></p>
                                  <p><strong>Output:</strong> <span className="font-mono text-sm">{ex.output}</span></p>
                                  {ex.explanation && (
                                    <p className="mt-2 text-base-content/80"><strong>Explanation:</strong> {ex.explanation}</p>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </Panel>

                    <PanelResizeHandle />

                    <Panel>
                      <PanelGroup direction="vertical">
                        <Panel>
                          <CodeEditorPanel
                            sessionId={id}
                            selectedLanguage={selectedLanguage}
                            code={code}
                            isRunning={isRunning}
                            onLanguageChange={handleLanguageChange}
                            onCodeChange={(v) => setCode(v)}
                            onRunCode={handleRunCode}
                            isMax={isMax}
                            toggleIsMax={toggleIsMax}
                          />
                        </Panel>

                        <PanelResizeHandle />

                        <Panel>
                          <OutputPanel 
                             output={output} 
                             customInput={customInput} 
                             setCustomInput={setCustomInput} 
                          />
                        </Panel>
                      </PanelGroup>
                    </Panel>
                  </PanelGroup>
                </div>
                {activeTab === "whiteboard" && (
                  <div className="h-full w-full">
                    <WhiteboardPanel sessionId={id} />
                  </div>
                )}
              </div>
            </div>
          </Panel>

          <PanelResizeHandle />

          {/* VIDEO */}
          <Panel>
            <div className="h-full w-full">
              {isInitializingCall ? (
                <VideoCallSkeleton />
              ) : !call ? (
                <div className="h-full w-full flex items-center justify-center">
                  <PhoneOffIcon className="w-10 h-10 text-error" />
                </div>
              ) : (
                <div className="h-full w-full">
                  <StreamVideo client={streamClient}>
                    <StreamCall call={call}>
                      <VideoCallUI
                        chatClient={chatClient}
                        channel={channel}
                        isMax={isMax}
                      />
                    </StreamCall>
                  </StreamVideo>
                </div>
              )}
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

export default SessionPage;
