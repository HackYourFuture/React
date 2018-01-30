import React from 'react';
import TodoItem from './TodoItem';
import {observer, inject} from 'mobx-react';
import {todoStore} from './stores';

@inject("todoStore")
@observer
export default class TodoList extends React.Component {

  state = {
    text: ''
  }; 


  addTodo = (text) => {
    text = this.state.text
    todoStore.addTodo(text)
  };

  onAddChange = event => {
    var text = event.target.value;
    this.setState({
      text: text
    });
  };

  deleteTodo = (todoID) => {
    todoStore.deleteTodo(todoID); 
  } 
  
  changeStatus = (todoID) => {
   todoStore.todoStatus(todoID);
  };


  render() {
    if(todoStore.todos.length === 0){
      return(
        <div className="TodoList">Loading...</div>
      )
    }
    else {
      return (
        <div className="TodoList">
        <div>
          <div>
            <textarea
            className='TextField'
            value={this.state.text}
            onChange={this.onAddChange}
            />
          </div>
          <div>
            <button className="add-button" onClick={this.addTodo}> Add</button>
          </div>  
        </div>
          <ul>
            {todoStore.todos.map((todoItem, i) => (
              <React.Fragment key={todoItem._id}>
                <TodoItem  deleteTodo={this.deleteTodo} changeStatus={this.changeStatus} todoItem = {todoItem} />
              </React.Fragment>
            ))}
          </ul>
        </div>
      )
    } 
  } 
} 