import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './components/description';
import todos from './sources/todos.json';

class App extends Component {
  state = {
    todos
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

  renderTodos() {
    if (this.state.todos.length === 0) return <p>No items...</p>
    
    return <ul>
      {
        todos.map((todos) => {

          return <li key={todos.id} style={this.styles}>
            <input type='checkbox' />
            {todos.description} , {todos.deadline} , {todos.done ? 'Done' : 'Undone'}
          </li>
        })
      }
    </ul>
  }

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
