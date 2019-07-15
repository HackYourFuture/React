import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <div className="menu">
      <ul class="">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/week1">Week 1</Link>
        </li>
        <li>
          <Link to="/week2">Week 2</Link>
        </li>
        <li>
          <Link to="/week3">Week 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
