import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import TODOList from './TODOList';

class App extends Component {
  render() {
    return (
      <div className="root">
        <div className="App">
          <Header />
          <section>
            <TODOList />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
