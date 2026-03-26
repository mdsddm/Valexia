import Problem from "../models/problem.js";

export async function getProblems(req, res) {
  try {
    const problems = await Problem.find().select("title difficulty tags");

    res.status(200).json({ problems });
  } catch (error) {
    console.error("Error fetching problems:", error);
    res.status(500).json({ message: "Server error" });
  }
}

export async function getProblemById(req, res) {
  try {
    const { id } = req.params;

    const problem = await Problem.findById(id);

    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    res.status(200).json({ problem });
  } catch (error) {
    console.error("Error fetching problem:", error);
    res.status(500).json({ message: "Server error" });
  }
}
