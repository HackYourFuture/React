import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeWorkWeek3 from './pages/week3/HomeWorkWeek3';
import HomeWorkWeek2 from './pages/week2/HomeWorkWeek2';
import HomeWorkWeek1 from './pages/week1/HomeWorkWeek1';
import Navbar from './pages/navbar';
import Home from './pages/home';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/week3" component={HomeWorkWeek3} />
          <Route path="/week2" component={HomeWorkWeek2} />
          <Route path="/week1" component={HomeWorkWeek1} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
