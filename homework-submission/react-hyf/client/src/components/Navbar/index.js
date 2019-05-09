import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  return (
    <nav className="navbar_wrapper">
      <ul className="left_side">
        <li>
          <NavLink to="/week1" activeClassName="active">
            Week1
          </NavLink>
        </li>
        <li>
          <NavLink to="/week2" activeClassName="active">
            Week2
          </NavLink>
        </li>
        <li>
          <NavLink to="/week3" activeClassName="active">
            Week3
          </NavLink>
        </li>
      </ul>

      <div className="right_side" />
    </nav>
  );
};

export default NavBar;
