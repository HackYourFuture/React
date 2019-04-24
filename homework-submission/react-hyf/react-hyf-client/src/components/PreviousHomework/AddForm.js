import React, { Component } from 'react';
import Button from './ButtonForm';
import Input from './InputForm';

class AddTodo extends Component {
  state = {
    description: '',
    deadline: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      description: '',
      deadline: ''
    })
  }
  
  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Description: </label>
        <Input placeholder={"enter todo"} type='text' name="description" onChange={this.handleChange} value={this.state.description} />
        <label>Deadline: </label>
        <Input type='date' name="deadline" onChange={this.handleChange} value={this.state.deadline} />
        <Button type={"submit"} className={"add-todo"} buttonName={"Add todo"} disabled={!this.state.description}
        />
      </form>
    )
  }
}

export default AddTodo;