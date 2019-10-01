import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          React Homeworks
        </Link>
        <ul className="right">
          <li>
            <Link to="/week1">Homework Week1</Link>
          </li>
          <li>
            <NavLink to="/week2">Homework Week2</NavLink>
          </li>
          <li>
            <NavLink to="/week3">Homework Week3</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
