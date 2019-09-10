import React from 'react';
import './App.css';
import { PreviousHomeworks, todoArr } from './previousHomeworks';
import HomeworkWeek3 from './homeworkWeek3';

function App() {
  return (
    <div className="container">
      <HomeworkWeek3 />
      <PreviousHomeworks todoArr={todoArr} />
    </div>
  );
}

export default App;
