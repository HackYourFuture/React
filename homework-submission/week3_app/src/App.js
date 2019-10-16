import React from 'react';
import './App.css';
import Steps from './components/FetchOrigin';
import DisplayUser from './components/FetchForeign';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Week 3 Homework</h1>
      </header>
      <Steps />
      <DisplayUser />
    </div>
  );
}

export default App;
