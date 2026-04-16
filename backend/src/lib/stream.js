import { StreamChat } from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk";
import { ENV } from "./env.js";
const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;
const isStreamConfigured = Boolean(apiKey && apiSecret);

if (!isStreamConfigured) {
  console.error("STREAM_API_KEY or STREAM_API_SECRET is missing!");
}
export const chatClient = isStreamConfigured
  ? StreamChat.getInstance(apiKey, apiSecret)
  : null; // will be used for chat features
export const streamClient = isStreamConfigured
  ? new StreamClient(apiKey, apiSecret)
  : null; // will be used for video calls
export const isStreamReady = () => isStreamConfigured;
export const upsertStreamUser = async (userData) => {
  try {
    if (!chatClient) return;
    await chatClient.upsertUsers([userData]);
    console.log("stream user upserted successfully : ", userData);
  } catch (error) {
    console.error("Error upserting stream user : ", error);
  }
};
export const deleteStreamUser = async (userId) => {
  try {
    if (!chatClient) return;
    await chatClient.deleteUser(userId);
    console.log("stream user deleted successfully : ,userId");
  } catch (error) {
    console.error("Error deleting the stream user : ", error);
  }
};
