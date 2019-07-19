import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App.css';
import NavBar from '../Components/NavBar';
import Home from '../Components/Home';
import Week1 from '../Components/Week1';
import Week2 from '../Components/Week2';
import Week3 from '../Components/Week3';
import NotFound from '../Components/NotFound';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
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
