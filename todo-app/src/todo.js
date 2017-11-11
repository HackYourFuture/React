import React, { Component } from 'react'
import Description from './Description'
import Done from './Done'
import Deadline from './Deadline'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.handleDoneChange = this.handleDoneChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleDoneChange(done, todoID) {
    this.props.onDoneChangeApp(done, todoID)
  }

  handleRemove(event) {
    this.props.onTodoRemove(this.props.todo.id)
  }
  render() {
    return (
      <div className='todoItem'>
        <Done
          todo={this.props.todo}
          done={this.props.todo.done}
          onDoneChangeTodo={this.handleDoneChange}
        />
        <Description
          description={this.props.todo.description}
          editingState={this.props.editingState}
          onEditOn={this.props.onEditOn}
          onEditOff={this.props.onEditOff}
          onUpdate={this.props.onUpdateDescription}
        />
        {/* <Deadline
          deadline={this.props.todo.deadline}
        />
         */}
        <button
          onClick={this.handleRemove}
        >remove</button>
      </div>
    )
  }
}

export default Todo