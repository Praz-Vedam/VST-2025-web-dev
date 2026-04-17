import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Chat from "./components/Chat";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <h1>Whatsapp Clone</h1>
      <Routes>
        {/* all routes should be listed here */}
        
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/chat/:chatId" element={<Chat />}></Route>
        {/* dynamic route*/}
        <Route path="*" element={<NotFound />}></Route>
        {/* all routes/ fallback */}
      </Routes>
    </>
  );
}

export default App;
