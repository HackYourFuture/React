import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home";
import Users from "./Users";
import UserDetails from "./UserDetails";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Routing;
