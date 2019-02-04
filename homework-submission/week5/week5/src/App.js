import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Post from './components/Post';


class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <React.Fragment>
          <Post />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
