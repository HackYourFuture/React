import React, { Component } from 'react';
import './App.css';
import Description from './ToDo/Description';
import DeadLines from './ToDo/DeadLine';
import DoneCheckBox from './ToDo/DoneCheckBox';
import todos from './todoList';
import NewToDoComponent from './ToDo/NewToDoComponent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  handleCheck = (x) => {
    let todos = this.state.todos;
    todos[x].done = !todos[x].done;
    this.setState({
      state: todos
    })
  }


  handleSubmit = (newTodo) => {
    //const newToDoesList = JSON.parse(JSON.stringify(todos));
    //const newToDoesList = [...this.state.todos];
    //newToDoesList.push(newTodo);
    //this.setState({ this.todos: newToDoesList });
    this.setState((state) => ({
      todos: [...state.todos, newTodo]

    }));
    console.log(JSON.stringify(this.state));
    //console.log('********');
    //console.log(newToDoesList);
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
        <NewToDoComponent passPropToChild={this.handleSubmit}></NewToDoComponent>
      </div>
    );
  }
}

export default App;