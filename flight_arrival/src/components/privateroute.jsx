import React from "react";
import { Route, Navigate } from "react-router-dom";
import { auth } from "../firebase";

const PrivateRoute = ({ element: Component, hasAccess, ...rest }) => {
  const isLoggedIn = auth.currentUser !== null;

  if (isLoggedIn === hasAccess) {
    return <Route {...rest} element={<Component />} />;
  } else {
    return <Navigate to={hasAccess ? "/login" : "/dashboard"} />;
  }
}

export default PrivateRoute;
