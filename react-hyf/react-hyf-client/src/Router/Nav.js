import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/week1">Week1</Link>
        </li>
        <li>
          <Link to="/week2">Week2</Link>
        </li>
        <li>
          <Link to="/week3">Week3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
