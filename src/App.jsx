import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
