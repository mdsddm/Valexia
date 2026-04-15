import Problem from "../models/Problem.js";
import { executeCode } from "../services/judge0.js";

export const runCode = async (req, res) => {
  try {
    const { language, code, problemId, customInput } = req.body;

    const problem = await Problem.findById(problemId);

    if (!problem) {
      return res.json({
        success: false,
        error: "Problem not found",
      });
    }

    const result = await executeCode(language, code, customInput);

    if (!result.success) {
      return res.json(result);
    }

    // if customInput is provided, don't validate expected output length
    if (customInput !== undefined && customInput !== null && customInput.trim() !== "") {
      return res.json({
        success: true,
        output: result.output,
        expected: null,
        passed: null,
      });
    }

    const expectedFromMap =
      problem.expectedOutput?.get?.(language) ||
      problem.expectedOutput?.[language] ||
      "";
    const expectedFromTestCases =
      problem.testCases?.find((tc) => !tc?.isHidden)?.output ||
      problem.testCases?.[0]?.output ||
      "";
    const expectedFromExamples = problem.examples?.[0]?.output || "";
    const expected =
      [expectedFromMap, expectedFromTestCases, expectedFromExamples].find(
        (value) => typeof value === "string" && value.trim().length > 0,
      ) || "";

    if (!expected) {
      return res.json({
        success: true,
        output: result.output,
        expected: null,
        passed: true,
      });
    }

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
