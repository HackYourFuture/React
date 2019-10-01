import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import HomeworkWeek1 from './components/HomeworkWeek1';
import HomeworkWeek2 from './components/HomeworkWeek2';
import HomeworkWeek3 from './components/HomeworkWeek3';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route path="/week1" component={HomeworkWeek1} />
        <Route path="/week2" component={HomeworkWeek2} />
        <Route path="/week3" component={HomeworkWeek3} />
      </div>
    </Router>
  );
}

export default App;
