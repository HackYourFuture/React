import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import linksArray from './linksArray';

const NavBar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  const iconClickhandler = () => {
    !MobileMenu ? setMobileMenu(true) : setMobileMenu(false);
    console.log(MobileMenu);
  };
  const linkClickHandler = () => {
    setMobileMenu(false);
  };

  return (
    <div className={MobileMenu ? 'topnav responsive ' : 'topnav'}>
      {linksArray.map(link => (
        <NavLink exact to={link.href} onClick={linkClickHandler}>
          {link.text}
        </NavLink>
      ))}
      <span className="icon" onClick={iconClickhandler}>
        <i className="fa fa-bars"></i>
      </span>
    </div>
  );
};

export default NavBar;
