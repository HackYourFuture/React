import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import StaticList from './Components/Week1/App';
import DynamicList from './Components/Week2/App';
import APICall from './Components/Week3/App';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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

        <div>
          <Switch>
            <Route exact path="/" render={() => <h3> Homeworks </h3>} />
            <Route path="/week1" component={StaticList} />
            <Route exact path="/week2" component={DynamicList} />
            <Route path="/week3" component={APICall} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
