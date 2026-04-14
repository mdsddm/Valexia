import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    clerkId: {
      type: String,
      required: true,
      unique: true,
    },

    role: {
      type: String,
      enum: ["interviewer", "candidate"],
      default: "candidate",
    },

    resumeUrl: {
      type: String,
      default: "",
    },

    skills: [
      {
        type: String,
      },
    ],

    availability: [
      {
        day: String,
        slots: [String],
      },
    ],
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
