import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [clickMobileMenu, setClickMobileMenu] = useState(false);
  function myFunction() {
    !clickMobileMenu ? setClickMobileMenu(true) : setClickMobileMenu(false);
    console.log(clickMobileMenu);
  }
  return (
    <div className={!clickMobileMenu ? 'topnav' : 'topnav responsive '}>
      <a href="#home">Home</a>
      <a href="#week1">Week1</a>
      <a href="#week2">Week2</a>
      <a href="#week3">Week3</a>
      <span className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </span>
    </div>
  );
};

export default NavBar;
