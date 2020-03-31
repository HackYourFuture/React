import React from 'react';
import './App.css';
import HobbyList from './HobbyList';
import Guarantee from './Guarantee';


function App(props) {
  const passedHobbies = props.hobbies; 
  const guaranteeBar = props.guaranteeBar;
  console.log('app guaranteeBar', guaranteeBar);
  
  return (
    <div className="App">
     <HobbyList passedHobbies= {passedHobbies}/>
     {guaranteeBar.map(item => {
          return <Guarantee item={item}/>})}
    </div>
  );
}

export default App;
