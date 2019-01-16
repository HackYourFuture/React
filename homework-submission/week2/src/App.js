import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './ToDo/Description';
import DeadLines from './ToDo/DeadLine';
import DoneCheckBox from './ToDo/DoneCheckBox';

const todos = [
  {
    "id": 1,
    "description": "Get out of bed",
    "deadline": "2017-09-11",
    "done": true
  },
  {
    "id": 2,
    "description": "Brush teeth",
    "deadline": "2017-09-10",
    "done": false
  },
  {
    "id": 3,
    "description": "Eat breakfast",
    "deadline": "2017-09-09",
    "done": false
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <h2>ToDo List</h2>
        <ul>
          {todos.map((eleTodo) => (
            <div>
              <DoneCheckBox isChecked={eleTodo.done}></DoneCheckBox>
              <Description
                todo={eleTodo.description}
                key={eleTodo.id}
                deadline={<DeadLines deadline={new Date(eleTodo.deadline)}></DeadLines>}
              >
              </Description>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
