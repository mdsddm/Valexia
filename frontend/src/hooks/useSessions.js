import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sessionApi } from "../api/sessions";

/* =========================
   CREATE SESSION
========================= */
export const useCreateSession = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createSession"],

    mutationFn: async (roomConfig) => {
      // 🔥 FIX: normalize payload BEFORE sending
      const payload = {
        type: roomConfig.type,

        scheduledAt:
          roomConfig.type === "scheduled" && roomConfig.scheduledAt
            ? new Date(roomConfig.scheduledAt)
            : null,

        questionCount: roomConfig.questionCount,
        questionDifficulties: roomConfig.questionDifficulties,
        duration: roomConfig.duration,

        // ✅ CRITICAL FIX
        available_topic: roomConfig.topics,
        name: roomConfig.name,

        // ✅ password handling
        password: roomConfig.passwordEnabled ? roomConfig.password : undefined,
      };

      console.log("🚀 FINAL PAYLOAD:", payload);

      const res = await sessionApi.createSession(payload);
      return res;
    },

    onSuccess: (data) => {
      toast.success("Session created successfully!");

      queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
      queryClient.invalidateQueries({ queryKey: ["myRecentSessions"] });

      console.log("✅ Session created:", data);
    },

    onError: (error) => {
      console.error("❌ Create session error:", error);
      toast.error(error.response?.data?.message || "Failed to create session");
    },
  });
};

/* =========================
   ACTIVE SESSIONS
========================= */
export const useActiveSessions = () => {
  return useQuery({
    queryKey: ["activeSessions"],
    queryFn: sessionApi.getActiveSessions,
  });
};

/* =========================
   RECENT SESSIONS
========================= */
export const useMyRecentSessions = () => {
  return useQuery({
    queryKey: ["myRecentSessions"],
    queryFn: sessionApi.getMyRecentSessions,
  });
};

/* =========================
   SESSION BY ID
========================= */
export const useSessionById = (id) => {
  return useQuery({
    queryKey: ["session", id],
    queryFn: () => sessionApi.getSessionById(id),
    enabled: !!id,
    refetchInterval: 5000,
  });
};

/* =========================
   SESSION ANALYSIS
========================= */
export const useSessionAnalysis = (id) => {
  return useQuery({
    queryKey: ["sessionAnalysis", id],
    queryFn: () => sessionApi.getSessionAnalysis(id),
    enabled: !!id,
  });
};

export const useGenerateSessionAnalysis = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["generateSessionAnalysis"],
    mutationFn: sessionApi.generateSessionAnalysis,

    onSuccess: (data, sessionId) => {
      if (data?.manualRequired) {
        toast("AI quota exceeded. Switched to manual analysis mode.");
      } else {
        toast.success("Analysis generated successfully");
      }
      queryClient.invalidateQueries({
        queryKey: ["sessionAnalysis", sessionId],
      });
      queryClient.invalidateQueries({ queryKey: ["session", sessionId] });
      queryClient.invalidateQueries({ queryKey: ["myRecentSessions"] });
    },

    onError: (error) => {
      const apiMessage =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        "";

      if (/insufficient_quota|quota/i.test(apiMessage)) {
        toast("AI quota exceeded. Please use manual analysis.");
        return;
      }

      toast.error(
        "AI analysis failed. Please try again or use manual analysis.",
      );
    },
  });
};

export const useSubmitManualSessionAnalysis = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["submitManualSessionAnalysis"],
    mutationFn: ({ id, payload }) =>
      sessionApi.submitManualSessionAnalysis(id, payload),

    onSuccess: (data, variables) => {
      toast.success("Manual analysis saved successfully");
      queryClient.invalidateQueries({
        queryKey: ["sessionAnalysis", variables.id],
      });
    },

    onError: (error) => {
      toast.error(
        error.response?.data?.message || "Failed to save manual analysis",
      );
    },
  });
};

/* =========================
   JOIN SESSION (FIXED 🔥)
========================= */
export const useJoinSession = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["joinSession"],

    mutationFn: async (payload) => {
      // payload = { sessionId, topics, password }
      const res = await sessionApi.joinSession(payload);
      return res;
    },

    onSuccess: (data) => {
      toast.success("Joined session successfully!");
      queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
      // ✅ FIX: Invalidate the specific session query to ensure participant data is refreshed
      if (data?.session?._id) {
        queryClient.invalidateQueries({
          queryKey: ["session", data.session._id.toString()],
        });
      }
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to join session");
    },
  });
};

/* =========================
   DELETE SESSION (NEW 🔥)
========================= */
export const useDeleteSession = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteSession"],

    mutationFn: async (id) => {
      const res = await sessionApi.deleteSession(id);
      return res;
    },

    onSuccess: () => {
      toast.success("Session deleted successfully!");

      // ✅ refresh UI instantly
      queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
      queryClient.invalidateQueries({ queryKey: ["myRecentSessions"] });
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to delete session");
    },
  });
};

/* =========================
   END SESSION
========================= */
export const useEndSession = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["endSession"],

    mutationFn: sessionApi.endSession,

    onSuccess: () => {
      toast.success("Session ended successfully!");
      queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to end session");
    },
  });
};
