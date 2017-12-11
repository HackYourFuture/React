import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './TodoData.json'
import Todo from './Todo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Todos: [],
      todoInput: {
        id: '',
        description: '',
        deadline: '',
        done: false
      },
      editingTodoId: null
    }

    this.handleDoneChange = this.handleDoneChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ Todos })
    }, 1000)
  }

  handleDoneChange(done, todoID) {
    const updatedTodos = this.state.Todos.map(todo => {
      if (todo.id === todoID) {
        return Object.assign({}, todo, {done})
      }
      return todo
    })

    this.setState({
      Todos: updatedTodos
    })
  }

  updateTodo(todoID, updatedTodo) {
    const updatedTodos = this.state.Todos.map(todo => {
      if (todo.id === todoID) {
        return Object.assign({}, todo, {description: updatedTodo})
      }
      return todo
    })
    this.setState({
      Todos: updatedTodos
    })
  }

  onUpdateDescription(updatedTodo, todoID) {
    console.log(updatedTodo)
    this.updateTodo(todoID, updatedTodo)
    this.setState({
      editingTodoId: null
    })
  }

  handleRemove(todoID) {
    console.log(todoID)
    const updatedTodos = this.state.Todos.filter(todo => {
      if (todo.id !== todoID) {
        return todo
      }
      return null
    })

    this.setState({
      Todos: updatedTodos
    })
  }

  handleInput(event) {
    const newInput = Object.assign({}, this.state.todoInput, {
      [event.target.name]: event.target.value
    })

    console.log(newInput)

    this.setState({
      todoInput: newInput
    })
  }

  addTodo(event) {
    event.preventDefault()
    const newTodo = Object.assign({}, this.state.todoInput, {
      id: this.state.Todos.length + 1,
      done: false,
      deadline: new Date().toLocaleDateString()
    })

    const newTodos = [...this.state.Todos, newTodo]

    this.setState({
      Todos: newTodos
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Todo App</h1>
        </header>
        <div>
          <form onSubmit={this.addTodo}>
            <input
              name='description'
              type='text'
              value={this.state.todoInput.description}
              onChange={this.handleInput}
            />
            <button>Add</button>
          </form>
        </div>
        <div>
          {this.state.Todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                onDoneChangeApp={this.handleDoneChange}
                editingState={this.state.editingTodoId === todo.id}
                onTodoRemove={this.handleRemove}  
                onUpdateDescription={(description) => this.onUpdateDescription(description, todo.id)}              
                onEditOn={this.onEditOn.bind(this, todo.id)}
                onEditOff={this.onEditOff.bind(this)}
              />
            )
          })}

        </div>
      </div>
    );
  }
}

export default App;
