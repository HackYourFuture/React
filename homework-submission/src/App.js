import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import Home from './routes/Home';
import Week1 from './routes/Week1';
import Week2 from './routes/Week2';
import Week3 from './routes/Week3';

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/week1" exact component={Week1} />
      <Route path="/week2" exact component={Week2} />
      <Route path="/week3" exact component={Week3} />
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);

export default App;
