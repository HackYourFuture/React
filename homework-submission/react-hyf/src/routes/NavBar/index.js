import React, { Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from '../../components/HomePage';
import Assignments from '../Assignments';
import RenderTodos from '../../components/Week2/RenderTodos';
import UserList from '../../components/Week3/UserList';
import StaticTodoList from '../../components/Week1/StaticList';

const NavBar = () => {
  return (
    <Fragment>
      <ul className="nav justify-content-center bg-dark lighten-4 py-4">
        <li className="nav-item col-md-3">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item col-md-3">
          <Link to="/assignments">Assignments</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/assignments" component={Assignments} />
        <Route path="/assignments/week-1" component={StaticTodoList} />
        <Route path="/assignments/week-2" component={RenderTodos} />
        <Route path="/assignments/week-3" component={UserList} />
      </Switch>
    </Fragment>
  );
};

export default NavBar;
