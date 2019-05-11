import React from 'react';
import NavBar from '../Navbar';

const Layout = props => {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
};

export default Layout;
