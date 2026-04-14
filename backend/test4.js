import mongoose from 'mongoose';
import { createSession } from './src/controllers/sessionController.js';
import { ENV } from './src/lib/env.js';

async function run() {
  await mongoose.connect(ENV.DB_URL);
  
  const req = {
    body: {
      type: 'live',
      duration: 30,
      topics: ['Arrays'],
      questionCount: 2
    },
    user: {
      _id: new mongoose.Types.ObjectId(),
      clerkId: "test_clerk_id"
    }
  };
  
  const res = {
    status: (code) => res,
    json: (body) => console.log("JSON Body:", body)
  };
  
  await createSession(req, res);
  process.exit(0);
}
run();
