import React, { Component } from 'react';
import data from './data';

class AddForm extends Component {
  handleClick = event => {
    event.preventDefault();
    let x = Math.max(...data.map(item => item.id));
    let newItem = {
      id: x + 1,
      description: event.target.description.value,
      deadline: event.target.deadline.value,
      done: false,
    };
    this.props.onSubmit(newItem);
    event.target.reset();
  };

  render() {
    return (
      <div className="input-form">
        <form onSubmit={this.handleClick}>
          <label>Enter description </label>
          <input type="text" name="description" maxLength="20" required />
          <label>Deadline </label>
          <input type="date" name="deadline" required />
          <input type="submit" value="add" />
        </form>
      </div>
    );
  }
}

export default AddForm;
