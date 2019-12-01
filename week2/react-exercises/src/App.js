import React from 'react';
import './App.css';
import Friend from './components/friend';
import DogGallery from './components/DogGallery';
import Joke from './components/Joke';

function App() {
  return (
    <div>
      <Friend />
      <DogGallery />
      <Joke />
    </div>
  );
}

export default App;
