import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Home = (props) => {
const setIsLoggedIn=props.setIsLoggedIn;

  const handleLogout = async () => {
    //firebase logout
    await signOut(auth);

    setIsLoggedIn(false);
        alert("User logged out")
  }

  return (
    <>
    <div>Home Page</div>
    <button onClick={handleLogout}>LogOut</button>
  </>
  )
}

export default Home