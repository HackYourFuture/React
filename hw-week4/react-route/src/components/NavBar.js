import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <ul className='menu'>
      <li className='menu-item'>
        <Link to="/">Home</Link>
      </li>
      <li className='menu-item'>
        <Link to="/week1">Week1</Link>
      </li>
      <li className='menu-item'>
        <Link to="/week2">Week2</Link>
      </li>
      <li className='menu-item'>
        <Link to="/week3">Week3</Link>
      </li>
    </ul>
  );
};

export default NavBar;
