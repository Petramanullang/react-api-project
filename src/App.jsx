import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import Dasboard from "./pages/Dashboard/Dashboard";
import DataUser from "./pages/Dashboard/DataUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dasboard />} />
        <Route path="/data-user/:id" element={<DataUser />} />
      </Routes>
    </BrowserRouter>
  );
}
