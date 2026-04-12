import mongoose from 'mongoose';
import Problem from './src/models/problem.js';
import { ENV } from './src/lib/env.js';

async function run() {
  await mongoose.connect(ENV.DB_URL);
  console.log("Connected");
  
  const questionCount = 2;
  const problems = await Problem.aggregate([
    { $sample: { size: Number(questionCount) } },
  ]);
  console.log("Type of problems:", Array.isArray(problems) ? 'Array' : typeof problems);
  console.log("Value:", problems);
  
  process.exit(0);
}
run();
