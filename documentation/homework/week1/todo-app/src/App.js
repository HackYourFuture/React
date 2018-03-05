import React, { Component } from 'react';
import logo from './logo.svg';
import Item from './components/todo-item'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>This is Todo-Item App</h2>
        </header> {/*the Date should be -> M/D/Y */}
        <Item description='Get out of bed' deadLineDate={'11/13/2017'} isDone={true} />
        <Item description='Brush teeth' deadLineDate={'11/14/2017'} />
        <Item description='Eate breakfast' deadLineDate={'11/15/2017'} />
      </div>
    );
  }
}

export default App;
