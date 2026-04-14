import mongoose from "mongoose";

const exampleSchema = new mongoose.Schema({
  input: String,
  output: String,
  explanation: String,
});

const testCaseSchema = new mongoose.Schema({
  input: {
    type: String,
    required: true,
  },
  output: {
    type: String,
    required: true,
  },
  isHidden: {
    type: Boolean,
    default: false,
  },
});

const problemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
    },

    category: String,

    description: {
      text: {
        type: String,
        required: true,
      },
      notes: [String],
    },

    examples: [exampleSchema],

    constraints: [String],

    tags: [String],

    supportedLanguages: [String],

    starterCode: {
      type: Map,
      of: String,
    },

    expectedOutput: {
      type: Map,
      of: String,
    },

    testCases: [testCaseSchema],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;
