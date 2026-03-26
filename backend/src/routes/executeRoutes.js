import express from "express";
import { runCode } from "../controllers/executeController.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/", protectRoute, runCode);

export default router;
