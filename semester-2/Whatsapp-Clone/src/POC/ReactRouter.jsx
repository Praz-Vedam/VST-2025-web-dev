import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { useState } from "react";

const ReactRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div>ReactRouter</div>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
      </Routes>
    </>
  );
};

function ProtectedRoute(props) {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  const children = props.setIsLoggedIn;

  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ReactRouter;
