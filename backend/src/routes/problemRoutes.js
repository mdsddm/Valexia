import express from "express";
import {
  getProblems,
  getProblemById,
} from "../controllers/problemController.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/", protectRoute, getProblems);
router.get("/:id", protectRoute, getProblemById);

export default router;
