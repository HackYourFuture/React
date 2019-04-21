import React, { Component } from 'react';
import './App.css';

// COMPONENTS
// import PreviousHomeworks from './components/old_homeworks/PreviousHomeworks';
import HomeworkWeek3 from './components/week3_homework/HomeworkWeek3';

class App extends Component {
  render() {
    return (
      <div>
        {/* <PreviousHomeworks /> */}
        <HomeworkWeek3 />
      </div>
    );
  }
}

export default App;
