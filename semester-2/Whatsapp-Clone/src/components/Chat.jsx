import { MessageSquareText, PlusIcon, SendIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { arrayUnion, doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

function Chat() {
  const parm = useParams();
  console.log(parm.uniqueId);
  const receiverId = parm.uniqueId; //Friend's Id

  const [secondUser, setSecondUser] = useState();
  const [msg, setMsg] = useState(""); //taking input
  const [msgList, setMsgList] = useState([]); //All chats b/w user1 and user2
  const { userData } = useAuth(); //My Id

  //chat Id is a unique Id for the chat section between 2 users.
  const chatId = userData?.id
    ? userData.id > receiverId
      ? `${userData.id}-${receiverId}`
      : `${receiverId}-${userData.id}`
    : null;

  useEffect(() => {
    //base cases
    if (!receiverId || !chatId) {
      return;
    }

    //Get user Data from firestore

    const getUser = async () => {
      const docRef = doc(db, "users", receiverId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("second user data", docSnap.data());
        setSecondUser(docSnap.data());
      }
    };
    getUser();

// Logic for getting all the messages bewtween user1 and user2. 
// set the messages in msgList variable.
   //message List
    const msgUnsubscribe = onSnapshot(doc(db, "user-chats", chatId), (doc) => {
      setMsgList(doc.data()?.messages || []);
    });

     return () => {
      msgUnsubscribe();
    }
  }, [receiverId, chatId]);

  const handleSendMsg = async ()=> {
    //logic for sending a msg to a selected user

  if (msg && chatId && userData?.id) {
      const date = new Date();
      const timeStamp = date.toLocaleString("en-Us", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    

    if (msgList?.length === 0) {
     
      await setDoc(doc(db, "user-chats", chatId), {
        chatId: chatId,
        messages: [
          {
            text: msg,
            time: timeStamp,
            sender: userData.id,
            receiver: receiverId,
          },
        ],
      });
    } else {
      await updateDoc(doc(db, "user-chats", chatId), {
        chatId: chatId,
        messages: arrayUnion({
          text: msg,
          time: timeStamp,
          sender: userData.id,
          receiver: receiverId,
        }),
      });
    }
  }

  setMsg("")
  }

  if (!receiverId) {
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
    );
  }

  return (
    <section className="w-[70%] h-full flex flex-col gap-4 items-center justify-center">
      <div className="h-full w-full flex flex-col bg-amber-50">
        {/* top bar*/}
        <div className="bg-[#eff2f5] py-2 px-4 flex items-center gap-2 shadow-sm">
          <img
            className="h-14 w-14 rounded-full object-cover "
            src={"/default_profile_pic.webp"}
            alt=""
          />
          <div>
            <h3>{secondUser?.name}</h3>
          </div>
        </div>

        {/* message list */}
        <div className="flex-grow flex flex-col gap-12 p-6 overflow-y-scroll">
          {msgList?.map((m, index) => (
            <div
              key={index}
              data-sender={m.sender === userData?.id}
              // break-words is the edge case where a single word is quite long, so we need to break that word before it breaks the ui.
              className={`bg-white  w-fit rounded-md p-2 shadow-sm max-w-[400px] break-words data-[sender=true]:ml-auto data-[sender=true]:bg-[#d9fdd2]`}
            >
              <p>{m?.text}</p>
              <p className="text-xs text-neutral-500  text-end">{m?.time}</p>
            </div>
          ))}
        </div>

        {/* input section */}
        <div className="bg-[#eff2f5] py-3 px-6 shadow-xs flex items-center gap-6">
          <PlusIcon />
          <input
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                handleSendMsg();
              }
            }}
            placeholder="Type a message..."
            className="w-full py-2 px-4 rounded bg-white focus:outline-none"
            type="text"
          />
          <button onClick={handleSendMsg}>
            <SendIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Chat;
