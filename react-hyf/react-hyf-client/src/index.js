import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import './App.css';
// import App from './App';
import StaticList from './Components/Week1/StaticList';
import PreviousHomeworks from './Components/PreviousHomeworks/PreviousHomeworks';
import HomeworkWeek3 from './Components/HomeworkWeek3/HomeworkWeek3';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" component={StaticList}></Route>
      <Route path="/week2" component={PreviousHomeworks}></Route>
      <Route path="/week3" component={HomeworkWeek3}></Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
