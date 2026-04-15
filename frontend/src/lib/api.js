const rawApiUrl = import.meta.env.VITE_API_URL?.trim();

const normalizedApiBase = rawApiUrl
  ? rawApiUrl.replace(/\/+$/, "")
  : "";

export const API_BASE_URL = normalizedApiBase
  ? normalizedApiBase.endsWith("/api")
    ? normalizedApiBase
    : `${normalizedApiBase}/api`
  : "/api";
