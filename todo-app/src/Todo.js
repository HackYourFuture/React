import React, { Component } from 'react';
import TodoDescription from './TodoDescription'
import TodoStage from './TodoStage'
import './App.css'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.handleTodoStage = this.handleTodoStage.bind(this)
    this.handelRemove = this.handelRemove.bind(this)
  }

  handleTodoStage(todoStage, todoID) {
    this.props.onChange(todoStage, todoID);
  }

  handelRemove() {
    let selectedTodo = this.props.todo.id
    this.props.onDelete(selectedTodo)
  }

  render() {
    return (
      <div className='todoList' >
        <div className='todoStage'>
          <li>
            <TodoStage
              todo={this.props.todo}
              stage={this.props.todo.stage}
              onChange={this.handleTodoStage}
            />
          </li>
        </div>
        <TodoDescription
          description={this.props.todo.description}
          editingState={this.props.editingState}
          onEditOn={this.props.onEditOn}
          onEditOff={this.props.onEditOff}
          onUpdate={this.props.onUpdateDescription}
        />
        <div>
          <button
            name='remove'
            onClick={this.handelRemove}
          >
            remove
          </button>
        </div>
      </div>
    )
  }
}
export default Todo