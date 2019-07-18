import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

/**
 * A function component of the Navigation bar of the website
 * @return a `nav` element that contains a list of the links to the sub-pages (routes)
 */
const Navbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>{' '}
        <li className="nav-item">
          <Link className="nav-link" to="/week1">
            Homework 1
          </Link>
        </li>{' '}
        <li className="nav-item">
          <Link className="nav-link" to="/week2">
            Homework 2
          </Link>
        </li>{' '}
        <li className="nav-item">
          <Link className="nav-link" to="/week3">
            Homework 3
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
