import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import About from "./About";
import NavBar from "./NavBar";

const RouterContainer = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <p>Home</p>} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default RouterContainer;
