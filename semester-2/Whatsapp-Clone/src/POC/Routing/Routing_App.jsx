import { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import PageNotFound from "../../components/NotFound";
import { Routes, Route } from "react-router-dom";
import Chat from "./Chat";
import ProtectedRoute from "./ProtectedRoute";

function Routing_App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <div>Routing_App</div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home setIsLoggedIn={setIsLoggedIn}></Home>
            </ProtectedRoute>
          }
        >
          <Route
            path="/chat/:uniqueId"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Chat></Chat>
              </ProtectedRoute>
            }
          ></Route>
        </Route>
        <Route
          path="/login"
          element={
            <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default Routing_App;
