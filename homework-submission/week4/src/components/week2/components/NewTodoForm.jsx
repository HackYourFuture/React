import React from 'react';

class NewTodo extends React.Component {
  taskRef = React.createRef();
  dateRef = React.createRef();

  createTodo = event => {
    event.preventDefault();
    const todo = {
      id: Date.now(),
      description: this.taskRef.current.value,
      deadline: this.dateRef.current.value,
      done: false,
    };
    if (this.taskRef.current.value === '') {
      alert('Please enter a todo!');
    } else if (this.dateRef.current.value === '') {
      alert('Please enter a due date!');
    } else {
      this.props.addTodo(todo);
    }
    event.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.createTodo}>
        <div className="input">
          <label>Task: </label>
          <input
            name="task"
            ref={this.taskRef}
            type="text"
            placeholder="please enter a todo"
            className="todo"
          />
        </div>
        <div className="input">
          <label>Due date: </label>
          <input
            name="date"
            ref={this.dateRef}
            type="date"
            placeholder="due date"
            className="date"
          />
        </div>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default NewTodo;
