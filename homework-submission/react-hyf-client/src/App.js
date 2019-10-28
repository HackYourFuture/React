import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import UserApp from './user_app/components/UserApp';
import TodoApp from './todo_app/TodoApp';
import Home from './Home';
import HomeNavbar from './Home-Navbar';

const App = () => {
  return (
    <div className="App">
      <HomeNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={UserApp} />
        <Route exact path="/todos" component={TodoApp} />
      </Switch>
    </div>
  );
};

export default App;
