import Problem from "../models/problem.js";
import { executeCode } from "../services/judge0.js";

export const runCode = async (req, res) => {
  try {
    const { language, code, problemId } = req.body;

    const problem = await Problem.findById(problemId);

    if (!problem) {
      return res.json({
        success: false,
        error: "Problem not found",
      });
    }

    const result = await executeCode(language, code);

    if (!result.success) {
      return res.json(result);
    }

    // compare output with expected output
    const expected = problem.expectedOutput?.get(language) || "";

    const passed = result.output.trim() === expected.trim();

    res.json({
      success: true,
      output: result.output,
      expected,
      passed,
    });
  } catch (err) {
    res.json({
      success: false,
      error: err.message,
    });
  }
};
