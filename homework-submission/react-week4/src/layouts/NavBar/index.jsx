import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

export default function NavBar() {
  let history = useHistory();
  return (
    <nav className="nav-bar">
      <i onClick={() => history.push("/")} className="home-icon"></i>
      <i onClick={() => history.goBack()} className="back-icon"></i>

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

      <i onClick={() => history.goForward()} className="forward-icon"></i>
    </nav>
  );
}
