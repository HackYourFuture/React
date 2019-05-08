import React from 'react';
import { Route, Link, Switch, withRouter } from "react-router-dom";

import StaticList from './Components/Week1/App';
import DynamicList from './Components/Week2/App';
import APICall from './Components/Week3/App';
import './App.css';



class App extends React.Component {
  render() {
    return (
      <div className="App">

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/week1">Week 1</Link></li>
          <li><Link to="/week2">Week 2</Link></li>
          <li><Link to="/week3">Week 3</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" render={() => <h3> React Homeworks </h3>} />
          <Route path="/week1" component={StaticList} />
          <Route path="/week2" component={DynamicList} />
          <Route path="/week3" component={APICall} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);