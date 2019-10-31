import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Week2 from './Week2/Week2';
import ProfileGenerator from './Week3/ProfileGenerator';
import Container from './Week1/Week1';

const RouterContainer = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <p className="home">
                You are in Home.
                <br /> Please press other menu items.
              </p>
            )}
          />
          <Route exact path="/week1" component={Container} />
          <Route exact path="/week2" component={Week2} />
          <Route exact path="/week3" component={ProfileGenerator} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default RouterContainer;
