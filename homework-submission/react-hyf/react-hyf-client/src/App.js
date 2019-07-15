import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomeworkWeek1 from './components/homeworkweek1/homeworkweek1';
import HomeworkWeek2 from './components/homeworkweek2/homeworkweek2';
import HomeworkWeek3 from './components/homeworkweek3/homeworkweek3';
import Home from './components/home/home';
import NavBar from './components/navbar/navbar';
import NotFound from './components/notfound/notfound';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/week1" component={HomeworkWeek1} />
        <Route path="/week2" component={HomeworkWeek2} />
        <Route path="/week3" component={HomeworkWeek3} />
        <Route path="/notfound" component={NotFound} />
        <Route path="/" exact component={Home} />
        <Redirect to="/notfound" />
      </Switch>
    </div>
  );
}

export default App;
