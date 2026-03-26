import mongoose from "mongoose";
import dotenv from "dotenv";
import Problem from "./src/models/problem.js";
import { PROBLEMS } from "../frontend/src/data/problems.js";

dotenv.config({ path: "./.env" });

async function seedProblems() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI not found in .env file");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    const formattedProblems = Object.values(PROBLEMS).map((p) => {
      const tags = p.category
        ? p.category.split("•").map((t) => t.trim().toLowerCase())
        : [];

      const testCases = (p.examples || []).map((ex, index) => ({
        input: ex.input,
        output: ex.output,
        isHidden: index !== 0,
      }));

      return {
        problemId: p.id,

        title: p.title,

        difficulty: p.difficulty.toLowerCase(),

        category: p.category,

        description: p.description || {
          text: "",
          notes: [],
        },

        examples: p.examples || [],

        constraints: p.constraints || [],

        tags,

        supportedLanguages: Object.keys(p.starterCode || {}),

        starterCode: p.starterCode || {},

        expectedOutput: p.expectedOutput || {},

        testCases,

        createdBy: null,
      };
    });

    await Problem.deleteMany({});
    console.log("🗑️ Old problems removed");

    await Problem.insertMany(formattedProblems);

    console.log(`🚀 Inserted ${formattedProblems.length} problems`);

    process.exit();
  } catch (error) {
    console.error("❌ Error seeding problems:", error.message);
    process.exit(1);
  }
}

seedProblems();
