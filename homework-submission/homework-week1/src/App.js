import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './components/description';
import todos from './sources/todos.json';

class App extends Component {
  state = {
    todos
  }

  isTaskDone = (todo) => {
    console.log(todo);

    todo.done = !todo.done;
    this.setState({
      todos: this.state.todos
    });
  }

  renderTodos() {
    if (this.state.todos.length === 0) return <p>No items...</p>

    const textStyle = { textDecoration: 'line-through' }


    return <ul>
      {
        todos.map((todo) => {

          return (
            <li key={todo.id} style={this.styles}>
              <input checked={todo.done} type='checkbox' onChange={this.isTaskDone.bind(this, todo)} />
              <span style={todo.done ? textStyle : null}>
                {todo.description} , {todo.deadline}
              </span>
            </li>)
        })
      }
    </ul>
  }

  styles = {
    'border': '3px solid #e8effc',
    'width': '500px',
    'padding': '25px',
    'listStyleType': 'none',
    'background': '#6cc5fc',
    'textAlign': 'left',
    'borderRadius': '10px'
  };

  render() {
    console.log(this.state.todos);
    return (
      <div className='App'>

        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Todo List</h1>
        </header>

        <p className='App-intro'></p>

        {this.renderTodos()}

      </div>
    );
  }
}
export default App;
