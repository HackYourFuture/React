import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/" className="text-link">
          <li>Home</li>
        </Link>
        <Link to="/week1" className="text-link">
          <li>Week1</li>
        </Link>
        <Link to="week2" className="text-link">
          <li>Week2</li>
        </Link>
        <Link to="week3" className="text-link">
          <li>Week3</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
