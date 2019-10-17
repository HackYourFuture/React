import React from 'react';
import './NavbarButton.css';

const NavbarButton = props => {
  return (
    <div className="NavbarButton">
      <i className={props.class}></i>
    </div>
  );
};

export default NavbarButton;
