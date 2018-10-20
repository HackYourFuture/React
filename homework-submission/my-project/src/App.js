import React, { Component } from 'react';
import './App.css';
import Header from './page-header.js';
import Todos from './todo.js';
import Footer from './page-footer.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ol>
          <Todos />
        </ol>
        <Footer />
      </div>
    );
  }
}

export default App;
