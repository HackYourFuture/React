import './App.css';
import React from 'react';

import RandomJoke from './randomJoke';
import Friend from './newFriend';
import DogGallery from './dogPhoto';


function App() {
  return (
    <div className="App">
     <RandomJoke/>
     <Friend/> 
     <DogGallery/> 
     </div>
  );
}

export default App;
