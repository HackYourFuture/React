import React, { Component } from 'react';
import './App.css';
import Data from './Data.json';
import Header from './Header';
import Todo from './Todo';

class App extends Component {
  render() {
    const Content = Data.map((Data, Key) => (
      <Todo text={Data.text} deadline={Data.deadline} key={Key} />
    ));
    return (
      <div className="app">
        <Header />
        <ul>{Content}</ul>
      </div>
    );
  }
}

export default App;
