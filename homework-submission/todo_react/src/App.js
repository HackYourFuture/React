import React, { Component } from 'react';

import './App.css';
import { Task } from './task'
import Info from './test';

class App extends Component {
  render() {
    return (
      <div className="App">


        < Task description='wash plates' deadline='21-01-2019' />
        < Task description='Swimming pull' deadline='31-11-2018' />
        <Info />
        {console.log(new Date())}
      </div>
    );
  }
}

export default App;
