import React, { Component } from 'react'
import todos from './todosTable'
import Todo from './todo'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      newTodo: {
        id: '',
        description: '',
        stage: ''
      },
      updatedTodo: {
        description: '',
      },
      visibility: false,
      clicked: ''
    }

    this.changeTodoStage = this.changeTodoStage.bind(this)
    this.captureUserInput = this.captureUserInput.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
    this.changeButtonsVisibility = this.changeButtonsVisibility.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ todos })
    }, 1000)
  }

  changeTodoStage(todoStage, todoID) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todoID === todo.id) {
        return Object.assign({}, todo, { stage: todoStage })
      }
      return todo;
    })
    this.setState({
      todos: updatedTodos
    });
  }

  // toggle the Visibility of cancel and update buttons
  changeButtonsVisibility(show, clickedBtn) {
    this.setState({
      visibility: show,
      // save the clicked edit button to render cancel and update buttons exclusively
      clicked: clickedBtn
      ///////////////////////////////////////////////////////////////////////////////
    })
  }
//////////////////////////////////////////////////////

  captureUserInput(event) {
    const updatedNewTodo = Object.assign({}, this.state.newTodo, {
      [event.target.name]: event.target.value
    })
    this.setState({
      newTodo: updatedNewTodo
    })

  }

  onFormSubmit(event) {
    event.preventDefault()
    const updatedNewTodo = Object.assign({}, this.state.newTodo, {
      id: this.state.todos.length + 1,
      done: false
    })
    const updatedTodos = [...this.state.todos, updatedNewTodo]
    this.setState({
      todos: updatedTodos

    })
  }

  deleteTodo(deletedTodoID) {
    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== deletedTodoID
    })
    this.setState({
      todos: newTodos,
      newTodo: {
        description: ''
      }
    })
  }

  updateTodo(updatedTodoID) {
    const updatedTodos = this.state.todos.map(todo => {
      if (updatedTodoID === todo.id) {
        return Object.assign({}, todo, { description: this.state.newTodo.description })
      }
      return todo
    })
    this.setState({
      todos: updatedTodos
    })
  }

  renderTodos(todos) {
    if (todos.length === 0) {
      return <div> Loading... </div>
    }
    return todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          clickedBtn={this.state.clicked}
          visibility={this.state.visibility}
          onShow={this.changeButtonsVisibility}
          onChange={this.changeTodoStage}
          onDelete={this.deleteTodo}
          onUpdate={this.updateTodo}
        />
      )
    })
  }

  render() {
    return (
      <div className='App'>
        <div>
          <h1 > Todo List App </h1>
          <div>
            <form className='form' onSubmit={this.onFormSubmit}>
              <input className='textArea'
                name='description'
                type='text'
                placeholder='input a Todo Description'
                value={this.state.newTodo.description}
                onChange={this.captureUserInput}
              />
              <button className='submit'>Add</button>
            </form>
          </div>
          <div>
            {this.renderTodos(this.state.todos)}
          </div>
        </div>
      </div>)
  }
}
export default App