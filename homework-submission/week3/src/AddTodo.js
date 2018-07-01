import React, { Component } from "react";
class AddTodo extends Component {
  state = {
    description: "",
    deadline: ""
  };

  // onSubmit = () => {
  //   this.props.addNewTodo(this.state);
  // };

  onChangeTodo = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    //const { todos, addNewTodo } = this.props;
    //const { description, deadline } = this.state;
    const currentState = this.state;
    console.log(currentState);
    return (
      <div>
        <form>
          Enter:
          <input
            value={this.state.description}
            onChange={event =>
              this.onChangeTodo("description", event.target.value)
            }
            type="text"
            placeholder="description"
          />
          <input
            onChange={event =>
              this.onChangeTodo("deadline", event.target.value)
            }
            value={this.state.deadline}
            type="number"
            placeholder="Deadline:"
          />
          <button onClick={() => this.props.addNewTodo(currentState)}>
            Add New Todo
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
