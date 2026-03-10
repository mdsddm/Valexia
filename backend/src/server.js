import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { serve } from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
import { clerkMiddleware } from "@clerk/express";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoute from "./routes/sessionRoute.js";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const __dirname = path.resolve();

/* ---------------- SOCKET.IO ---------------- */

const io = new Server(server, {
  cors: {
    origin: [
      "https://valexia.onrender.com", // production
      "http://localhost:5173", // local dev
    ],
    methods: ["GET", "POST"],
    credentials: true,
  },
  transports: ["websocket", "polling"], // important for render
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join-session", (sessionId) => {
    console.log("Joining room:", sessionId);
    socket.join(sessionId);
  });

  socket.on("code-change", ({ sessionId, code }) => {
    socket.to(sessionId).emit("code-update", code);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

/* ---------------- MIDDLEWARE ---------------- */

app.use(express.json());
app.use(clerkMiddleware());

app.use(
  cors({
    origin: ["https://valexia.onrender.com", "http://localhost:5173"],
    credentials: true,
  }),
);

app.use("/api/inngest", serve({ client: inngest, functions }));

app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoute);

/* ---------------- HEALTH CHECK ---------------- */

app.get("/health", (req, res) => {
  res.status(200).json({ message: "api is up and running" });
});

/* ---------------- PRODUCTION BUILD ---------------- */

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

/* ---------------- START SERVER ---------------- */

const startServer = async () => {
  try {
    await connectDB();

    server.listen(ENV.PORT, () => {
      console.log("🚀 Server running on port:", ENV.PORT);
    });
  } catch (error) {
    console.error("💥 Error starting the server", error);
  }
};

startServer();
