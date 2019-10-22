import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p className="home_nav">
        <NavLink exact to="/week1">
          Week1
        </NavLink>
        |
        <NavLink exact to="/week2">
          Week2
        </NavLink>
        |
        <NavLink exact to="/week3">
          Week3
        </NavLink>
      </p>
    </div>
  );
};

export default Home;
