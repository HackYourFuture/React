//jshint esnext: true

import React from 'react';

import TodoList from './Components/todoList';
import AddTodoItem from './Components/AddTodoItem';
import './App.css';


export default class App extends React.Component {

  
  state= {
    todos: [],
    isEditing: null
  }


  handleToggleEditing = (id) => {
    this.setState({ isEditing: id || null })
  }

  handleAddTodo = (text, deadline) => {
    
    const newItem = {
        id: this.state.todos.length + 1 || 1,
        text,
        deadline,
        done: false
      }
      const oldTodos = this.state.todos || [];
      
      this.setState({ todos: [...oldTodos, newItem]})
    }

  handleToggleDone = (id) => {
    const newTodos = [...this.state.todos].map(item => {
      if (item.id === id){
        item.done = !item.done; 
      }
      return item;
    });
    this.setState({todos: newTodos});
  }

  handleRemove = (id) => {
    const newTodos = [...this.state.todos].filter(item => item.id !== id);
    this.setState({todos: newTodos});
  }

  handleUpdate = (id, newText, newDeadline) => {
    const newTodos = [...this.state.todos].map(item => {
      if (item.id === id) {
        item.text = newText;
        item.deadline = newDeadline;
      }
      return item;
    });
    this.setState({
      todos: newTodos,
      isEditing: null
    });
  }

  render() {
    return (
      <div>
        <h1 className='pageHeader'>TODO LIST</h1>
        <AddTodoItem 
          handleAddTodo={this.handleAddTodo}
        />
        <TodoList 
          isEditing={this.state.isEditing}
          handleToggleEdit={this.handleToggleEditing}
          todos={this.state.todos} 
          handleToggleDone={this.handleToggleDone} 
          handleRemove={this.handleRemove}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}