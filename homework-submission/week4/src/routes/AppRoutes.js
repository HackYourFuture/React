import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Week1 from '../pages/Week1';
import Week2 from '../pages/Week2';
import Week3 from '../pages/Week3';
import Public from '../pages/Public';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from '../context/AuthContext';

const AppRoutes = () => {
  const { user } = useContext(AuthContext);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/public" component={Public} />
      <PrivateRoute
        path="/week1"
        component={Week1}
        loggedIn={user.authenticated}
      />
      <PrivateRoute
        path="/week2"
        component={Week2}
        loggedIn={user.authenticated}
      />
      <PrivateRoute
        path="/week3"
        component={Week3}
        loggedIn={user.authenticated}
      />
    </Switch>
  );
};

export default AppRoutes;
