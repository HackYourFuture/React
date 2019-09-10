import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomeworkWeek1 from './components/homework1';
import HomeworkWeek2 from './components/homework2';
import HomeworkWeek3 from './components/homework3';
import './App.css';

function Home() {
  return <div className="home-paragraph">You are at home now</div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="app-header">Welcome to My Homeworks</h1>
        <ul className="router-ul">
          <li>
            <Link className="router-list" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="router-list" to="/homework1">
              Homework Week1
            </Link>
          </li>
          <li>
            <Link className="router-list" to="/homework2">
              Homework Week2
            </Link>
          </li>
          <li>
            <Link className="router-list" to="/homework3">
              Homework Week3
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/homework1" component={HomeworkWeek1} />
        <Route path="/homework2" component={HomeworkWeek2} />
        <Route path="/homework3" component={HomeworkWeek3} />
      </Switch>
    </Router>
  );
}

export default App;
