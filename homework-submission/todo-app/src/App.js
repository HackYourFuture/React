import React from "react";
import Nav from "./component/nav-bar";
import Home from "./component/home";
import Week1 from "./component/week1/";
import Week2 from "./component/week2/";
import Week3 from "./component/week3";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Week1" component={Week1} />
          <Route exact path="/Week2" component={Week2} />
          <Route exact path="/Week3" component={Week3} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
