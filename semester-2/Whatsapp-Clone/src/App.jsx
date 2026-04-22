import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Chat from "./Components/Chat";
import ProtectedRoute from "./POC/Routing/ProtectedRoute"
import { useState } from "react";

function App() {
    const [isLoggedIn, setisLoggedIn] = useState(true);
  
  return (
    <>
      {/* <h1>WhatsApp Clone</h1> */}
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

export default App;
