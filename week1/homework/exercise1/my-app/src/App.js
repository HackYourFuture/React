import React from 'react';
import './App.css';
import HobbyList from './components/HobbyList';

function App() {
  return (
    <div>
      <HobbyList name="Ahmet's Hobbies" hobby="Swimming" />
      <HobbyList name="Faruk's Hobbies" hobby="Diving" />
      <HobbyList name="Mehmet's Hobbies" hobby="Drifting" />
    </div>
  );
}

export default App;
