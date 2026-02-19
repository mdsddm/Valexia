import dotenv from "dotenv";
dotenv.config({ quiet: true });
export const ENV = {
  PORT: process.env.PORT,
  // support common env var names and fallbacks
  DB_URL:
    process.env.DB_URL ||
    process.env.MONGODB_URI ||
    process.env.MONGO_URI ||
    process.env.DB_URl,
  NODE_ENV: process.env.NODE_ENV,
};
