import React, { Component } from "react";
class AddTodo extends Component {
  state = {
    description: " ",
    deadline: ""
  };

  // onSubmit = () => {
  //   this.props.addNewTodo(this.state);
  // };

  onChangeTodo = (event, field) => {
    this.setState({ [field]: event.target.value });
  };
  render() {
    const { todos, addNewTodo } = this.props;
    const { description, deadline } = this.state;
    console.log(this.state);
    return (
      <div>
        <form>
          Enter:
          <input
            value="description"
            onChange={event => this.onChangeTodo(event, "description")}
            type="text"
            placeholder="description"
          />
          <input
            onChange={event => this.onChangeTodo(event, "deadline")}
            value="deadline"
            type="date"
            placeholder="Deadline:"
          />
          <button onClick={() => this.props.addNewTodo(this.state)}>
            Add New Todo
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
