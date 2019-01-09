import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './Description';

const todos = [
  {
    todo: 'Get out of bed',
    deadline: new Date(2017, 8, 13, 0, 0, 0, 0)//'Wed Sep 13 2017'
  },
  {
    todo: 'Brush teeth',
    deadline: new Date(2017, 8, 14)//'Thu Sep 14 2017'
  },
  {
    todo: 'Eat breakfast',
    deadline: new Date(2017, 8, 15)//'Fri Sep 15 2017'
  }
]

class App extends Component {
  render() {
    const result = todos.map((eleTodo) => (<Description todo={eleTodo.todo} deadline={eleTodo.deadline}></Description>));


    return (
      <div className='App-header'>
        <ul>
          {result}
        </ul>
      </div >
    );
  }
}

export default App;
