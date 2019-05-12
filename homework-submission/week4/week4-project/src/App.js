import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import './App.css';

// Components
import Home from './component/home';
import Week1 from './component/week1';
import Week2 from './component/week2';
import Week3 from './component/week3';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/week1">Week 1</Link>
          </li>
          <li>
            <Link to="/week2">Week 2</Link>
          </li>
          <li>
            <Link to="/week3">Week 3</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/week1" component={Week1} />} />
          <Route path="/week2" component={Week2} />
          <Route path="/week3" component={Week3} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
