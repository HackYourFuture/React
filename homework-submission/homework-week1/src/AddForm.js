import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    description: '',
    deadline: '',
    done: false
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(this.state)
  }
  handleSubmit = (e) => {
    e.PreventDefault();
    this.props.addTodo(this.state)
    this.setState({
      description: '',
      deadline: ''
    })

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo</label>
          <input type='text' id='description' onChange={this.handleChange} />
          <input type='date' id='deadline' onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default AddTodo