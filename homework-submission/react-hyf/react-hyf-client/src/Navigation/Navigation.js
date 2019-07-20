import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to={'/'}>Home</Link>
      </li>
      <li className="nav-item">
        <Link to={'/week1'}>Week1</Link>
      </li>
      <li className="nav-item">
        <Link to={'/week2'}>Week2</Link>
      </li>
      <li className="nav-item">
        <Link to={'/week3'}>Week3</Link>
      </li>
    </ul>
  );
};

export default Navigation;
