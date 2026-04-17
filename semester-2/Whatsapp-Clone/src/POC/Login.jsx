import React from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    alert("User logged in");
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
