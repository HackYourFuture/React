import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import HomeworkWeek1 from './components/homeworkweek1/homeworkweek1';
import HomeworkWeek2 from './components/homeworkweek2/homeworkweek2';
import HomeworkWeek3 from './components/homeworkweek3/homeworkweek3';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>HomeworkWeek1</h2>
        <HomeworkWeek1 />
        <h2>HomeworkWeek2</h2>
        <HomeworkWeek2 />
        <h2>HomeworkWeek3</h2>
        <HomeworkWeek3 />
      </div>
    </div>
  );
}

export default App;
