import { MessageSquareText } from 'lucide-react';
import React from 'react'
import { useParams } from 'react-router-dom'

function Chat() {
  const parm = useParams();
  console.log(parm.uniqueId);
    const receiverId = parm.uniqueId;

if(!receiverId){
  return (
        <section className="w-[70%] h-full flex flex-col gap-4 items-center justify-center">
        <MessageSquareText
          className="w-28 h-28 text-gray-400"
          strokeWidth={1.1}
        />
        <p className="text-sm text-center text-gray-400">
          select any contact to
          <br />
          start a chat with
        </p>
      </section>
  )
}

  return (
    <div>Chat:{receiverId}</div>
  )
}

export default Chat