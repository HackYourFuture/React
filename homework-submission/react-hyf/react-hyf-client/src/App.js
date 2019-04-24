import React, { Component } from 'react';
import PreviousHomework from './components/PreviousHomework/PreviousHomework';
import HomeworkWeek3 from './components/HomeworkWeek3/HomeworkWeek3';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={'App'}>
        <PreviousHomework />
        <HomeworkWeek3 />
      </div>
    );
  }
}

export default App;
