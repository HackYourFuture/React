import React from 'react';
import './App.css';
import './components/Homework2';
import Homework3 from './components/Homework3';
import Homework1 from './components/Homework1';
import Homework2 from './components/Homework2';
import Navigation from './components/Navigation';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/homework1" component={Homework1} />
          <Route path="/homework2" component={Homework2} />
          <Route path="/homework3" component={Homework3} />
        </Switch>
      </Router>
    );
  }
}

export default App;
