import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import {
  CircleFadingPlusIcon,
  MessageSquare,
  SearchIcon,
  UserRoundIcon,
} from "lucide-react";
import UserCard from "./UserCard";
import { useAuth } from "./AuthContext";

const ChatPanel = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState();
  const { userData } = useAuth();

  useEffect(() => {
    const getUser = async () => {
      const userCollection = collection(db, "users");
      const userList = await getDocs(userCollection);
      const UserArr = userList.docs.map((docs) => {
        return {
          userData: docs.data(),
          id: docs.id,
        };
      });
      setUsers(UserArr);
      console.log("UserArr", UserArr);
      setIsLoading(false);
    };

    getUser();
  }, []);


  let filteredUsers = users;
  if(searchQuery){
    filteredUsers = users.filter((user)=> 
        user.userData.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
    )
  }



  return (
    <div className="w-[30vw] bg-white">
      {/* Leftside top bar */}
      <div className="flex bg-gray-400 p-4 gap-2 justify-between items-center">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={userData.profile_pic || "https://placehold.co/400"}
          alt="user profile pic"
        />
        <div className="flex gap-6 items-end">
          <CircleFadingPlusIcon />
          <MessageSquare />
          <UserRoundIcon />
        </div>
      </div>

      {/* Chatlist */}
      {isLoading ? (
        <div>Loading...</div>
      ) : (

        //search
        <div className="bg-white py-2 px-3">
          <div className="bg-background flex items-center gap-4 px-3 py-2 rounded-lg border-1">
            <SearchIcon className="w-4 h-4" />
            <input
              className="bg-background focus-within:outline-none"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>


          {/* user list */}
        <div>
          {filteredUsers.map((userObj) => {
            return <UserCard key={userObj.id} userObj={userObj} />;
          })}
        </div>
        </div>
      )}
        </div>
  );
};

export default ChatPanel;
