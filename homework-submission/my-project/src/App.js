import React from 'react';
import Todos from './todos.js';
import Header from './pageheader.js';
import todosData from './todos.json'
import './App.css';


class App extends React.Component {
  state = {
    todos: todosData
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
  render() {
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} handleClick={this.checkBoxHandler} />
      </div>
    );
  }
}
export default App;