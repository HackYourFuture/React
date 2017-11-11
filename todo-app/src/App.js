import React, { Component } from 'react';
import Todos from './Todos'
import TodoItem from './TodoItems'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      Todos: [],
      newTodo: {
        id: '',
        description: '',
        status: false
      },
      editingTodoId: null
    }

    this.add = this.add.bind(this)
    this.delete = this.delete.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
    this.input = this.input.bind(this)    
    this.changeStatus = this.changeStatus.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ Todos })
    }, 1000)
  }

  add(event) {
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

  delete(deletedTodoID) {
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

  onUpdate(todoID, updatedTodo) {
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

  input(event) {
    const updatedNewTodo = Object.assign({}, this.state.newTodo, {
      [event.target.name]: event.target.value
    })
    this.setState({
      newTodo: updatedNewTodo
    })
  }
  
  changeStatus(todoStatus, id) {
    this.onUpdate(id, { status: todoStatus })
  }

  onEditOn(id) {
    this.setState({
      editingTodoId: id
    })
  }

  onEditOff() {
    this.setState({
      editingTodoId: null
    })
  }

  UpdateDescription(updatedTodo, id) {
    this.onUpdate(id, { description: updatedTodo })
    this.setState({
      editingTodoId: null
    })
  }

  renderTodos(Todos) {
    if (Todos.length === 0) {
      return <div> wait a second... </div>
    }
    return Todos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          onChange={this.changeStatus}
          delete={this.delete}
          onDoneChange={this.handleDoneChange}
          edit={this.state.editingTodoId === todo.id}
          onUpdateDescription={(description) => this.UpdateDescription(description, todo.id)}
          onEditOn={this.onEditOn.bind(this, todo.id)}
          onEditOff={this.onEditOff.bind(this)}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <h1 > Todo List App </h1>
        <input
          name='description'
          type='text'
          placeholder='add a todo'
          value={this.state.newTodo.description}
          onChange={this.input}
        />
        <button onClick={this.add}>Add</button>
        {this.renderTodos(this.state.Todos)}
      </div>
    )
  }


}
export default App