import React, { Component } from 'react';
import './App.css';
import Description from './ToDo/Description';
import DeadLines from './ToDo/DeadLine';
import DoneCheckBox from './ToDo/DoneCheckBox';
import todos from './todoList';
/** WEEK 3 */
import NewToDoComponent from './ToDo/NewToDoComponent';
import ControlsComponent from './ToDo/ControlsComponent';

let oldDescription = '';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos,
      editMode: -1
    };

  }

  handleCheck = (x) => {
    let tempTodos = [...this.state.todos];
    tempTodos[x].done = !tempTodos[x].done;
    this.setState({
      todos: tempTodos
    })
  }


  handleSubmit = (newTodo) => {
    this.setState((state) => ({
      todos: [...state.todos, newTodo]

    }));

  }


  handleRemoveToDo = (indexToDo) => {
    const tempTodos = [...this.state.todos];
    tempTodos.splice(indexToDo, 1);

    this.setState((state) => ({
      todos: tempTodos
    }))

  }

  handleEdit = (indexToDo) => {
    this.setState({ editMode: indexToDo });
  }

  handleUpdate = (updateToDo, indexToDo) => {
    const tempToDos = [...this.state.todos];
    tempToDos[indexToDo].description = updateToDo;
    oldDescription = '';

    this.setState({
      todos: tempToDos,
      editMode: -1
    });
  }
  handleCancel = (description, index) => {
    const tempToDos = [...this.state.todos];
    tempToDos[index].description = oldDescription;
    oldDescription = '';

    this.setState(
      {
        todos: tempToDos,
        editMode: -1
      }
    )
    this.setState({ editMode: -1 });
  }
  onValueChange = (e, index) => {
    const tempToDos = [...this.state.todos];
    if (oldDescription === '') { oldDescription = tempToDos[index].description; }
    tempToDos[index].description = e.target.value;


    this.setState(
      {
        todos: tempToDos
      }
    )
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
                mode={this.state.editMode} todo={eleTodo.description} index={key} handleUpdate={this.handleUpdate}
                onValueChange={this.onValueChange} handleCancel={this.handleCancel}
                deadline={<DeadLines deadline={new Date(eleTodo.deadline)}></DeadLines>}>
              </Description>
              <ControlsComponent mode={this.state.editMode} index={key} handleRemove={this.handleRemoveToDo} handleEdit={this.handleEdit}></ControlsComponent>
            </li>

          ))}
        </ul>
        <NewToDoComponent passPropToChild={this.handleSubmit}></NewToDoComponent>
      </div>
    );
  }
}

export default App;