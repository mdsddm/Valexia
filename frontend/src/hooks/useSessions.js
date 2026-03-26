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

    mutationFn: async (payload) => {
      console.log("Sending payload:", payload);
      const res = await sessionApi.createSession(payload);
      return res.data;
    },

    onSuccess: (data) => {
      toast.success("Session created successfully!");
      queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
      queryClient.invalidateQueries({ queryKey: ["myRecentSessions"] });

      console.log("Session created:", data);
    },

    onError: (error) => {
      console.error("Create session error:", error);
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
   JOIN SESSION (FIXED 🔥)
========================= */
export const useJoinSession = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["joinSession"],

    mutationFn: async (payload) => {
      // payload = { sessionId, topics, password }
      const res = await sessionApi.joinSession(payload);
      return res.data;
    },

    onSuccess: () => {
      toast.success("Joined session successfully!");
      queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
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
      return res.data;
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
