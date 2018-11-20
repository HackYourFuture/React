import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('todos')
@observer

class AddTodo extends Component {
  state = {
    description: ''
  }

  handleTodoChange = (e) => {
    this.setState({
      description: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.todos.addHandler(this.state.description)
    this.setState({
      description: ''
    })

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo</label>
          <input type='text' name='description' value={this.state.description} onChange={this.handleTodoChange} required />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddTodo