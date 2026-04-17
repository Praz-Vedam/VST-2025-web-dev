import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";



const Login = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();

  const handleLogin = async () => {
    //firebase based login.
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    console.log(result);

    
    setIsLoggedIn(true);

    //redirect to "/"
    navigate("/");
  };
  return (
    <>
      <div>Login Page</div>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
