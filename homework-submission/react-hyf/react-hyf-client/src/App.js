import React from 'react';
import './App.css';
import Week3 from './week3/components/users';
import Week2 from './Previous_Homeworks/week2';
import Week1 from './Previous_Homeworks/week1';

export function App() {
  return (
    <div>
      <Week1 />
      <Week2 />
      <Week3 />
    </div>
  );
}

export default App;
