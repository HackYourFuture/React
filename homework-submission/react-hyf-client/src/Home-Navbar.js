import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeNavbar.css';

const HomeNavbar = () => {
  return (
    <div className="Navbar">
      <NavLink exact activeClassName="active-link" className="NavbarButton" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="active-link" className="NavbarButton" to="/users">
        User App
      </NavLink>
      <NavLink exact activeClassName="active-link" className="NavbarButton" to="/todos">
        Todo App
      </NavLink>
    </div>
  );
};

export default HomeNavbar;
