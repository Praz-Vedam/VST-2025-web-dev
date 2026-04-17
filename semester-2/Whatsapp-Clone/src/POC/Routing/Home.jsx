import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';

const Home = (props) => {
const setIsLoggedIn= props.setIsLoggedIn;
console.log(props)

  const handleLogout = async () => {
    await signOut(auth);
    
    setIsLoggedIn(false);
    
     alert("log out");
 }
 

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}



export default Home