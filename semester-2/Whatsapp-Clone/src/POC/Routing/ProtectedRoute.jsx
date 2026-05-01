import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectdRoute(props) {
  const isLoggedIn = props.isLoggedIn;
   const children = props.children;

   console.log(isLoggedIn);

  if (isLoggedIn){
      return  children;
  } else {
     return  <Navigate to='/login' />
  }

}

export default ProtectdRoute