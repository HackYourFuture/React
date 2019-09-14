import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
      <NavLink to="/homework1" className="nav_link">
        Homework 1
      </NavLink>
      <NavLink to="/homework2" className="nav_link">
        Homework 2
      </NavLink>
      <NavLink to="/homework3" className="nav_link">
        Homework 3
      </NavLink>
      <NavLink to="/" className="nav_link">
        Home
      </NavLink>
    </div>
  );
};
export default Navigation;
