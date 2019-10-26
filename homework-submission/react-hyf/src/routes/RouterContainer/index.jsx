import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';

const RouterContainer = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
      </Fragment>
    </Router>
  );
};

export default RouterContainer;
