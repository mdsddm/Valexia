import mongoose from 'mongoose';
import { createSession } from './src/controllers/sessionController.js';
import { ENV } from './src/lib/env.js';
import User from './src/models/User.js';

async function run() {
  try {
    await mongoose.connect(ENV.DB_URL);
    console.log("Connected");
    
    // Pick a user
    const user = await User.findOne();
    if(!user) {
      console.log("No user found");
      process.exit(1);
    }
    
    const req = {
      body: {
        type: 'live',
        duration: 30,
        topics: ['Arrays'],
        questionCount: 2
      },
      user: {
        _id: user._id,
        clerkId: user.clerkId
      }
    };
    
    let statusCode;
    let responseBody;
    const res = {
      status: (code) => { statusCode = code; return res; },
      json: (body) => { responseBody = body; }
    };
    
    console.log("Calling createSession...");
    await createSession(req, res);
    console.log("Finished:", statusCode, responseBody);
    
  } catch (err) {
    console.error("Crash error details:", err);
  } finally {
    process.exit(0);
  }
}
run();
