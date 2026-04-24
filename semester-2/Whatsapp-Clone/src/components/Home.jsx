import React from "react";
import ChatPanel from "./ChatPanel";
import Chat from "./Chat";

function Home() {
  return (
    <main className="w-full h-screen bg-[#e3e1db]">
      <div className="bg-[#eff2f5] flex shadow-md w-full h-screen">
        <ChatPanel></ChatPanel>
        <Chat />
      </div>
    </main>
  );
}

export default Home;
