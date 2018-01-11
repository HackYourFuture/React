import React, { Component } from 'react';
import TodoList from './TodoList';
import todoItems from './todo.json';

export default class TodoApp extends Component {

  state = {
    commentText: '',
    todos: todoItems
  };


  onAddClick = (event) => {
    event.preventDefault();
    var text = this.state.commentText;
    console.log("here is :  ", text);

    const ids = this.state.todos.map(todos => todos.id);
    
    const addTodo = {
      "id": ids.length === 0 ? 1 : Math.max(...ids) + 1,
      "description": text,
      "deadline": "2018-01-11",
      "done": false
    }

    var updatedTodos = [addTodo, ...this.state.todos]

    this.setState({
      commentText: '',
      todos: updatedTodos
    });
  };

  onAddChange = event => {
    var text = event.target.value;
    this.setState({
      commentText: text
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
        <TodoList/>
      </div>  
    )
  }
} 