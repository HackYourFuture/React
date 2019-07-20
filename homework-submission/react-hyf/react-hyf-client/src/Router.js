import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Week1 from './Previous_Homeworks/week1';
import Week2 from './Previous_Homeworks/week2';
import Week3 from './Previous_Homeworks/week3/components/users';
import Navigation from './Navigation/Navigation.js';
import NotFound from './NotFound/NotFound.js';
import React from 'react';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Navigation} />
        <Route path="/week1" component={Week1} />
        <Route path="/week2" component={Week2} />
        <Route path="/week3" component={Week3} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
