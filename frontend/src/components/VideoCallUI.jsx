import {
  CallControls,
  CallingState,
  SpeakerLayout,
  useCallStateHooks,
  useCall,
} from "@stream-io/video-react-sdk";
import { MessageSquareIcon, UsersIcon, XIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Channel,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import { VideoCallSkeleton } from "./AppSkeletons.jsx";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/v2/index.css";

function VideoCallUI({ chatClient, channel, isMax }) {
  const navigate = useNavigate();
  const call = useCall();
  const { useCallCallingState, useParticipantCount } = useCallStateHooks();
  const callingState = useCallCallingState();
  const participantCount = useParticipantCount();
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (call) {
      call.camera.disable().catch(e => console.error(e));
      call.microphone.disable().catch(e => console.error(e));
    }
  }, [call]);

  if (callingState === CallingState.JOINING) {
    return <VideoCallSkeleton />;
  }

  return (
    <div
      className={`h-full w-full relative str-video gap-3 ${
        isMax ? "flex flex-col" : "flex"
      }`}
    >
      {/* VIDEO SECTION */}
      <div className="flex-1 flex flex-col relative rounded-xl overflow-hidden bg-base-300 border border-base-300 min-h-0">
        
        {/* Floating Header */}
        <div className="absolute top-3 right-3 z-10 flex gap-2">
          <div className="bg-base-100/80 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-sm border border-base-300">
            <UsersIcon className="w-4 h-4 text-primary" />
            <span className="font-semibold text-sm">
              {participantCount}
            </span>
          </div>

          {chatClient && channel && (
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className={`btn btn-sm btn-circle shadow-sm backdrop-blur-md border ${
                isChatOpen ? "btn-primary border-primary" : "bg-base-100/80 border-base-300 hover:bg-base-200"
              }`}
              title={isChatOpen ? "Hide chat" : "Show chat"}
            >
              <MessageSquareIcon className="size-4" />
            </button>
          )}
        </div>

        {/* Video layout */}
        <div className="absolute inset-0 z-0">
          <SpeakerLayout />
        </div>

        {/* Floating Controls */}
        <div className="absolute bottom-4 inset-x-0 z-10 flex justify-center pointer-events-none">
          <div className="pointer-events-auto bg-base-100/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-base-300 transition-opacity opacity-70 hover:opacity-100">
            <CallControls onLeave={() => navigate("/dashboard")} />
          </div>
        </div>
      </div>

      {/* CHAT SECTION */}
      {chatClient && channel && (
        <div
          className={`flex flex-col rounded-lg shadow overflow-hidden bg-[#272a30] transition-all duration-300 ease-in-out

          ${
            isMax
              ? isChatOpen
                ? "h-1/2 opacity-100"
                : "h-0 opacity-0"
              : isChatOpen
                ? "w-80 opacity-100"
                : "w-0 opacity-0"
          }
          `}
        >
          {isChatOpen && (
            <>
              {/* Chat Header */}
              <div className="bg-[#1c1e22] p-3 border-b border-[#3a3d44] flex items-center justify-between">
                <h3 className="font-semibold text-white">Session Chat</h3>

                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Close chat"
                >
                  <XIcon className="size-5" />
                </button>
              </div>

              {/* Chat Body */}
              <div className="flex-1 overflow-hidden stream-chat-dark">
                <Chat client={chatClient} theme="str-chat__theme-dark">
                  <Channel channel={channel}>
                    <Window>
                      <MessageList />
                      <MessageInput />
                    </Window>
                    <Thread />
                  </Channel>
                </Chat>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default VideoCallUI;
