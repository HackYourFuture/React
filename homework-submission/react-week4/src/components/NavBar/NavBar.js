import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  function myFunction() {
    !MobileMenu ? setMobileMenu(true) : setMobileMenu(false);
    console.log(MobileMenu);
  }
  const mouseLeaveHandler = () => {
    setMobileMenu(false);
  };

  return (
    <div className={MobileMenu ? 'topnav responsive ' : 'topnav'} onMouseLeave={mouseLeaveHandler}>
      <NavLink exact to="/">
        Home
      </NavLink>

      <NavLink exact to="/week1">
        Week1
      </NavLink>

      <NavLink exact to="/week2">
        Week2
      </NavLink>

      <NavLink exact to="/week3">
        Week3
      </NavLink>

      <span className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </span>
    </div>
  );
};

export default NavBar;
