import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    // 👤 interviewer
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    // 👤 candidate
    participant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
      index: true,
    },

    // 📌 type
    type: {
      type: String,
      enum: ["live", "scheduled"],
      default: "live",
      index: true,
    },

    // 🏷️ name
    name: {
      type: String,
      trim: true,
      default: "Interview Session",
    },

    // ⏰ scheduling
    scheduledAt: {
      type: Date,
      required: function () {
        return this.type === "scheduled";
      },
      validate: {
        validator: function (value) {
          if (this.type === "scheduled") {
            return value && value.getTime() > Date.now();
          }
          return true;
        },
        message: "Scheduled time must be in the future",
      },
      index: true,
    },

    duration: {
      type: Number,
      default: 60,
      min: 1,
      max: 300,
    },

    questionCount: {
      type: Number,
      default: 2,
    },

    // 📊 status
    status: {
      type: String,
      enum: ["scheduled", "active", "completed", "cancelled"],
      default: function () {
        return this.type === "live" ? "active" : "scheduled";
      },
      index: true,
    },

    startedAt: {
      type: Date,
      default: null,
    },

    // 🧠 topics
    available_topic: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => Array.isArray(arr) && arr.length > 0,
        message: "At least one topic is required",
      },
    },

    chosen_topic: {
      type: [String],
      default: [],
      validate: [
        {
          validator: function (arr) {
            return arr.length <= 2;
          },
          message: "Max 2 topics allowed",
        },
      ],
    },

    // 🔐 password
    password: {
      type: String,
      select: false,
      default: null,
    },

    isProtected: {
      type: Boolean,
      default: false,
    },

    // 🧩 problems
    problems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Problem",
      },
    ],

    // 📞 video
    callId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    // 💻 snapshots
    codeSnapshots: [
      {
        code: String,
        language: String,
        timestamp: { type: Date, default: Date.now },
      },
    ],

    // 🚨 logs
    monitoringLogs: [
      {
        type: {
          type: String,
          enum: ["tab_switch", "copy_paste", "window_blur"],
        },
        timestamp: { type: Date, default: Date.now },
      },
    ],

    // 🎥 recording
    recordingUrl: {
      type: String,
      default: "",
    },

    // 📈 analytics
    analytics: {
      totalRunCount: { type: Number, default: 0 },
      errorCount: { type: Number, default: 0 },
      successfulRuns: { type: Number, default: 0 },
      codingTime: { type: Number, default: 0 },
    },

    // 📝 feedback
    feedback: {
      rating: { type: Number, min: 1, max: 5 },
      comments: String,
    },
  },
  { timestamps: true },
);

// 🔁 middleware
sessionSchema.pre("save", function () {
  this.isProtected = !!this.password;
});

// ⚡ virtuals
sessionSchema.virtual("isExpired").get(function () {
  if (this.type === "scheduled" && this.scheduledAt) {
    return Date.now() > this.scheduledAt.getTime() + this.duration * 60000;
  }
  return false;
});

sessionSchema.virtual("canJoin").get(function () {
  if (this.type !== "scheduled") return true;

  const now = Date.now();
  const start = this.scheduledAt?.getTime();

  return start && now >= start - 5 * 60 * 1000;
});

// 📦 indexes
sessionSchema.index({ host: 1, status: 1 });
sessionSchema.index({ participant: 1, status: 1 });

const Session = mongoose.model("Session", sessionSchema);

export default Session;
