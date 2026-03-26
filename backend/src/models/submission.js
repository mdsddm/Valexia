import mongoose from "mongoose";

const testCaseResultSchema = new mongoose.Schema({
  input: {
    type: String,
  },
  expectedOutput: {
    type: String,
  },
  actualOutput: {
    type: String,
  },
  passed: {
    type: Boolean,
  },
});

const submissionSchema = new mongoose.Schema(
  {
    // candidate who submitted code
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // interview session
    session: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
      required: true,
    },

    // problem being solved
    problem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Problem",
      required: true,
    },

    // programming language
    language: {
      type: String,
      required: true,
    },

    // candidate code
    code: {
      type: String,
      required: true,
    },

    // execution status
    status: {
      type: String,
      enum: ["pending", "running", "accepted", "wrong_answer", "error"],
      default: "pending",
    },

    // execution time
    executionTime: {
      type: Number, // ms
    },

    // memory usage
    memoryUsed: {
      type: Number, // KB
    },

    // runtime error message
    errorMessage: {
      type: String,
      default: "",
    },

    // results of each test case
    testCaseResults: [testCaseResultSchema],

    // number of passed test cases
    passedCount: {
      type: Number,
      default: 0,
    },

    totalTestCases: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Submission = mongoose.model("Submission", submissionSchema);

export default Submission;
