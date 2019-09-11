import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Week1 from './Week1/Week1';
import Week2 from './Week2/Week2';
import Week3 from './Week3/Week3';

import './App.css';

const Home = () => {
  return '';
};
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Choose a homework</h1>
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/week1" className="link">
                Week1
              </Link>
            </li>
            <li>
              <Link to="/week2" className="link">
                Week2
              </Link>
            </li>
            <li>
              <Link to="/week3" className="link">
                Week3
              </Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/week1" component={Week1} />
          <Route path="/week2" component={Week2} />
          <Route path="/week3" component={Week3} />
        </Switch>
      </Router>
    );
  }
}

export default App;
