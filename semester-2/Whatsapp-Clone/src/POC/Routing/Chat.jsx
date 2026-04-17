import React from 'react'
import { useParams } from 'react-router-dom'

function Chat() {
  const parm = useParams();
  console.log(parm);
  console.log(parm.uniqueId);

  return (
    <div>Chat</div>
  )
}

export default Chat