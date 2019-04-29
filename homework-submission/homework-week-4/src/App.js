import React from 'react';
import './App.css';
import Root from './components/root-component/root';
import Week1 from './components/week1-component/static-todo-list';
import Week2 from './components/week2-component/dynamic-todo-list';
import Week3 from './components/week3-component/people';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <div>
          <Route exact path="/" component={Root} />
          <ul>
            <li>
              <NavLink exact to="/">
                Root
              </NavLink>
            </li>
            <li>
              <NavLink to="/week1">Week 1</NavLink>
            </li>
            <li>
              <NavLink to="/week2">Week 2</NavLink>
            </li>
            <li>
              <NavLink to="/week3">Week 3</NavLink>
            </li>
          </ul>
          <Route path="/week1" component={Week1} />
          <Route path="/week2" component={Week2} />
          <Route path="/week3" component={Week3} />
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
