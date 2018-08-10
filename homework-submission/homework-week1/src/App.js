import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './description';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Todo List</h1>
        </header>
        <p className='App-intro'></p> 
        <Description description='Get out of bed ,' deadlineDate='Wed Sep 13 2017' />
        <Description description='Brush teeth ,' deadlineDate='Thu Sep 14 2017' />
        <Description description='Eat breakfast ,' deadlineDate='Fri Sep 15 2017' />
      </div>
    );
  }
}
export default App;
