import React from 'react';
import './App.css';
import Weather from './components/weather';

function App() {
  return (
    <div className="App">
      <h1 className="weather_title">Weather</h1>
      <Weather />
    </div>
  );
}

export default App;
