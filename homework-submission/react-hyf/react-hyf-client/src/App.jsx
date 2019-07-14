import React from 'react';
import logo from './logo.svg';
import './App.css';
import PreviousHomeworks from './PreviousHomeworks';
import HomeworkWeek3 from './React_HW3/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>{' '}
      <PreviousHomeworks /> {<HomeworkWeek3 />}{' '}
    </div>
  );
}

export default App;
