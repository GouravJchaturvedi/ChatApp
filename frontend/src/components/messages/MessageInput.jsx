import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message , setMessage] = useState("");
  const {loading , sendMessage} = useSendMessage();
  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!message) return
    await sendMessage(message);
    setMessage("")
  }
  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
    <div className='relative w-full'>
      <input
        type="text"
        className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white pr-12'
        placeholder='Send a message'
        value={message}
        onChange={(e)=> setMessage(e.target.value)}
      />
      <button
        type='submit'
        className='absolute inset-y-0 right-0 flex items-center px-4 bg-blue-500 text-white rounded-r-lg border border-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        {loading ? <div className="loading loading-spinner"></div> : <BsSend className='text-xl' />}
      </button>
    </div>
  </form>
  );
};

export default MessageInput;
