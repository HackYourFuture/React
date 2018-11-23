import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './Components/todoComponents.js'
import TodoForm from './Components/addTodoForm'
import { inject, observer } from 'mobx-react';

@inject('TodoApp')
@observer
class App extends Component {
  
  constructor(props){
    super(props);
    this.props.TodoApp.fillTodos();
  }

  changeState = (id) => {
    this.props.TodoApp.changeDoneProp(id);
  }
  
  removeTodo = (id) => {
    this.props.TodoApp.deleteTodo(id);
  };

  addTodo = (descrip, deadline) => {
    let newTodo = {description: descrip, deadline:deadline, done: false};
    this.props.TodoApp.addTodo(newTodo);
  }

  editTodo = (id, descrip, deadline) => {
    this.props.TodoApp.updateTodo(id, descrip, deadline);
  }

  render() {
    const {TodoApp} = this.props;
    const todoList = TodoApp.todos.data;
    console.log(TodoApp.todos);
    
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addTodo = {this.addTodo}/>
        {todoList.length === 0 ? <h1>Nothing to do...</h1>:todoList.map((e, index) => <Description 
        description = {e.description} 
        deadline = {e.deadline} 
        key = {index} 
        done = {e.done} 
        id = {index} 
        changeState = {this.changeState}
        removeTodo = {this.removeTodo}
        editTodo = {this.editTodo}
        />
        )}
      </div>
    );
  }
}

export default App;
