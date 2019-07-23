import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about';
import Classes from './components/classes';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/classes' component={Classes} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default App;
