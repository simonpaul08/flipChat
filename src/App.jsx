import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Plans from "./pages/Plans";
import Profile from "./pages/Profile";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Billing from "./pages/Billing";
import Help from "./pages/Help";
import CreateLink from "./pages/CreateLink";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="create" element={<CreateLink />} />
          <Route path="plans" element={<Plans />} />
          <Route path="profile" element={<Profile />} />
          <Route path="billing" element={<Billing />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
