import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Week01 from './Components/Homework-w01/index';
import Week02 from './Components/Homework-w02/index';
import Week03 from './Components/Homework-w03/index';
import Extra from './Components/extrapage';
import Background from '../src/background.jpg';
import Person from '../src/2078.png';
import './App.css';

function Home() {
  return (
    <div>
      <img className="person" src={Person}></img>
      <h2 className="home">React Module Final Homework</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url(${Background})` }}>
        <Router>
          <ul className="nav-bar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/week01">Week01</Link>
            </li>
            <li>
              <Link to="/week02">Week02</Link>
            </li>
            <li>
              <Link to="/week03">Week03</Link>
            </li>
            <li>
              <Link to="/extra">?</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/week01">
              <Week01 />
            </Route>
            <Route path="/week02">
              <Week02 />
            </Route>
            <Route path="/week03">
              <Week03 />
            </Route>
            <Route path="/extra">
              <Extra />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
