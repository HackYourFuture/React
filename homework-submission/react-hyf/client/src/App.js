import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homework3 from './components/week3/Homework3';
import Homework1 from './components/week1/Homework1';
import Homework2 from './components/week2/Homework2';
import HomePage from './components/HomePage';
import NavBAr from './components/NavBar';
import NotFound from './components/404';

import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <NavBAr />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/week1" component={Homework1} />
          <Route path="/week2" component={Homework2} />
          <Route path="/week3" component={Homework3} />
          <Route path="" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
