import React, { Component } from 'react';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { description: '', deadline: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  submitData(event) {
    event.preventDefault();
    this.props.updateTodoList(this.state);
  }
  render() {
    return (
      <form onSubmit={event => this.submitData(event)}>
        <label>Description:</label>
        <br />
        <input
          type="text"
          name="description"
          placeholder="Type here"
          onChange={this.handleChange}
        />
        <br />
        <label>Deadline :</label>
        <br />
        <input type="date" name="deadline" onChange={this.handleChange} />
        <br />
        <input type="submit" />
      </form>
    );
  }
}
