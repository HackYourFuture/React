import React from 'react';
import Todo from './Todo';
import initialTodoData from './data/todo-data.json';



export default class TodoList extends React.Component {

  state = {
    todos: initialTodoData,
  }

  //done checkbox event handler
  handleDoneToggle = (todoId) => {

    const newState = this.state.todos.map(
      todo => {
        if (todo.id === todoId) {
          return {...todo, done: !todo.done};
        } else {
          return todo
        }
      }
    );

    this.setState({
      todos: newState
    });
  };


  // this is new feature of react in version 16
  renderList() {

    const { todos } = this.state

    return (
      <ul className="TodoList-list">
        {todos.map((todo, index) => (
          <React.Fragment key={todo.id}>
            {index > 0 && <li className="TodoList-separator"/>}
            {/* passing event handler into the comment */}
            <Todo handleDoneToggle={this.handleDoneToggle} todo={todo}/> 
          </React.Fragment>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div className="TodoList">
        {this.renderList()}
      </div>
    );
  }
  
}



