import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";

import {
  useActiveSessions,
  useCreateSession,
  useMyRecentSessions,
  useJoinSession,
  useDeleteSession,
} from "../hooks/useSessions.js";

import Navbar from "../components/Navbar.jsx";
import WelcomeSection from "../components/WelcomeSection.jsx";
import StatsCards from "../components/StatsCards.jsx";
import ActiveSessions from "../components/ActiveSessions.jsx";
import RecentSessions from "../components/RecentSessions.jsx";
import CreateSessionModal from "../components/CreateSessionModal.jsx";
import JoinSessionModal from "../components/JoinSessionModal.jsx";
import ConfirmModal from "../components/ConfirmModal.jsx";

function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useUser();

  // MODALS
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [showJoinModal, setShowJoinModal] = useState(false);

  // ✅ CONFIRM DELETE STATE
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [sessionToDelete, setSessionToDelete] = useState(null);

  // ROOM CONFIG
  const [roomConfig, setRoomConfig] = useState({
    type: "live",
    scheduledAt: "",
    questionCount: 2,
    duration: 30,
    topics: [],
  });

  // MUTATIONS
  const createSessionMutation = useCreateSession();
  const joinSessionMutation = useJoinSession();
  const deleteSessionMutation = useDeleteSession();

  // DATA
  const { data: activeSessionsData, isLoading: loadingActiveSessions } =
    useActiveSessions();

  const { data: recentSessionsData, isLoading: loadingRecentSessions } =
    useMyRecentSessions();

  const activeSessions = activeSessionsData?.sessions || [];
  const recentSessions = recentSessionsData?.sessions || [];

  // CREATE SESSION
  const handleCreateRoom = () => {
    if (roomConfig.topics.length === 0) return;
    if (roomConfig.type === "scheduled" && !roomConfig.scheduledAt) return;

    createSessionMutation.mutate(
      {
        type: roomConfig.type,
        scheduledAt:
          roomConfig.type === "scheduled"
            ? new Date(roomConfig.scheduledAt)
            : null,
        topics: roomConfig.topics,
        questionCount: roomConfig.questionCount,
        duration: roomConfig.duration,
        clerkId: user?.id,
        name: user?.fullName,
      },
      {
        onSuccess: (data) => {
          setShowCreateModal(false);
          if (data.session.type === "live") {
            navigate(`/session/${data.session._id}`);
          }
        },
      }
    );
  };

  // JOIN
  const handleJoinClick = (session) => {
    setSelectedSession(session);
    setShowJoinModal(true);
  };

  const handleJoinSession = (payload) => {
    joinSessionMutation.mutate(payload, {
      onSuccess: (res) => {
        setShowJoinModal(false);
        navigate(`/session/${res.session._id}`);
      },
    });
  };

  // ❌ OLD DELETE REMOVED
  // ✅ NEW DELETE FLOW
  const handleDeleteSession = (sessionId) => {
    setSessionToDelete(sessionId);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    deleteSessionMutation.mutate(sessionToDelete, {
      onSuccess: () => {
        setConfirmOpen(false);
        setSessionToDelete(null);
      },
    });
  };

  const isUserInSession = (session) => {
    if (!user?.id) return false;
    return (
      session?.host?.clerkId === user.id ||
      session?.participant?.clerkId === user.id
    );
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-base-200 to-base-100">

        {/* NAVBAR */}
        <Navbar />

        {/* HEADER */}
        <div className="border-b border-base-300 bg-base-100/60 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <WelcomeSection onCreateSession={() => setShowCreateModal(true)} />
          </div>
        </div>

        {/* MAIN */}
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

          {/* STATS */}
          <StatsCards
            activeSessionsCount={
              activeSessions.filter((s) => s.status !== "completed").length
            }
            recentSessionsCount={recentSessions.length}
            liveSessionsCount={
              activeSessions.filter((s) => s.type === "live").length
            }
            scheduledSessionsCount={
              activeSessions.filter((s) => s.type === "scheduled").length
            }
          />

          {/* ACTIVE SESSIONS */}
          <div className="bg-base-100 border border-base-300 rounded-2xl p-5 shadow-sm">
            <ActiveSessions
              sessions={activeSessions}
              isLoading={loadingActiveSessions}
              isUserInSession={isUserInSession}
              onJoinClick={handleJoinClick}
              onDeleteSession={handleDeleteSession}
              currentUserId={user?.id}
            />
          </div>

          {/* RECENT SESSIONS */}
          <div className="bg-base-100 border border-base-300 rounded-2xl p-5 shadow-sm">
            <RecentSessions
              sessions={recentSessions}
              isLoading={loadingRecentSessions}
            />
          </div>

        </div>
      </div>

      {/* MODALS */}
      <CreateSessionModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreateRoom={handleCreateRoom}
        isCreating={createSessionMutation.isPending}
      />

      <JoinSessionModal
        isOpen={showJoinModal}
        onClose={() => setShowJoinModal(false)}
        session={selectedSession}
        onJoin={handleJoinSession}
        isJoining={joinSessionMutation.isPending}
      />

      {/* ✅ NEW CONFIRM MODAL */}
      <ConfirmModal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={confirmDelete}
        loading={deleteSessionMutation.isPending}
        title="Delete Session"
        message="Are you sure you want to delete this session? This action cannot be undone."
      />
    </>
  );
}

export default DashboardPage;
