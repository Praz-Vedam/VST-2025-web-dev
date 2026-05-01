import React, { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import { Navigate, Routes, Route } from "react-router-dom";
import Chat from "./Chat";
import ProtectedRoute from "./ProtectedRoute";

function Routing_App() {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  return (
    <>
      <div>Routing_App</div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home setisLoggedIn={setisLoggedIn}></Home>
            </ProtectedRoute>
          }
        >
          <Route
            path="/chat/:uniqueId"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Chat setisLoggedIn={setisLoggedIn}></Chat>
              </ProtectedRoute>
            }
          ></Route>
        </Route>
        <Route
          path="/login"
          element={<Login setisLoggedIn={setisLoggedIn} />}
        ></Route>
      </Routes>
    </>
  );
}

export default Routing_App;
