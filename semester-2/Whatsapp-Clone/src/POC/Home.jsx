import React from 'react'

const Home = (props) => {
const setIsLoggedIn=props.setIsLoggedIn;

  const handleLogout = () => {
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