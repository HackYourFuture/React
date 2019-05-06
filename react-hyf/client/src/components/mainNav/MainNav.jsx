import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <div>
      <header>
        <h2>React Homeworks</h2>
      </header>
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/week1">
                Week-1
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/week2">
                Week-2
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/week3">
                Week-3
              </NavLink>
            </li>
          </ul>
        </nav>
      </Router>
    </div>
  );
};

export default MainNav;
