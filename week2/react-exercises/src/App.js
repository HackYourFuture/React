import React from 'react';
import Friend from './components/Friend';
import DogGallery from './components/DogGallery';
import './App.css';
import Joke from './components/Joke';

function App() {
  return (
    <div className="App">
      <div className="firstExercise">
        <Friend />
      </div>
      <hr />
      <div>
        <DogGallery />
      </div>
      <hr />
      <div>
        <Joke />
      </div>
    </div>
  );
}

export default App;
