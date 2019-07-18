import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeworkWeek3 from '../homework_week3/users';
import Homeworkweek1 from '../Previous_Homeworks/week1';
import Homeworkweek2 from '../Previous_Homeworks/week2';
import Homepage from './Home';
import Nav from './Nav';

const HomeworkRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/week1" component={Homeworkweek1} />
        <Route path="/week2" component={Homeworkweek2} />
        <Route path="/week3" component={HomeworkWeek3} />
      </Switch>
    </BrowserRouter>
  );
};

export default HomeworkRouter;
