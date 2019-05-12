import React, { Component } from 'react';
import StaticTodoList from './components/StaticTodoList/StaticTodoList';
import DynamicToDoList from './components/DynamicToDoList/DynamicToDoList';
import ApiCall from './components/ApiCall/App';
import Home from './components/Home';

import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul className="header">
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
          <div className="weeks">
            <Route exact path="/" component={Home} />
            <Route path="/week1" component={StaticTodoList} />
            <Route path="/week2" component={DynamicToDoList} />
            <Route path="/week3" component={ApiCall} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
