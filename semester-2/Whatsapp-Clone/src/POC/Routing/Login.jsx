import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase";

function Login(props) {
  const setisLoggedIn = props.setisLoggedIn;
  const navig = useNavigate();
  console.log(navig);

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    console.log(result);
    setisLoggedIn(true);
    alert("logged in");
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
