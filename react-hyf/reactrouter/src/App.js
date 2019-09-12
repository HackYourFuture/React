import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Week1 from './components/Week1';
import Week2 from './components/Week2';
import Week3 from './components/Week3';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Route exact path="/home" component={Home} />
      <Route exact path="/week1" component={Week1} />
      <Route exact path="/week2" component={Week2} />
      <Route exact path="/week3" component={Week3} />
    </Router>
  );
}

export default App;
