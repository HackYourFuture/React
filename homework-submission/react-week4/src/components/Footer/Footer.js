import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <div>
      <p className="footer_nav">
        <NavLink exact to="/week1">
          Week1
        </NavLink>

        <NavLink exact to="/week2">
          Week2
        </NavLink>

        <NavLink exact to="/week3">
          Week3
        </NavLink>
      </p>
    </div>
  );
};

export default Footer;
