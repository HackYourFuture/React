import React from 'react'
import './App.css'
import Todo from './todo.js'
import todos from './todos.js'


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      newTodo: {
        id: '',
        task: '',
        status: ''
      },
      updatedTodo: {
        task: '',
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
          {/* onUpdate={this.updateTodo} */}
        />
      )
    })
  }
  render(){
    return (
      <div >
        <div>
          <h1 > Todos</h1>
          <div>
            <form onSubmit={this.onFormSubmit}>
              <input 
                name='Task'
                type='text'
                placeholder='input a task'
                value={this.state.newTodo.task}
                onChange={this.captureUserInput}
              />
              <button>Add</button>
            </form>
          </div>
          <div>
            {this.renderTodos(this.state.todos)}
          </div>
        </div>
      </div>
    )
  }
}

