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

// 🔹 Parse & simplify error
function parseError(error) {
  if (!error) return null;

  const lines = error.split("\n");
  const message = lines[0];

  // extract line number (generic for most languages)
  const match = error.match(/:(\d+):\d+/);
  const line = match ? match[1] : null;

  return {
    message,
    line,
    full: error, // optional (for "show full error")
  };
}

// 🔹 Fix Java class name issue
function preprocessJava(code) {
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
      return {
        success: false,
        error: { message: "Unsupported language" },
      };
    }

    // preprocess Java
    if (languageKey === "java") {
      code = preprocessJava(code);
    }

    // 🔹 Send code to Judge0
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

    const submissionData = await submissionRes.json();
    const token = submissionData.token;

    let result;
    let attempts = 0;

    // 🔹 Poll for result
    while (attempts < 20) {
      const res = await fetch(
        `${JUDGE0_API}/submissions/${token}?base64_encoded=false`,
      );

      result = await res.json();

      if (result.status?.id > 2) break;

      await new Promise((r) => setTimeout(r, 500));
      attempts++;
    }

    // 🔥 Handle Judge0 statuses (VERY IMPORTANT)
    const status = result.status?.description;

    // ⏱️ Time limit
    if (status === "Time Limit Exceeded") {
      return {
        success: false,
        error: { message: "⏱️ Time Limit Exceeded" },
      };
    }

    // 💾 Memory limit
    if (status === "Memory Limit Exceeded") {
      return {
        success: false,
        error: { message: "💾 Memory Limit Exceeded" },
      };
    }

    // ❌ Compilation error
    if (result.compile_output) {
      return {
        success: false,
        error: parseError(result.compile_output),
      };
    }

    // ❌ Runtime error
    if (result.stderr) {
      return {
        success: false,
        error: parseError(result.stderr),
      };
    }

    // ❌ Any other failure
    if (status !== "Accepted") {
      return {
        success: false,
        error: parseError(result.message || result.stderr || "Unknown error"),
      };
    }

    // ✅ Success
    return {
      success: true,
      output: (result.stdout || "").trim(),
    };
  } catch (error) {
    return {
      success: false,
      error: {
        message: error.message || "Something went wrong",
      },
    };
  }
}
