import mongoose from 'mongoose';
import Problem from './src/models/problem.js';
import { ENV } from './src/lib/env.js';
import { createSession } from './src/controllers/sessionController.js';

async function run() {
  await mongoose.connect(ENV.DB_URL);
  const aggregateResult = await Problem.aggregate([ { $sample: { size: 2 } } ]);
  console.log("Aggregate result type:", typeof aggregateResult);
  console.log("Is array?", Array.isArray(aggregateResult));
  console.log("Has map?", typeof aggregateResult.map === 'function');
  
  process.exit(0);
}
run();
