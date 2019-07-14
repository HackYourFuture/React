import React, { Component } from 'react';
import PreviousHomework from './components/PreviousHomework/main';
import HomeworkWeek3 from './components/Homeworkweek3/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <PreviousHomework />
        <HomeworkWeek3 />
      </div>
    );
  }
}

export default App;
