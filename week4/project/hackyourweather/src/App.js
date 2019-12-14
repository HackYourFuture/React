import React from 'react';
import './App.css';
import Home from './pages/Home'
import Recharts from './pages/Recharts'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:id">
            <Recharts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
