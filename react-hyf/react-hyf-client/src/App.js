import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import Home from './Home';
import { Week1 } from './Week1';
import { Week2, todoArr } from './Week2';
import { Week3 } from './Week3';

function App() {
  return (
    <Router>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route path="/week1" component={Week1} />
      <Route path="/week2" render={() => <Week2 todoArr={todoArr} />} />
      <Route path="/week3" component={Week3} />
    </Router>
  );
}

export default App;
