import React, { Component } from 'react'
import Todos from './TodosTable'
import Todo from './Todo'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Todos: [],
      newTodo: {
        id: '',
        description: '',
        stage: false
      },
      editingTodoId: null
    }

    this.changeTodoStage = this.changeTodoStage.bind(this)
    this.captureUserInput = this.captureUserInput.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ Todos })
    }, 1000)
  }

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
      id: this.state.Todos.length + 1,
      done: false
    })
    const updatedTodos = [...this.state.Todos, updatedNewTodo]
    this.setState({
      Todos: updatedTodos

    })
  }

  deleteTodo(deletedTodoID) {
    const newTodos = this.state.Todos.filter(todo => {
      return todo.id !== deletedTodoID
    })
    this.setState({
      Todos: newTodos,
      newTodo: {
        description: ''
      }
    })
  }

  onEditOn(todoID) {
    this.setState({
      editingTodoId: todoID
    })
  }

  onEditOff() {
    this.setState({
      editingTodoId: null
    })
  }

  updateTodo(todoID, updatedTodo) {
    const updatedTodos = this.state.Todos.map(todo => {
      if (todo.id === todoID) {
        return Object.assign({}, todo, updatedTodo)
      }
      return todo
    })
    this.setState({
      Todos: updatedTodos
    })
  }

  changeTodoStage(todoStage, todoID) {
    this.updateTodo(todoID, {stage: todoStage})
  }

  onUpdateDescription(updatedTodo, todoID) {
    this.updateTodo(todoID,  {description: updatedTodo})
    this.setState({
      editingTodoId: null
    })
  }

  renderTodos(Todos) {
    if (Todos.length === 0) {
      return <div> Loading... </div>
    }
    return Todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onChange={this.changeTodoStage}
          onDelete={this.deleteTodo}
          onDoneChange={this.handleDoneChange}
          editingState={this.state.editingTodoId === todo.id}
          onUpdateDescription={(description) => this.onUpdateDescription(description, todo.id)}              
          onEditOn={this.onEditOn.bind(this, todo.id)}
          onEditOff={this.onEditOff.bind(this)}
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
            {this.renderTodos(this.state.Todos)}
          </div>
        </div>
      </div>)
  }
}
export default App