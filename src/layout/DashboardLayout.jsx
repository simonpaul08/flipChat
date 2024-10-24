import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useAuthContext } from "../context/AuthContext";

const DashboardLayout = () => {

  const { currentUser } = useAuthContext()
  const navigate = useNavigate()

  console.log(currentUser)

  if(currentUser === null){
    return <Navigate to="/"/>
  }
  return (
      <div className="dashboard-layout">
        <Sidebar />
        <Outlet />
      </div>
  );
};

export default DashboardLayout;
