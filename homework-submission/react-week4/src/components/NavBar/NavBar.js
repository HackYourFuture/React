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
    <div className={MobileMenu ? 'topnav responsive ' : 'topnav'}>
      {linksArray.map((link, index) => (
        <NavLink key={index} exact to={link.href} onClick={linkClickHandler}>
          {link.text}
        </NavLink>
      ))}
      <span className="icon" onClick={iconClickhandler}>
        <i>&Xi;</i>
      </span>
    </div>
  );
};

export default NavBar;
