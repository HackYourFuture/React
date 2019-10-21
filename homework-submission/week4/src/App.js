import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homework1 from './components/homework1';
import Homework2 from './components/homework2';
import Homework3 from './components/homework3';

function Home() {
  return <div className="home-paragraph">Home,please select your route</div>;
}

function App() {
  return (
    <Router>
      <div>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/week1">Week1</Link>
          </li>
          <li>
            <Link to="/week2">Week2</Link>
          </li>
          <li>
            <Link to="/week3">Week3</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/week1" component={Homework1}/>
          <Route exact path="/week2" component={Homework2}/>
          <Route path="/week3" component={Homework3}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
