import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="nav">
      <Link to="/">
        <li>
          <h1>Home</h1>
        </li>
      </Link>
      <Link to="/Week1">
        <li>
          <h1>week1</h1>
        </li>
      </Link>
      <Link to="/Week2">
        <li>
          <h1>week2</h1>
        </li>
      </Link>
      <Link to="/Week3">
        <li>
          <h1>week3</h1>
        </li>
      </Link>
    </ul>
  );
};

export default Nav;
