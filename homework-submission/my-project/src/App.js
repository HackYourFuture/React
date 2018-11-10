import React from 'react';
import TodoElement from './todo.js';
import todosData from './todo.json'
import Header from './page-header.js';
import AddTodo from './AddForm.js';
import './App.css';
class App extends React.Component {
  state = {
    todos: todosData,
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  checkBoxHandler = (id) => {
    const todos = this.state.todos.map(item => {
      if (item.id === id) {
        return {
          ...item, done: !item.done
        }
      }
      return item;
    });
    this.setState({ todos });
  }
  addNewTodo = (todo) => {
    const length = this.state.todos.length
    todo.id = length + 1;
    const todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  handleUpdateTodo = (oldDescription, newDescription, newDeadline) => {
    const todos = [...this.state.todos]
    const neededItem = todos.find(todo => todo.description === oldDescription)
    neededItem.description = newDescription
    neededItem.deadline = newDeadline
    this.setState({
      todos
    })
  }
  render() {
    const Todos = this.state.todos.length !== 0 ? this.state.todos.map(todo => <TodoElement
      sort={todo.id}
      description={todo.description}
      deadline={todo.deadline}
      done={todo.done}
      deleteTodo={this.deleteTodo}
      handleClick={this.checkBoxHandler}
      updateTodo={this.handleUpdateTodo}
    />) : (
        <p className='noTodo '>All Todos is done...</p>
      )
    return (
      <div className="App">
        <Header />
        <ul>{Todos}</ul>
        <AddTodo addTodo={this.addNewTodo} />
      </div>
    );
  }
}
export default App;
