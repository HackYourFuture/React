import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li className="menu-item">
          <Link to="/week1">Week-1</Link>
        </li>
        <li className="menu-item">
          <Link to="/week2">Week-2</Link>
        </li>
        <li className="menu-item">
          <Link to="/week3">Week-3</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
