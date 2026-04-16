import axiosInstance from "../lib/axios";

export const sessionApi = {
  createSession: async (data) => {
    const response = await axiosInstance.post("/sessions", data);
    return response.data;
  },
  getActiveSessions: async () => {
    const response = await axiosInstance.get("/sessions/active");
    return response.data;
  },
  getMyRecentSessions: async () => {
    const response = await axiosInstance.get("/sessions/my-recent");
    return response.data;
  },
  getSessionById: async (id) => {
    const response = await axiosInstance.get(`/sessions/${id}`);
    return response.data;
  },
  joinSession: async (payload) => {
    const id = payload.sessionId || payload.id || payload;
    const response = await axiosInstance.post(`/sessions/${id}/join`, {
      topics: payload.topics || [],
      password: payload.password,
    });
    return response.data;
  },
  endSession: async (id) => {
    const response = await axiosInstance.post(`/sessions/${id}/end`);
    return response.data;
  },
  generateSessionAnalysis: async (id) => {
    const response = await axiosInstance.post(`/sessions/${id}/analyze`);
    return response.data;
  },
  getSessionAnalysis: async (id) => {
    const response = await axiosInstance.get(`/sessions/${id}/analysis`);
    return response.data;
  },
  submitManualSessionAnalysis: async (id, payload) => {
    const response = await axiosInstance.post(
      `/sessions/${id}/analysis/manual`,
      payload,
    );
    return response.data;
  },
  deleteSession: async (id) => {
    const response = await axiosInstance.delete(`/sessions/${id}`);
    return response.data;
  },
  getStreamToken: async () => {
    const response = await axiosInstance.get(`/chat/token`);
    return response.data;
  },
};
