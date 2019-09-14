import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = props => {
  if (props.loggedIn) {
    return <Route {...props} />;
  }

  return <Redirect to="/" />;
};

export default PrivateRoute;
