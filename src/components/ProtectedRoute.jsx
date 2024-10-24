import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuthContext();

  return currentUser === null ? <Navigate to={"/register"} /> : {children};
};

export default ProtectedRoute;
