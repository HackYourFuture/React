import React from 'react';
import './styles/nav.css';
import NavLink from './sub-components/navLink';

const Nav = () => {
  const cssClass = 'nav-link';
  return (
    <nav className="navigation">
      <NavLink linkTo="/" text="Home" className={cssClass} />
      <NavLink linkTo="/week1" text="Week 1" className={cssClass} />
      <NavLink linkTo="/week2" text="Week 2" className={cssClass} />
      <NavLink linkTo="/week3" text="Week 3" className={cssClass} />
    </nav>
  );
};
export default Nav;
