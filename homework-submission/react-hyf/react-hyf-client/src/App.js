import React, { useState } from 'react';
import Week01 from './Components/Homework-w01/index';
import Week02 from './Components/Homework-w02/index';
import Week03 from './Components/Homework-w03/index';
import HyfButton from './Components/Homework-w02/components/HyfButton/button';
import './App.css';

function App() {
  const [week, setWeek] = useState(3);
  const changeHomework = () => {
    let newWeek = week + 1;
    if (week === 3) {
      newWeek = 1;
    }
    setWeek(newWeek);
  };
  return (
    <div className="App">
      <header className="App-header">
        {week === 1 ? <Week01 /> : week === 2 ? <Week02 /> : <Week03 />}
        <HyfButton
          name={`Click here to switch to Homework Week0${week === 3 ? 1 : week + 1} `}
          toggle={changeHomework}
        />
      </header>
    </div>
  );
}

export default App;
