import React, { Component } from 'react';
import './App.css';
import Description from './ToDo/Description';
import DeadLines from './ToDo/DeadLine';
import DoneCheckBox from './ToDo/DoneCheckBox';
import todos from './todoList';
/** WEEK 3 */
import NewToDoComponent from './ToDo/NewToDoComponent';
import ControlsComponent from './ToDo/ControlsComponent';

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
    this.setState((state) => ({
      todos: [...state.todos, newTodo]

    }));

  }


  handleRemoveToDo = (indexToDo) => {
    console.log('Ik ben hier', indexToDo);
    const tempTodos = [...this.state.todos];
    tempTodos.splice(tempTodos.findIndex(todo => todo.id === indexToDo), 1);

    this.setState((state) => ({
      todos: tempTodos
    }))

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
                deadline={<DeadLines deadline={new Date(eleTodo.deadline)}></DeadLines>}>
              </Description>
              <ControlsComponent index={eleTodo.id} handleRemove={this.handleRemoveToDo}></ControlsComponent>
            </li>

          ))}
        </ul>
        <NewToDoComponent passPropToChild={this.handleSubmit}></NewToDoComponent>
      </div>
    );
  }
}

export default App;