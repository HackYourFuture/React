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
          <Todos description='Get out of bed' deadline='Wed Sep 13 2017' />
          <Todos description='Brush teeth' deadline='Thu Sep 14 2017' />
          <Todos description='Eat breakfast' deadline='Fri Sep 15 2017' />
        </ul>
        <Footer />
      </div>
    );
  }
}

export default App;
