import { useUser } from "@clerk/clerk-react";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import {
  useEndSession,
  useJoinSession,
  useSessionById,
} from "../hooks/useSessions.js";

import { PROBLEMS } from "../data/problems.js";
import { executeCode } from "../lib/judge0.js";

import Navbar from "../components/Navbar.jsx";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { getDifficultyBadgeClass } from "../lib/utils";
import { Loader2Icon, LogOutIcon, PhoneOffIcon } from "lucide-react";

import CodeEditorPanel from "../components/CodeEditorPanel.jsx";
import OutputPanel from "../components/OutputPanel.jsx";

import useStreamClient from "../hooks/useStreamClient.js";
import { StreamCall, StreamVideo } from "@stream-io/video-react-sdk";
import VideoCallUI from "../components/VideoCallUI.jsx";

function SessionPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUser();

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

  const problemData = session?.problem
    ? Object.values(PROBLEMS).find(
        (p) => p.title === session.problem || p.id === session.problem,
      )
    : null;

  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState("");

  const [isMax, setIsMax] = useState(
    localStorage.getItem("ifSessionMax") === "true",
  );

  const toggleIsMax = () => setIsMax((prev) => !prev);

  const hasJoined = useRef(false);
  const hasInitializedCode = useRef(false);

  const horizontalPanelRef = useRef(null);
  const verticalPanelRef = useRef(null);

  /* ---------------- JOIN SESSION ---------------- */

  useEffect(() => {
    if (!session || !user || loadingSession) return;
    if (session.status !== "active") return;
    if (isHost || isParticipant) return;
    if (hasJoined.current) return;

    hasJoined.current = true;

    joinSessionMutation.mutate(
      { id },
      {
        onSuccess: refetch,
      },
    );
  }, [session, user, loadingSession, isHost, isParticipant, id, joinSessionMutation, refetch]);

  /* ---------------- REDIRECT IF SESSION ENDED ---------------- */

  useEffect(() => {
    if (!session || loadingSession) return;

    if (session.status === "completed") {
      navigate("/dashboard");
    }
  }, [session, loadingSession, navigate]);

  /* ---------------- INITIALIZE STARTER CODE ---------------- */

  useEffect(() => {
    function callUseEffect() {
      if (!problemData) return;
      if (hasInitializedCode.current) return;

      const starter = problemData?.starterCode?.[selectedLanguage] || "";

      setCode(starter);

      hasInitializedCode.current = true;
    }
    callUseEffect();
  }, [problemData, selectedLanguage]);

  /* ---------------- PANEL LAYOUT ---------------- */

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

  /* ---------------- LANGUAGE CHANGE ---------------- */

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;

    setSelectedLanguage(newLang);

    const starter = problemData?.starterCode?.[newLang] || "";

    setCode(starter);
    setOutput(null);
  };

  /* ---------------- RUN CODE ---------------- */

  const handleRunCode = async () => {
    setIsRunning(true);

    const result = await executeCode(selectedLanguage, code);

    setIsRunning(false);

    if (!result.success) {
      toast.error("Code execution failed!");
      return;
    }

    toast.success("Code executed successfully!");
    setOutput(result);
  };

  /* ---------------- END SESSION ---------------- */

  const handleEndSession = () => {
    if (
      confirm(
        "Are you sure you want to end this session? All participants will be notified.",
      )
    ) {
      endSessionMutation.mutate(id, {
        onSuccess: () => navigate("/dashboard"),
      });
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="h-screen bg-base-100 flex flex-col">
      <Navbar />

      <div className="flex-1 min-h-0">
        <PanelGroup ref={horizontalPanelRef} direction="horizontal">
          {/* LEFT SIDE */}
          <Panel defaultSize={50} minSize={30}>
            <PanelGroup ref={verticalPanelRef} direction="vertical">
              {/* PROBLEM DESCRIPTION */}
              <Panel defaultSize={50} minSize={isMax ? 0 : 20}>
                <div className="h-full overflow-y-auto bg-base-200">
                  <div className="p-6 bg-base-100 border-b border-base-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h1 className="text-3xl font-bold">
                          {session?.problem || "Loading..."}
                        </h1>

                        {problemData?.category && (
                          <p className="text-base-content/60 mt-1">
                            {problemData.category}
                          </p>
                        )}

                        <p className="text-base-content/60 mt-2">
                          Host: {session?.host?.name || "Loading..."} •{" "}
                          {session?.participant ? 2 : 1}/2 participants
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`badge badge-lg ${getDifficultyBadgeClass(
                            session?.difficulty,
                          )}`}
                        >
                          {session?.difficulty?.charAt(0).toUpperCase() +
                            session?.difficulty?.slice(1)}
                        </span>

                        {isHost && session?.status === "active" && (
                          <button
                            onClick={handleEndSession}
                            disabled={endSessionMutation.isPending}
                            className="btn btn-error btn-sm gap-2"
                          >
                            {endSessionMutation.isPending ? (
                              <Loader2Icon className="w-4 h-4 animate-spin" />
                            ) : (
                              <LogOutIcon className="w-4 h-4" />
                            )}
                            End Session
                          </button>
                        )}

                        {session?.status === "completed" && (
                          <span className="badge badge-ghost badge-lg">
                            Completed
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* DESCRIPTION CONTENT */}
                  <div className="p-6 space-y-6">
                    {problemData?.description && (
                      <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                        <h2 className="text-xl font-bold mb-4">Description</h2>

                        <p className="text-base-content/90">
                          {problemData.description.text}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Panel>

              <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary cursor-row-resize" />

              {/* EDITOR + OUTPUT */}

              <Panel defaultSize={70} minSize={10}>
                <PanelGroup direction="vertical">
                  <Panel defaultSize={70} minSize={30}>
                    <CodeEditorPanel
                      sessionId={id}
                      selectedLanguage={selectedLanguage}
                      code={code}
                      isRunning={isRunning}
                      onLanguageChange={handleLanguageChange}
                      onCodeChange={(value) => setCode(value)}
                      onRunCode={handleRunCode}
                      isMax={isMax}
                      toggleIsMax={toggleIsMax}
                    />
                  </Panel>

                  <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary cursor-row-resize" />

                  <Panel defaultSize={30} minSize={15}>
                    <OutputPanel output={output} />
                  </Panel>
                </PanelGroup>
              </Panel>
            </PanelGroup>
          </Panel>

          <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary cursor-col-resize" />

          {/* VIDEO CALL */}

          <Panel defaultSize={50} minSize={20}>
            <div className="h-full bg-base-200 p-4 overflow-auto">
              {isInitializingCall ? (
                <div className="h-full flex items-center justify-center">
                  <Loader2Icon className="w-12 h-12 animate-spin text-primary" />
                </div>
              ) : !streamClient || !call ? (
                <div className="h-full flex items-center justify-center">
                  <PhoneOffIcon className="w-12 h-12 text-error" />
                </div>
              ) : (
                <StreamVideo client={streamClient}>
                  <StreamCall call={call}>
                    <VideoCallUI
                      chatClient={chatClient}
                      channel={channel}
                      isMax={isMax}
                    />
                  </StreamCall>
                </StreamVideo>
              )}
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

export default SessionPage;
