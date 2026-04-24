import React from "react";
import { Fingerprint, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "./AuthContext";

function Login(props) {
  const { setUserData } = useAuth();

  const setisLoggedIn = props.setisLoggedIn;
  const navig = useNavigate();
  console.log(navig);

  async function createUser(userInfo) {
    const userObj = userInfo.user;

    // const displayName =  userObj.displayName
    // const email =  userObj.email
    const { displayName, email, photoURL, uid } = userObj;
    const timeStamp = Date.now();

    //writing the doc to firebase
    await setDoc(doc(db, "users", uid), {
      email: email,
      name: displayName,
      profile_pic: photoURL,
      last_seen: timeStamp,
      status: "I'm busy",
    });
  }

  const handleLogin = async () => {
    const userData = await signInWithPopup(auth, new GoogleAuthProvider());
    console.log("userData", userData);

    //write the user data to firestore data
    await createUser(userData);

    //
    const userObj = userData.user;
    const { displayName, email, photoURL, uid } = userObj;

    //set data in context
    setUserData({
      id: uid,
      email: email,
      name: displayName,
      profile_pic: photoURL,
      status: "I'm busy", //Todo cleanup unwanted variables.
    });

    setisLoggedIn(true);

    navig("/");
  };
  return (
    <>
      <div className="h-[220px] bg-[#04a784]">
        <div className="flex items-center pl-30 pt-10 gap-1">
          <img className="h-8" src="icons8-whatsapp-48.png" alt="icon " />
          <div className="text-white uppercase">WhatsApp</div>
        </div>
      </div>

      <div className="bg-[#eff2f5] h-[calc(100vh-220px)] flex justify-center relative">
        <div className="bg-white h-[80%] w-[60%] flex flex-col items-center justify-center absolute top-[-100px] gap-4">
          {/* fingerprint */}
          <Fingerprint
            className="h-20 w-20 text-[#04a784]"
            strokeWidth={1.5}
          ></Fingerprint>
          <div>Sign In</div>
          <div>Sign in with your google account to get started</div>
          <button
            className="bg-[#04a784] flex gap-2 p-4 rounded-xl"
            onClick={handleLogin}
          >
            <div> Sign in with google</div>
            <LogIn></LogIn>
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
