import React from 'react';
import './App.css';
import Friend from './components/Friend'
import DogGallery from './components/DogGallery'
import RandomJoke from './components/RandomJoke'

function App() {

  return (

    <div className="App">
      <h1>Exercise-1</h1>
      <Friend />
      <hr/>
      <h1>Exercise-2</h1>
      <DogGallery />
      <hr/>
      <h1>Exercise-3</h1>
      <RandomJoke />
    </div>
  );
}

export default App;
