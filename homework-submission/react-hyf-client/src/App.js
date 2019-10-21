import React from 'react';
import './App.css';
import Users from './Containers/Users';
import TodoList from './TodoList/TodoList';
import NotFound from './services/NotFound';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

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
            </ul>
            <div>
              <Switch>
                <Route exact path="/" component={Users} />
                <Route exact path="/Todo" component={TodoList} />
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
