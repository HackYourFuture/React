import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Week1 from './components/week1-homework/week1';
import Week3 from './components/week3-homework/week3';
import Week2 from './components/week2-homework/week2';
import NotFound from './components/404/not-found';
import Home from './components/Home';

const Routes = props => {
  return (
    <Switch>
      <Route path="/week1" exact component={Week1} />
      <Route path="/week2" exact component={Week2} />
      <Route path="/week3" exact component={Week3} />
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
