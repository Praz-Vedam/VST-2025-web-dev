import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";

function Login({isLoggedIn, setIsLoggedIn}) {
    const navig = useNavigate();

  //return if already true
if(isLoggedIn){
      navig("/");
}

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    console.log(result);
    setIsLoggedIn(true)
    // alert("logged in");
    navig("/");
  };

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>LogIn</button>
    </>
  );
}

export default Login;
