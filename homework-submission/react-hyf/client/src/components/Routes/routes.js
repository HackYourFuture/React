import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../404/not-found';
import Container from '../Container';
import Home from '../Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/week/:id" exact component={Container} />
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
