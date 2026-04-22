import Home from "./Components/Home"
import {Routes , Route} from 'react-router-dom'
import Login from "./Components/Login"
import Chat from "./Components/Chat"
import PageNotFound from "./Components/PageNotFound"

function App() {
  

  return (
    <>
     {/* <h1>WhatsApp Clone</h1> */}
      <Routes>
        <Route path="/" element={<Home></Home>}  > </Route>
        <Route path="/login" element={<Login />}  > </Route>
        <Route path="/chat/:uniqueId" element = {<Chat></Chat>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
  
    </>
  )
}

export default App


