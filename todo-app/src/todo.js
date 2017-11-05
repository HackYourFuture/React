import React from 'react'
import Task from './task.js'
import TaskDate from './TaskDate.js'
import State from './state.js'
import Picture from './Picture.js'
import './todo.css'
import todos from './todos.js'

export default class Todo extends React.Component{
    constructor(props) {
        super(props)
    
        this.handleTodoStage = this.handleTodoStage.bind(this)
        this.handleClickEvent = this.handleClickEvent.bind(this)
      }
    
      handleTodoStage(todoStage, todoID) {
        this.props.onChange(todoStage, todoID);
      }
    // handle click event to toggle button visibility
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
    render(){
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