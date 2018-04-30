import React, { Component } from 'react';
import Header from './components/headers';
import Logo from './components/logo';
import TodoMain from './components/todoMain';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Header />
        <TodoMain/>
      </div>
    );
  }
}

export default App;
