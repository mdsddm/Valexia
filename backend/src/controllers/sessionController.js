import { chatClient, streamClient } from "../lib/stream.js";
import Session from "../models/Session.js";
import Problem from "../models/problem.js";
import bcrypt from "bcryptjs";

// =======================
// CREATE SESSION
// =======================
export async function createSession(req, res) {
  try {
    const {
      type = "live",
      scheduledAt,
      questionCount = 2,
      duration = 30,
      password,
      available_topic,
    } = req.body;

    const userId = req.user?._id;
    const clerkId = req.user?.clerkId;

    if (!userId || !clerkId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // ✅ validate topics
    if (!available_topic || available_topic.length === 0) {
      return res.status(400).json({ message: "Topics required" });
    }

    // ✅ validate scheduled session
    if (type === "scheduled" && !scheduledAt) {
      return res.status(400).json({ message: "scheduledAt required" });
    }

    // 🎯 fetch problems
    const problems = await Problem.aggregate([
      { $sample: { size: Number(questionCount) } },
    ]);

    if (!problems.length) {
      return res.status(404).json({ message: "No problems found" });
    }

    // 🔐 password hashing
    let hashedPassword = null;
    if (password?.trim()) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // 📞 unique callId
    const callId = `session_${Date.now()}_${Math.random()
      .toString(36)
      .substring(7)}`;

    // 🧩 create session
    const session = await Session.create({
      host: userId,
      problems: problems.map((p) => p._id),
      scheduledAt: type === "scheduled" ? scheduledAt : null,
      duration,
      type,
      callId,
      available_topic,
      password: hashedPassword,
    });

    try {
      // 🎥 create video call
      await streamClient.video.call("default", callId).getOrCreate({
        data: {
          created_by_id: clerkId,
          custom: {
            sessionId: session._id.toString(),
          },
        },
      });

      // 💬 create chat
      const channel = chatClient.channel("messaging", callId, {
        name: "Interview Session",
        created_by_id: clerkId,
        members: [clerkId],
      });

      await channel.create();
    } catch (err) {
      // 🔥 rollback if stream fails
      await Session.findByIdAndDelete(session._id);
      throw err;
    }

    return res.status(201).json({ session });
  } catch (error) {
    console.log("createSession error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

// =======================
// GET ACTIVE + SCHEDULED
// =======================
export async function getActiveSessions(req, res) {
  try {
    const sessions = await Session.find({
      status: { $in: ["active", "scheduled"] },
    })
      .populate("host", "name profileImage email clerkId")
      .populate("participant", "name profileImage email clerkId")
      .populate("problems")
      .sort({ createdAt: -1 })
      .limit(20);

    return res.status(200).json({ sessions });
  } catch (error) {
    console.log("getActiveSessions error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

// =======================
// GET MY RECENT SESSIONS
// =======================
export async function getMyRecentSessions(req, res) {
  try {
    const userId = req.user._id;

    const sessions = await Session.find({
      status: "completed",
      $or: [{ host: userId }, { participant: userId }],
    })
      .populate("problems")
      .sort({ createdAt: -1 })
      .limit(20);

    return res.status(200).json({ sessions });
  } catch (error) {
    console.log("getMyRecentSessions error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

// =======================
// GET SESSION BY ID
// =======================
export async function getSessionById(req, res) {
  try {
    const { id } = req.params;

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId")
      .populate("problems");

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    return res.status(200).json({ session });
  } catch (error) {
    console.log("getSessionById error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

// =======================
// JOIN SESSION
// =======================
export async function joinSession(req, res) {
  try {
    const { id } = req.params;
    const { password } = req.body;

    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    const session = await Session.findById(id).select("+password");

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    // ❌ completed
    if (session.status === "completed") {
      return res.status(400).json({ message: "Session completed" });
    }

    // ❌ host cannot join
    if (session.host.toString() === userId.toString()) {
      return res.status(400).json({ message: "Host cannot join" });
    }

    // ❌ early join restriction
    if (session.type === "scheduled") {
      const now = Date.now();
      const start = new Date(session.scheduledAt).getTime();

      if (now < start - 5 * 60 * 1000) {
        return res.status(400).json({ message: "Too early to join" });
      }
    }

    // 🔐 password check
    if (session.isProtected) {
      if (!password) {
        return res.status(400).json({ message: "Password required" });
      }

      const isMatch = await bcrypt.compare(password, session.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Incorrect password" });
      }
    }

    // ⚡ atomic join (prevents race condition)
    const updatedSession = await Session.findOneAndUpdate(
      { _id: id, participant: null },
      { participant: userId, status: "active" },
      { new: true },
    );

    if (!updatedSession) {
      return res.status(409).json({ message: "Session full" });
    }

    // 💬 add to chat
    const channel = chatClient.channel("messaging", updatedSession.callId);
    await channel.addMembers([clerkId]);

    return res.status(200).json({ session: updatedSession });
  } catch (error) {
    console.log("joinSession error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

// =======================
// END SESSION
// =======================
export async function endSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    if (session.host.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only host allowed" });
    }

    if (session.status === "completed") {
      return res.status(400).json({ message: "Already ended" });
    }

    // 🎥 delete video call
    await streamClient.video
      .call("default", session.callId)
      .delete({ hard: true });

    // 💬 delete chat
    await chatClient.channel("messaging", session.callId).delete();

    session.status = "completed";
    await session.save();

    return res.status(200).json({
      message: "Session ended successfully",
      session,
    });
  } catch (error) {
    console.log("endSession error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
