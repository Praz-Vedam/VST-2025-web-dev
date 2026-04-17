import { Navigate } from "react-router-dom";

function ProtectedRoute(props) { //HOC -> higher order component.
  const isLoggedIn = props.isLoggedIn;
  const children = props.children;

  console.log(isLoggedIn);

  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
