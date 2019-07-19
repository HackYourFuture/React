import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="link">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/week1">WEEK1</Link>
        </li>
        <li>
          <Link to="/week2">WEEK2</Link>
        </li>
        <li>
          <Link to="/week3">WEEK3</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
