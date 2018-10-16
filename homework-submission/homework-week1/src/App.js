import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Todos from './Todos';
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ul>
          <Todos />
        </ul>
        <Footer />
      </div>
    );
  }
}

export default App;
