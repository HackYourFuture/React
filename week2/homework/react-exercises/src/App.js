import React from 'react';
import Friend from './Components/Friend';
import DogGallery from './Components/DogGallery';
import RandomJoke from './Components/RandomJoke';
import './App.css';

function App() {
  return (
    <div className="App">
     <Friend />
     <DogGallery />
     <RandomJoke />
    </div>
  );
}

export default App;
