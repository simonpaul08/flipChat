import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useAuthContext } from "../context/AuthContext";

const DashboardLayout = () => {

  const { currentUser } = useAuthContext()
  const navigate = useNavigate()

  if(!currentUser) {
    return navigate("/")
  }

  return (
      <div className="dashboard-layout">
        <Sidebar />
        <Outlet />
      </div>
  );
};

export default DashboardLayout;
