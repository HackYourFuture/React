import React from 'react';
import './App.css';
import Steps from './components/FetchOrigin';
import DisplayUser from './components/FetchForeign';
import StaticSteps from './components/StaticData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Week 3 Homework</h1>
      </header>
      <main className="App-main">
        <Steps />
        <hr />
        <StaticSteps />
        <hr />
        <DisplayUser />
      </main>
    </div>
  );
}

export default App;
