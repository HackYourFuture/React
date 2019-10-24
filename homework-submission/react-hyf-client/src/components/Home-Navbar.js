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
        User Profiles
      </NavLink>
      <a className="NavbarButton" href="https://angry-brattain-c60e5e.netlify.com/">
        Todos
      </a>
    </div>
  );
};

export default HomeNavbar;
