import React from 'react';
import '../styles/nav-link.css';
import { Link } from 'react-router-dom';
const NavLink = ({ linkTo, text, className }) => {
  return (
    <span className={className}>
      <Link to={linkTo}>{text}</Link>
    </span>
  );
};

export default NavLink;
