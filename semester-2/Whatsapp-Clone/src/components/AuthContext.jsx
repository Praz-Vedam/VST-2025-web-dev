import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useContext,useEffect } from "react";
import { createContext } from "react";
import { auth, db } from "../../firebase";

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}


const AuthWrapper = ({children}) => {
  const [userData, setUserData] = useState(null);

  //logged in or not
     useEffect(() => {

    //login or not
     const unsubscribe =  onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
  
          const { profile_pic, name, email } = docSnap.data();
          setUserData({
            id: currentUser.uid,
            profile_pic: profile_pic,
            email: email,
            name: name,
          });
        }
       }

    });

    return () =>{
        unsubscribe();
    }

  },[]);

  return (
    <AuthContext.Provider value={{userData,setUserData}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthWrapper