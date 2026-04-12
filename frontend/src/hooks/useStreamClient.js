import { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";
import {
  initializeStreamClient,
  disconnectStreamClient,
} from "../lib/stream.js";
import { sessionApi } from "../api/sessions.js";

function useStreamClient(session, loadingSession, isHost, isParticipant) {
  const [streamClient, setStreamClient] = useState(null);
  const [call, setCall] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [isInitializingCall, setIsInitializingCall] = useState(true);

  const hasParticipant = !!session?.participant;
  const callId = session?.callId;
  const sessionStatus = session?.status;

  useEffect(() => {
    let videoCall = null;
    let chatClientInstance = null;
    let isMounted = true;

    const initCall = async () => {
      if (!callId) return;
      if (!isHost && !isParticipant) return;
      if (sessionStatus === "completed") return;
      
      // Removed early return so host can connect before candidate joins

      try {
        const { token, userId, userName, userImage } =
          await sessionApi.getStreamToken();

        if (!isMounted) return;

        const client = await initializeStreamClient(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token,
        );

        setStreamClient(client);

        videoCall = client.call("default", callId);
        await videoCall.join({ create: true });
        setCall(videoCall);

        const apiKey = import.meta.env.VITE_STREAM_API_KEY;
        chatClientInstance = StreamChat.getInstance(apiKey);

        if (chatClientInstance.userID && chatClientInstance.userID !== userId) {
          await chatClientInstance.disconnectUser();
        }

        if (!chatClientInstance.userID) {
          await chatClientInstance.connectUser(
            {
              id: userId,
              name: userName,
              image: userImage,
            },
            token,
          );
        }
        setChatClient(chatClientInstance);

        const chatChannel = chatClientInstance.channel(
          "messaging",
          callId,
        );
        await chatChannel.watch();
        setChannel(chatChannel);
      } catch (error) {
        toast.error("Failed to join video call");
        console.error("Error init call", error);
      } finally {
        if (isMounted) setIsInitializingCall(false);
      }
    };

    if (callId && !loadingSession) initCall();

    // cleanup - performance reasons
    return () => {
      isMounted = false;
      // iife
      (async () => {
        try {
          if (videoCall) await videoCall.leave();
          // Avoid disconnecting chat on unmount to prevent Strict Mode tears
          // StreamChat.getInstance() manages its own connection well across remounts
          await disconnectStreamClient();
        } catch (error) {
          console.error("Cleanup error:", error);
        }
      })();
    };
  }, [callId, sessionStatus, loadingSession, isHost, isParticipant]);

  return {
    streamClient,
    call,
    chatClient,
    channel,
    isInitializingCall,
  };
}

export default useStreamClient;
