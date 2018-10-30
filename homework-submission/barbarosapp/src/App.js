import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import ItemList from './components/itemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ItemList/>
      </div>
    );
  }
}

export default App;
