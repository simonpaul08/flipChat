import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="plans" element={<Dashboard />} />
          <Route path="profile" element={<Dashboard />} />
          <Route path="billing" element={<Dashboard />} />
          <Route path="help" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
