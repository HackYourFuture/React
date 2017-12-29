import React, { Component } from 'react';
import Task from './Task' 
import todoItems from './todo.json';


export default class App extends Component {
    state = {
    todos: todoItems
  }

toggleStatus = (todoID) =>{
    this.setState({
            todos: this.state.todos.map(todo =>{
                if (todo.id === todoID){
                    todo.done = !todo.done
                }
                return todo
                
            })
        })
    }

  render() {
      const{todos} = this.state
    return (
      <div>
        <h1>Todo App</h1>
		<ul className='tasks'>
         {todos.map((todoItem, i) =>(
        <Task key = {todoItem.id} toggleStatus =
        {this.toggleStatus} todoItem = {todoItem}/>
    
    ))}
		</ul>
      </div>
    );
  }
      
}