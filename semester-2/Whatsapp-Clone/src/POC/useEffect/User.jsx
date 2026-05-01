import React, { useEffect, useState } from "react";

function User() {
  const [loading, setLoading] = useState(true);
const [user , setUser] = useState(null);
  

function cb(){
   console.log("I am after render");
   
   (async function fetchUser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const userData = await response.json();
    console.log(userData);  
    setLoading(false);
    setUser(userData);

   })();


}

  useEffect(cb, []);


  console.log("render page")

  if (loading) {
    return (
      <>
        <div>Profile Page</div>
        <div>..Loading</div>
      </>
    );
  }

  if (loading == false) {
    return (
      <>
        <div>Profile Page</div>
        <div>{user.username}</div>
        <div>{user.name}</div>
        <div>{user.phone}</div>
        <div>{user.email}</div>
      </>
    );
  }
}

export default User;
