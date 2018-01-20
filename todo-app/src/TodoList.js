import React from 'react';
import TodoItem from './TodoItem';
import {observer} from 'mobx-react';
import {todoStore} from './stores';

@observer
export default class TodoList extends React.Component {

  state = {
    text: '',
  }; 

  onAddClick = (text) => {
    text = this.state.text
    todoStore.addTodo(text)
  };

  onAddChange = event => {
    var text = event.target.value;
    this.setState({
      text: text
    });
  };

  onDelete = (todoID) => {
    todoStore.onDelete(todoID); 
  } 
  
  onDone = (todoID) => {
   todoStore.onDone(todoID);
  };



  render() {
    if(todoStore.todos.length === 0){
      return(
        <div className="TodoList">No items...</div>
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
            <button className="add-button" onClick={this.onAddClick}> Add</button>
          </div>  
        </div>
          <ul>
            {todoStore.todos.map((todoItem, i) => (
              <React.Fragment key={todoItem.id}>
                <TodoItem handleAdd={ this.handleAdd }  onDelete={this.onDelete} onDone={this.onDone} todoItem = {todoItem} />
              </React.Fragment>
            ))}
          </ul>
        </div>
      )
    } 
  } 
} 