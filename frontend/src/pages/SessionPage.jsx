import { useUser } from "@clerk/clerk-react";
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

  const hasParticipantJoined = !!session?.participant;

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

  /* LANGUAGE MAP (Judge0 IDs) */
  const LANGUAGE_MAP = {
    javascript: 63,
    python: 71,
    java: 62,
    cpp: 54,
  };

  /* RUN CODE API */
  const runCodeAPI = async () => {
    try {
      const res = await fetch("/api/code/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: id,
          languageId: LANGUAGE_MAP[selectedLanguage],
          code,
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

  /* INITIALIZE CODE */
  useEffect(() => {
    if (!problemData) return;
    if (hasInitializedCode.current) return;

    const starter = problemData?.starterCode?.[selectedLanguage] || "";
    setCode(starter);

    hasInitializedCode.current = true;
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

  /* 🚧 WAITING SCREEN */
  if (isHost && !hasParticipantJoined) {
    return (
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Loader2Icon className="w-12 h-12 animate-spin text-primary mx-auto" />
            <h2 className="text-2xl font-semibold">Waiting for candidate...</h2>
            <p className="text-base-content/60">
              Share session ID: <strong>{id}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-base-100 flex flex-col">
      <Navbar />

      <div className="flex-1 min-h-0">
        <PanelGroup ref={horizontalPanelRef} direction="horizontal">
          {/* LEFT */}
          <Panel defaultSize={50}>
            <PanelGroup ref={verticalPanelRef} direction="vertical">
              <Panel defaultSize={50}>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">
                    {session?.problem || "Select problem"}
                  </h1>
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
                    <OutputPanel output={output} />
                  </Panel>
                </PanelGroup>
              </Panel>
            </PanelGroup>
          </Panel>

          <PanelResizeHandle />

          {/* VIDEO */}
          <Panel>
            <div className="h-full flex items-center justify-center">
              {isInitializingCall ? (
                <Loader2Icon className="w-10 h-10 animate-spin" />
              ) : !call ? (
                <PhoneOffIcon className="w-10 h-10 text-error" />
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
