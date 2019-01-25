import React, { Component } from "react";
import randomize from "randomatic";

class MainForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    let newItem = {
      id: parseInt(randomize("0000")),
      description: event.target.description.value,
      deadline: event.target.deadline.value,
      done: false
    };
    this.props.onSubmit(newItem);
    event.target.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Description:
        <input type="text" name="description" placeholder="description" />
        Deadline:
        <input type="date" name="deadline" placeholder="dead line" />
        <input type="submit" value="Add" className="button" />
      </form>
    );
  }
}

export default MainForm;
