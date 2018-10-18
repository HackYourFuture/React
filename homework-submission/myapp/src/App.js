import React, { Component } from 'react';
import './App.css';
import Data from './Data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Todo<span className='designLogo'>App</span>
          </p>
          
        </header>
          <ul>
            <Data description='Get out of bed' deadline='Wed Sep 13 2018' />
            <Data description='Get out of bed' deadline='Thu Sep 14 2018'/>
            <Data description='Get out of bed' deadline='Fri Sep 15 2018' />
            <hr />
          </ul>     
      </div>
    );
  }
}

export default App;
