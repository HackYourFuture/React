import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Homework1 from './Components/Homework1/Homework1';
import Homework2 from './Components/Homework2/Homework2';
import Homework3 from './Components/Homework3/Homework3';
import NotFound from './Components/NotFound/NotFound';

/**
 * This class component is the container of the application
 * @return Here is the return of the application where the routes of the website are specified
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="app-header">React Module</h1>
        <Navbar />
        <Switch>
          <Route path="/week1" component={Homework1} />
          <Route path="/week2" component={Homework2} />
          <Route path="/week3" component={Homework3} />
          <Route path="/" exact component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
