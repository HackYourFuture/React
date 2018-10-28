import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="appContainer">
          <Header />
          <TodoList firstName='Sam' />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;


