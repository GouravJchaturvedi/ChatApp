import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import {TiMessages} from "react-icons/ti"
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const {selectedConversation , setSelectedConversation} = useConversation()
  useEffect(()=> {
    return () => setSelectedConversation(null)
  } , [setSelectedConversation])
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-gray-700 rounded-xl ml-2 px-4 py-2 mb-2">
            <span className="label-text text-white font-bold">To:</span>
            <span className="text-gray-200 font-extrabold">{selectedConversation.fullname}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const {authUser} = useAuthContext()
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullname} ☁️</p>
        <p>Select a Chat to Start Messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
