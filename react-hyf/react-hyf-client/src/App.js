import React from 'react';
import './App.css';
import { PreviousHomeworks } from './previousHomeworks';
import HomeworkWeek3 from './homeworkWeek3';

function App() {
  return (
    <div className="container">
      <HomeworkWeek3 />
      <PreviousHomeworks />
    </div>
  );
}

export default App;
