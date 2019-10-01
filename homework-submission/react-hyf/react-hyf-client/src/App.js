import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import PreviousHomeworks from './PreviousHomeworks';
import HomeworkWeek3 from './HomeworkWeek3';
import week1 from './Week1';
import HomeworkUpdate from './HomeworkUpdate';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/week1' component={week1}></Route>
          <Route exact path='/week2' component={PreviousHomeworks}></Route>
          <Route exact path='/week3' component={HomeworkWeek3}></Route>
          <Route exact path='/update' component={HomeworkUpdate}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
