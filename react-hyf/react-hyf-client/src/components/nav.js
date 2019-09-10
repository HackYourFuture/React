import React from 'react';
import './styles/nav.css';
import NavLink from './sub-components/navLink';

const Nav = () => {
  const cssClass = 'nav-link';
  return (
    <nav className="navigation">
      <NavLink linkTo="/" text="Home" />
      <NavLink linkTo="/week1" text="Week 1 Homework" className={cssClass} />
      <NavLink linkTo="/week2" text="Week 2 Homework" className={cssClass} />
      <NavLink linkTo="/week3" text="Week 3 Homework" className={cssClass} />
    </nav>
  );
};
export default Nav;
