import React, { Component } from 'react';
import './App.css';
import Data from './Components/Data';
import Header from './Components/Header';
import Calender from './Components/Calender'

class App extends Component {
  render() {
    return <div className='App'>
      <div>
        
        <Header />
        <Data />
        <Calender />
      </div>

    </div>
  }
}

export default App;
