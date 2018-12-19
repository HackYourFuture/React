import React, { Component } from 'react';
import todoLogo from './todo.png';
import './App.css';
import {inject, observer} from 'mobx-react';
import Todo from "./component/todo.js";
import Add from "./component/add";
import Update from "./component/update";

@inject('myTodoApp')
@observer

class App extends Component {
  constructor(props) {
    super(props);
    props.myTodoApp.listTodos();
  }

  render() {
    const {myTodoApp} = this.props;

    const isEmpty = !myTodoApp.data.todos.length || !myTodoApp.data.todos;

    const todoList = myTodoApp.data.todos.map((item, key)=> 
    (item._id === myTodoApp.idToUpdate) ?
    <Update
    key={key}
    id={item._id}
    text={item.description}
    date={item.deadline}
    updateTodo={myTodoApp.updateTodo}
    />
    :
    <Todo
    changeDone = {myTodoApp.changeDone}
    deleteTodo = {myTodoApp.deleteTodo}
    editButton={myTodoApp.editButton}
    id={item._id}
    key={key}
    text={item.description}
    date={item.deadline}
    done={item.done}
    />)

    const elements = (isEmpty) ? <p>No items...</p> : todoList;
      
    return (
      
      <div className="App">
        <header className="App-header">

          <img src={todoLogo} className="todo-logo" alt="todo" />

          <h1>My Todo List</h1>

          <Add
            addNewTodo = {myTodoApp.addNewTodo}
            wrongInput = {myTodoApp.wrongInput}
          />

          <ul>
            {elements}
          </ul>

        </header>
      </div>
    );
  }
}

export default App;