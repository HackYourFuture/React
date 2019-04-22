import React, { Component } from 'react';
import StaticToDoList from './components/StaticToDoList';
import DynamicToDoList from './components/DynamicToDoList';
import ReactApiCall from './components/ReactApiCall';
import Home from './components/Home';
// import logo from './logo.svg';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Week1">Week1</NavLink>
            </li>
            <li>
              <NavLink to="/Week2">Week2</NavLink>
            </li>
            <li>
              <NavLink to="/Week3">Week3</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/week1" component={StaticToDoList} />
            <Route path="/week2" component={DynamicToDoList} />
            <Route path="/week3" component={ReactApiCall} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
