import React, { Component } from 'react';

import moment from 'moment';
import './App.css';

// ********* Components *********
import TodoList from './components/todoList';
import TopHeader from './components/topHeader';

// ********* Data *********
import todoS from './data/todoS.json'

const uuid = require('uuid/v4')

class App extends Component {

  state = {
    todoS
  }

  handleAddTodo = (fields) => {
    const newTodo = {
      ...fields,
      id: uuid(),
      createdAt: moment().format('DD-MM-YYYY')
    }
    this.setState({
      todoS: [
        ...this.state.todoS,
        newTodo
      ]
    })
  }

  handleRemoveTodo(id) {
    this.setState({
      todoS: this.state.todoS.filter(todo => todo.id !== id)
    })
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
    this.setState({ todoS: newTodoList })
  }

  render() {

    return (
      <div className="App">
        <TopHeader />
        <TodoList
          todoS={this.state.todoS}
          handleToggleCheck={this.handleToggleCheck}
          handleAddTodo={this.handleAddTodo}
          handleRemoveTodo={this.handleRemoveTodo.bind(this)}
        />
      </div>
    );
  }
}

export default App;
