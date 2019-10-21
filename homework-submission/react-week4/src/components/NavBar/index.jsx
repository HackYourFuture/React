import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li>
          <Link to="/week1">Week 1 </Link>
        </li>
        <li>
          <Link to="/week2">Week 2 </Link>
        </li>
        <li>
          <Link to="/week3">Week 3 </Link>
        </li>
      </ul>
    </nav>
  );
}
