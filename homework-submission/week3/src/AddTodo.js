import React, { Component } from "react";

const defaultState = {
  description: "",
  deadline: ""
};
class AddTodo extends Component {
  state = defaultState;

  handleFieldChange = (event, field) => {
    this.setState({ [field]: event.target.value });
  };
  addNewTodo = () => {
    this.props.handleAddTodo(this.state);
    this.setState(defaultState);
  };

  render() {
    return (
      <div>
        <div>
          Enter:
          <input
            value={this.state.description}
            onChange={event => this.handleFieldChange(event, "description")}
            type="text"
            placeholder="description"
          />
          <input
            onChange={event => this.handleFieldChange(event, "deadline")}
            value={this.state.deadline}
            type="number"
            placeholder="Deadline:"
          />
          <button onClick={() => this.addNewTodo()}>Add New Todo</button>
        </div>
      </div>
    );
  }
}

export default AddTodo;
