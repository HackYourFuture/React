import React from 'react';
import PreviousHomeworks from './Components/PreviousHomeworks/PreviousHomeworks';
import StaticList from './Components/Week1/StaticList';
import HomeworkWeek3 from './Components/HomeworkWeek3/HomeworkWeek3';
import './App.css';
import AppHeader from './AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <StaticList />
      <PreviousHomeworks />
      <HomeworkWeek3 />
    </div>
  );
}

export default App;
