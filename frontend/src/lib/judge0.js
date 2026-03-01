const JUDGE0_API = "https://ce.judge0.com";

const LANGUAGE_IDS = {
  javascript: 63,
  python: 71,
  java: 62,
  cpp: 54,
  c: 50,
  go: 60,
  rust: 73,
  ruby: 72,
};

function preprocessJava(code) {
  // Judge0 requires public class Main
  if (code.includes("class Solution")) {
    return code.replace("class Solution", "public class Main");
  }
  if (!code.includes("public class Main")) {
    return code.replace(/public class\s+\w+/, "public class Main");
  }
  return code;
}

export async function executeCode(language, code) {
  try {
    const languageKey = language.toLowerCase();
    const language_id = LANGUAGE_IDS[languageKey];

    if (!language_id) {
      return { success: false, error: "Unsupported language" };
    }

    // 🔥 Fix Java class name automatically
    if (languageKey === "java") {
      code = preprocessJava(code);
    }

    // Step 1: Create submission
    const submissionRes = await fetch(
      `${JUDGE0_API}/submissions?base64_encoded=false`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source_code: code,
          language_id,
          stdin: "",
        }),
      },
    );

    if (!submissionRes.ok) {
      return { success: false, error: "Failed to create submission" };
    }

    const submissionData = await submissionRes.json();
    const token = submissionData.token;

    if (!token) {
      return { success: false, error: "Submission token missing" };
    }

    // Step 2: Poll result (max 20 tries)
    let result;
    let attempts = 0;

    while (attempts < 20) {
      const res = await fetch(
        `${JUDGE0_API}/submissions/${token}?base64_encoded=false`,
      );

      result = await res.json();

      if (result.status?.id > 2) break;

      await new Promise((r) => setTimeout(r, 500));
      attempts++;
    }

    if (!result) {
      return { success: false, error: "No execution result received" };
    }

    // Compile error
    if (result.compile_output) {
      return { success: false, error: result.compile_output };
    }

    // Runtime error
    if (result.stderr) {
      return { success: false, error: result.stderr };
    }

    // Time limit
    if (result.status?.description === "Time Limit Exceeded") {
      return { success: false, error: "Time Limit Exceeded" };
    }

    return {
      success: true,
      output: result.stdout || "",
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
