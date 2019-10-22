import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import Home from "./pages/Home";
import Week1 from "./pages/Week1";
import Week2 from "./pages/Week2";
import Week3 from "./pages/Week3";
import "./App.css";

function App() {
  const routes = [
    { name: "home", path: "/", exact: true, component: Home },
    { name: "week1", path: "/week1", component: Week1 },
    { name: "week2", path: "/week2", component: Week2 },
    { name: "week3", path: "/week3", component: Week3 }
  ];

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          {routes.map(route => {
            return (
              <Route
                key={route.name}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
