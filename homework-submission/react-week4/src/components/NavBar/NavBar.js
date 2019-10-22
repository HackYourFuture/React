import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import linksArray from './linksArray';

const NavBar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  const iconClickhandler = () => {
    !MobileMenu ? setMobileMenu(true) : setMobileMenu(false);
  };
  const linkClickHandler = () => {
    setMobileMenu(false);
  };

  return (
    <div className={MobileMenu ? 'nb_topnav nb_responsive ' : 'nb_topnav'}>
      {linksArray.map((link, index) => (
        <NavLink key={index} exact to={link.href} onClick={linkClickHandler}>
          {link.text}
        </NavLink>
      ))}
      <span className="nb_icon" onClick={iconClickhandler}>
        <i>&#8801;</i>
      </span>
    </div>
  );
};

export default NavBar;
