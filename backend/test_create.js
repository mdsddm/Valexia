import mongoose from 'mongoose';
import Session from './src/models/Session.js';
import { ENV } from './src/lib/env.js';

async function run() {
  try {
    await mongoose.connect(ENV.MONGODB_URI || "mongodb+srv://valexiaAdmin:nIIN6yGtt8r13lSj@valexiacluster.4r95z.mongodb.net/?retryWrites=true&w=majority&appName=ValexiaCluster");
    console.log("Connected");
    const session = await Session.create({
      host: new mongoose.Types.ObjectId(),
      problems: [new mongoose.Types.ObjectId()],
      scheduledAt: null,
      duration: 30,
      type: 'live',
      callId: `session_${Date.now()}`,
      available_topic: ['Arrays'],
      password: null,
    });
    console.log("Created successfully", session);
  } catch (err) {
    console.error("Crash error details:", err);
  } finally {
    process.exit(0);
  }
}
run();
