import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './Components/todoComponents.js'

class App extends Component {
  render() {
    return (
      <div class="content">
        <h1>Todo List</h1>
        <Description descrip ='Get out of bed' deadline = 'Wed Sep 13 2017'/>
        <Description descrip ='Brush teeth' deadline = 'Thu Sep 14 2017'/>
        <Description descrip ='Eat breakfast' deadline = 'Fri Sep 15 2017'/>
      </div>
    );
  }
}

export default App;
