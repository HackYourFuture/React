import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="d-flex justify-content-between my-3 align-items-center border-bottom">
      <Link to="/">
        <div className="d-flex">
          <span>
            <i className="fa fa-home"></i>
          </span>
          <h5 className="ml-2 text-danger font-italic">Abdullah</h5>
        </div>
      </Link>
      <ul className="d-flex justify-content-between">
        <li className="list-group-item border-0">
          <Link to="/week1">Week1</Link>
        </li>
        <li className="list-group-item border-0">
          <Link to="/week2">Week2</Link>
        </li>
        <li className="list-group-item border-0">
          <Link to="/week3">Week3</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
