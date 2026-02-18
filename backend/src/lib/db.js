import mongoose from "mongoose";
import { ENV } from "./env.js";
export const connectDB = async () => {
  try {
    const uri = ENV.DB_URL;
    if (!uri) throw new Error("Missing MongoDB connection string (DB_URL)");
    const conn = await mongoose.connect(uri);
    console.log("✅ connected to MongoDB : ", conn.connection.host);
  } catch (error) {
    console.log("❌ Error connecting to MongoDB : ", error);
    process.exit(1); // 0 means success 1 mean failure
  }
};
