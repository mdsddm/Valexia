import mongoose from 'mongoose';
import Problem from './src/models/problem.js';
import { ENV } from './src/lib/env.js';

async function run() {
  await mongoose.connect(ENV.DB_URL);
  try {
    const problems = await Problem.aggregate([
      { $sample: { size: Number(undefined) } },
    ]);
    console.log("Problems:", problems);
  } catch(e) {
    console.log("Error:", e.message);
  }
  process.exit(0);
}
run();
