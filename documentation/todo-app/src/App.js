import React, { Component } from 'react';
import './App.css';

// ********* Components *********
import TodoList from './components/todoList';
import TopHeader from './components/topHeader';

// ********* Data *********
import todoS from './data/todoS.json';

class App extends Component {

  state = {
    todoS : todoS
  }

  handleToggleCheck = todoId => {
    const newTodoList = this.state.todoS.map
      (todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo
      })
    this.setState({todoS: newTodoList})
  }

  render() {
    
    return (
      <div className="App">
        <TopHeader />
        <TodoList
          todoS={this.state.todoS}
          handleToggleCheck={this.handleToggleCheck}
        />
      </div>
    );
  }
}

export default App;
