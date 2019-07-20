import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = ({ navElements }) => {
  return (
    <nav>
      <ul className="navbar">
        {Object.keys(navElements).map(key => (
          <li key={key} className="nav-element">
            <Link to={navElements[key].path} className="nav-link">
              {key}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
