import React, { Component } from 'react';
import HomeworkWeek3 from './components/HomeworkWeek3';
import PreviousHomeworks from './components/PreviousHomeworks';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <PreviousHomeworks />
        <HomeworkWeek3 />
      </div>
    );
  }
}

export default App;
