import React from 'react';

class NewTodo extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.addTodo}>
        <div className="input">
          <label>Task: </label>
          <input type="text" placeholder="please enter a todo" className="todo" />
        </div>
        <div className="input">
          <label>Due date: </label>
          <input type="date" placeholder="due date" className="date" />
        </div>
        <button>Add</button>
      </form>
    );
  }
}

export default NewTodo;
