import React, { Component } from 'react';
import './AddItem.css';

/**
 * A class component to add an item to the todo list.
 * @return This class returns a form to add a todo item and its deadline
 */

class AddItem extends Component {
  state = {
    description: '',
    deadline: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (e.target.description.value === '') {
      return false;
    } else {
      this.props.addTodoItem(this.state);
      this.setState({
        description: '',
        deadline: '',
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter Todo name..."
          id="description"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <input type="date" id="deadline" onChange={this.handleChange} value={this.state.deadline} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddItem;
