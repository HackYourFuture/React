import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Week1 from './React_HW1/todoApp';
import Week2 from './React_HW2/todoApp2';
import Week3 from './React_HW3/index';
import NotFound from './NotFound.jsx';
import Navigation from './Navigation';

class Router extends React.Component {
  render() {
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
  }
}

export default Router;
