import React from 'react'
import { useParams } from 'react-router-dom'

const Chat = () => {
const param = useParams();

console.log(param.chatId); 
//chatId is the dynamic part of url provided during Routing.

  return (
    <div>Chat</div>
  )
}

export default Chat