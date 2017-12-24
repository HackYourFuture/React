import React from 'react';
import TodoItem from './TodoItem';
import todoItems from './todo.json';

export default class TodoList extends React.Component {

  state = {
    todos: todoItems
  }
    
  onDelete = (todoID) => {
    var updatedTodos = this.state.todos.filter((val,index) =>{
    return val.id !== todoID;
    })
    this.setState({
      todos: updatedTodos
    })  
  }
  
  onDone = (todoID) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoID) {
          todo.done = !todo.done
        }
        return todo
      })
    })
  } 
 
  render() {
    const { todos } = this.state
    if(todos.length === 0){
      return(
        <div className="TodoList">No items...</div>
      )
    }
    else {
      return ( 
        <div className="TodoList">
          <ul>
            {todos.map((todoItem, i) => (
              <React.Fragment key={todoItem.id}>
                <TodoItem onDelete={this.onDelete} onDone={this.onDone} todoItem = {todoItem}/>
              </React.Fragment>
            ))}
          </ul>
        </div>
      )
    } 
  } 
}