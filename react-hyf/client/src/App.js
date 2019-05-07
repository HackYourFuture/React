import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// COMPONENTS
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import StaticList from './components/week1/StaticList';
import DynamicTodoApp from './components/old_homeworks/DynamicTodoApp';
import HomeworkWeek3 from './components/week3_homework/HomeworkWeek3';
import WrongUrl from './components/wrongUrl/WrongUrl';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/week3" component={HomeworkWeek3} />
            <Route path="/week1" component={StaticList} />
            <Route path="/week2" component={DynamicTodoApp} />
            <Route component={WrongUrl} />
            <HomeworkWeek3 />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
