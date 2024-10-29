import { Navigate, Route, Routes } from "react-router-dom";
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
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useAuthContext } from "./context/AuthContext";
import ForgetPassword from "./pages/ForgetPassword";

const CLIENT_ID = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;

function App() {

  const { currentUser } = useAuthContext();

  const GoogleWrapper = ({ children }) => (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  )

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={!currentUser ? <GoogleWrapper><Register /></GoogleWrapper> : <Navigate to={"/dashboard"} />} />
        <Route path="/login" element={!currentUser ? <GoogleWrapper><Login /></GoogleWrapper> : <Navigate to={"/dashboard"} />} />
        {/* need to add params in forget password, params will be user id (mongodb obj id), which will be needed to check if user exists */}
        <Route path="/forget/password" element={!currentUser ? <ForgetPassword /> : <Navigate to={"/dashboard"} />} />
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
