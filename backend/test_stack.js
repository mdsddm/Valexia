import mongoose from 'mongoose';
import Session from './src/models/Session.js';

async function test() {
  try {
    await Session.create({
      host: 'invalid_id', // This will fail validation
      problems: [],
      scheduledAt: null,
      duration: 30,
      type: 'live',
      callId: 'test',
      available_topic: ['Test']
    });
  } catch (e) {
    console.log("STACK:");
    console.log(e.stack);
  }
}
test();
