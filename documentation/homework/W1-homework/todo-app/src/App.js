import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Photo from './components/Photo';
import TodoItems from './components/TodoItems';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Photo />    
        <TodoItems/>
      </div>
    );
  }
}

export default App;
