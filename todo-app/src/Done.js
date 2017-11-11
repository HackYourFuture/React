import React, { Component } from 'react'

class Done extends Component {
  constructor(props) {
    super(props)
    
    this.handleDoneChange = this.handleDoneChange.bind(this)
  }
  handleDoneChange(event) {
    const todoID = this.props.todo.id
    this.props.onDoneChangeTodo(event.target.checked, todoID)
  }
  render() {
    return (
      <div>
        <input
          type='Checkbox'
          checked={this.props.done}
          onChange={this.handleDoneChange}
        />
      </div>
    )
  }
}

export default Done