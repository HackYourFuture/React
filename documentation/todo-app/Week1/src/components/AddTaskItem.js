import React from "react";
// import TaskList, { list } from "./TasksList";

class AddTaskItem extends React.Component {

  taskInput = React.createRef();

  addItem = event => {
    event.preventDefault();
    // console.log(this.taskInput.current.value);
  };

  render() {
    return (
      <form onSubmit={this.addItem}>
        <input type="text" ref={this.taskInput} placeholder="Add new task" />
        <button type='submit'> Add </button>
      </form>
    );
  }
}

export default AddTaskItem;
