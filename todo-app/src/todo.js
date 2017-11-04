import React, { Component } from 'react';
import TodoDescription from './todoDescription'
import TodoStage from './todoStage'
import './App.css'

class todo extends Component {
  constructor(props) {
    super(props)


    this.handleTodoStage = this.handleTodoStage.bind(this)
    this.handleClickEvent = this.handleClickEvent.bind(this)
  }

  handleTodoStage(todoStage, todoID) {
    this.props.onChange(todoStage, todoID);
  }

  handleClickEvent(event) {
    const selectedTodo = this.props.todo.id
    switch (event.target.name) {
      case 'remove':
        this.props.onDelete(selectedTodo)
        this.props.onShow(false, selectedTodo)
        break;
      case 'edit':
        this.props.onShow(true, selectedTodo)
        break;
      case 'cancel':
        this.props.onShow(false, selectedTodo)
        break;
      case 'update':
        this.props.onShow(false, selectedTodo)
        this.props.onUpdate(selectedTodo)
        break;
      default:
        break;
    }
  }

  renderButtons() {
    if (!this.props.visibility) {
      return (
        <div>
          <button
            value={this.props.todo.id}
            name='edit'
            onClick={this.handleClickEvent}
            className={this.props.visibility ? 'hidden Buttons' : 'shown Buttons'}
          >
            edit
          </button>
        </div>
      )
    } else if (this.props.todo.id === this.props.clickedBtn) {
      return (
        <div
          className={this.props.visibility ? 'shown updateBtnList' : 'hidden updateBtnList'}
          key={todo.id}
        >
          <div>
            <button className='Buttons'
              name='update'
              onClick={this.handleClickEvent}
            >
              update
          </button>
          </div>
          <div>
            <button className='Buttons'
              value={this.props.todo.id}
              name='cancel'
              onClick={this.handleClickEvent}
            >
              cancel
          </button>
          </div>
        </div>
      )
    }
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
        <div className='description'>
          <li>
            <TodoDescription
              description={this.props.todo.description}
            />
          </li>
        </div>

        {this.renderButtons()}
        <div>
          <button className='Buttons'
            name='remove'
            onClick={this.handleClickEvent}
          >
            remove
          </button>
        </div>
      </div>
    )
  }
}
export default todo