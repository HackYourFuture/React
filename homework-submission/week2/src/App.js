import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './ToDo/Description';
import DeadLines from './ToDo/DeadLine';
import DoneCheckBox from './ToDo/DoneCheckBox';

let todos;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
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
    };
  }

  handleCheck = (x) => {
    //console.log('Ik ben hier...');
    let todos = this.state.todos;
    todos[x].done = !todos[x].done;
    this.setState({
      state: todos
    })
  }

  render() {
    const todos = this.state.todos;
    return (
      <div>
        <h2>ToDo List</h2>
        <ul>
          {todos.map((eleTodo, key) => (
            <li key={eleTodo.id}>
              <DoneCheckBox index={key} done={eleTodo.done} handleCheck={this.handleCheck}></DoneCheckBox>
              <Description
                todo={eleTodo.description}
                deadline={<DeadLines deadline={new Date(eleTodo.deadline)}></DeadLines>}
              >
              </Description>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;