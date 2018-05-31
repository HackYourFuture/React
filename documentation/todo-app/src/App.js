import React, { Component } from 'react';
import Todo from './Components/Todo';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Todo />
      </React.Fragment>
    )
  }

}