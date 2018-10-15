import React, { Component } from 'react';
import './App.css';
import Category from './Category';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Todo<span className='designLogo'>App</span>
          </p>
          
        </header>

        <Category />
        <hr />
        
      </div>
    );
  }
}

export default App;
