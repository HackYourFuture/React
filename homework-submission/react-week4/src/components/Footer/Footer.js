import React from 'react';
import { NavLink } from 'react-router-dom';
import linksArray from '../NavBar/linksArray';
import './Footer.css';
const footerLinksArray = linksArray.filter(link => link.href !== '/');

const Footer = () => {
  return (
    <div className="footer_nav">
      {footerLinksArray.map((link, index) => (
        <NavLink key={index} exact to={link.href}>
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Footer;
