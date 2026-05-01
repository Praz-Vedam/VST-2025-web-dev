/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from "../../firebase";



const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthWrapper = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);


   useEffect(() => {

    //login or not
     const unsubscribe =  onAuthStateChanged(auth, async (currentUser) => {
      try {
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
          } else {
            setUserData(null);
          }
        } else {
          setUserData(null);
        }
      } finally {
        setIsAuthLoading(false);
      }
    });

    return () =>{
        unsubscribe();
    }

  },[]);



  return (
    <AuthContext.Provider value={{ userData, setUserData, isAuthLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthWrapper;
