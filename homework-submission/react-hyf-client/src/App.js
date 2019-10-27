import React from 'react';
import './App.css';
import Users from './components/users/Users';
import TodoList from './components/TodoList/TodoList';
import NotFound from './components/Error/ErrorModal';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import TodoStatic from './components/TodoList/TodoStatic';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul className="nav_link">
              <li>
                <Link to="/">Users</Link>
              </li>
              <li>
                <Link to="/Todo">Todo</Link>
              </li>
              <li>
                <Link to="/TodoStatic">TodoStatic</Link>
              </li>
            </ul>
            <div>
              <Switch>
                <Route exact path="/" component={Users} />
                <Route exact path="/Todo" component={TodoList} />
                <Route exact path="/TodoStatic" component={TodoStatic} />
                <Route exact path="/not-Found" component={NotFound} />
                <Redirect to="/not-Found" />
              </Switch>
            </div>
          </nav>
        </header>
      </div>
    </Router>
  );
}

export default App;
