import React from 'react';
import './App.css';
import PreviousHomework1 from './components/previous-homework1';
import PreviousHomework2 from './components/previous-homework2';
import PreviousHomework3 from './components/previous-homework3';
import Home from './components/home';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/week1" component={PreviousHomework1} />
        <Route path="/week2" component={PreviousHomework2} />
        <Route path="/week3" component={PreviousHomework3} />
      </div>
    </Router>
  );
}

export default App;
