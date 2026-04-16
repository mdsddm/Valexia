import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  createSession,
  getActiveSessions,
  getMyRecentSessions,
  getSessionById,
  joinSession,
  endSession,
  deleteSession,
  analyzeSession,
  getSessionAnalysis,
  saveManualSessionAnalysis,
} from "../controllers/sessionController.js";

const router = express.Router();
router.post("/", protectRoute, createSession);
router.get("/active", protectRoute, getActiveSessions);
router.get("/my-recent", protectRoute, getMyRecentSessions);
router.get("/:id/analysis", protectRoute, getSessionAnalysis);
router.get("/:id", protectRoute, getSessionById);

router.post("/:id/join", protectRoute, joinSession);
router.post("/:id/end", protectRoute, endSession);
router.post("/:id/analyze", protectRoute, analyzeSession);
router.post("/:id/analysis/manual", protectRoute, saveManualSessionAnalysis);
router.delete("/:id", protectRoute, deleteSession);

export default router;
