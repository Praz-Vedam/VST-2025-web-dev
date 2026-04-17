import { createRoot } from "react-dom/client";
import {BrowserRouter} from 'react-router-dom'
import App from "./App.jsx";
import ReactRouter from "./POC/ReactRouter.jsx";
import Routing_App from "./POC/Routing/Routing_App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter> 
    {/* <App /> */}
    {/* <ReactRouter/> */}
    <Routing_App/>
  </BrowserRouter>,
);
