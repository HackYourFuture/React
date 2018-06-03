import React, { Component } from 'react';
import PostBody from './components/postBody';
import CommentsBody from './components/commentsBody';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const appTitle = <h1 className="App-title">Welcome To Fadi Blog</h1>;
    const appLogo = <img src={logo} className="App-logo" alt="logo" />

    return (
      <div className="App">
        <header className="App-header">
          {appLogo}
          {appTitle}
        </header>
        <PostBody />
        <CommentsBody />
      </div>
    );
  }
}

export default App;