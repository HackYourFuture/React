import React from 'react';
import './App.css';
import HobbyList from './HobbyList';


function App(props) {
  console.log('app.js props', props);
  const passedHobbies = props.hobbies; 
  return (
    <div className="App">
     <HobbyList passedHobbies= {passedHobbies}/>
    </div>
  );
}

export default App;
