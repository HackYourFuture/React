import React, { Component } from 'react';
import TodoList from './TodoList';
import todoItems from './todo.json';

export default class TodoApp extends Component {

  state = {
    text: '',
    todos: todoItems
  };


  onAddClick = (event) => {
    event.preventDefault();
    var text = this.state.text;
    

    const ids = this.state.todos.map(todos => todos.id);
    
    const addTodo = {
      "id": ids.length === 0 ? 1 : Math.max(...ids) + 1,
      "description": text,
      "deadline": "2018-01-11",
      "done": false
    }

    var updatedTodos = [addTodo, ...this.state.todos]
    console.log("here is :  ", updatedTodos);

    this.setState({
      text: '',
      todos: updatedTodos
    });

  };

  onAddChange = event => {
    var text = event.target.value;
    this.setState({
      text: text
    });
  };

    
  render() {
    return (
      <div className="TodoApp">
        <h2>TODO LIST</h2>
        <div>
          <div>
            <textarea
            className='TextField'
            value={this.state.commentText}
            onChange={this.onAddChange}
            />
          </div>
          <div>
            <button className="add-button" onClick={this.onAddClick}> Add</button>
          </div>  
        </div>
        <TodoList todos={this.state.todos}/>
      </div>  
    )
  }
} 