import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="mb-16">
      <ul className="flex">
        <li className="mr-6">
          <Link to="/" className="text-blue-500 hover:text-blue-800">
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/week1" className="text-blue-500 hover:text-blue-800">
            Week1
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/week2" className="text-blue-500 hover:text-blue-800">
            Week2
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/week3" className="text-blue-500 hover:text-blue-800">
            Week3
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
