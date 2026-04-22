import React from "react";
import { Fingerprint ,LogIn} from "lucide-react";


function Login() {
  return (
    <>
      <div className="h-[220px] bg-[#04a784]">
        <div className="flex items-center pl-30 pt-10 gap-1">
          <img className="h-8" src="icons8-whatsapp-48.png" alt="icon " />
          <div className="text-white uppercase">WhatsApp</div>
        </div>
      </div>

      <div className="bg-[#eff2f5] h-[calc(100vh-220px)] flex justify-center relative">
        <div className="bg-white h-[80%] w-[60%] flex flex-col items-center justify-center absolute top-[-100px] gap-4">
          {/* fingerprint */} 
        <Fingerprint className="h-20 w-20 text-[#04a784]"  strokeWidth={1.5}></Fingerprint>
          <div>Sign In</div>
          <div>Sign in with your google account to get started</div>
          <button className="bg-[#04a784] flex gap-2 p-4 rounded-xl">
            <div> Sign in with google</div>
            <LogIn></LogIn>
            </button>
        </div>
      </div>
    </>
  );
}

export default Login;
