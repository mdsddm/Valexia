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

const io = new Server(server, {
  cors: {
    origin: ENV.CLIENT_URL,
    credentials: true,
  },
});

const __dirname = path.resolve();

//middleware
app.use(express.json());
app.use(clerkMiddleware());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.use("/api/inngest", serve({ client: inngest, functions }));

app.use("/api/chat/", chatRoutes);
app.use("/api/sessions/", sessionRoute);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "api is up and running" });
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // join interview session
  socket.on("join-session", (sessionId) => {
    socket.join(sessionId);
  });

  // code change event
  socket.on("code-change", ({ sessionId, code }) => {
    socket.to(sessionId).emit("code-update", code);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const startServer = async () => {
  try {
    await connectDB();

    server.listen(ENV.PORT, () =>
      console.log("server is running on port :", ENV.PORT),
    );
  } catch (error) {
    console.error("💥 Error starting the server ", error);
  }
};

startServer();
