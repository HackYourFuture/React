import './App.css';
import React from 'react';

//import Friend from './newFriend';
import RandomJoke from './randomJoke';
import DogGallery from './dogPhoto';


function App() {
  return (
    <div className="App">
    {/* <Friend/> */}
    <RandomJoke/>
    <DogGallery/>
     </div>
  );
}

export default App;
