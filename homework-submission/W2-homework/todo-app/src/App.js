import React, { Component } from 'react';
import './App.css';
import TodoItems from './Components/TodoItems/TodoItems';
import AddItem from './Components/AddItem/AddItem';

/**
 * This class component is the container of the Todo List application
 * @return Here is the return of the application
 */
class App extends Component {
  state = {
    todoItems: [
      {
        id: 1,
        description: 'Get out of bed',
        deadline: '2017-09-11',
        done: true,
      },
      {
        id: 2,
        description: 'Brush teeth',
        deadline: '2017-09-10',
        done: false,
      },
      {
        id: 3,
        description: 'Eat breakfast',
        deadline: '2017-09-09',
        done: false,
      },
    ],
  };

  deleteTodoItem = id => {
    let todoItems = this.state.todoItems.filter(todoItem => {
      return todoItem.id !== id;
    });
    this.setState({ todoItems });
  };

  addTodoItem = todoItem => {
    let todoItems = this.state.todoItems;
    todoItem.id = Math.random() * 10 + 1;
    todoItems.push(todoItem);
    this.setState({ todoItems });
  };

  render() {
    return (
      <div className="App">
        <h1 className="header">Todo App</h1>
        <TodoItems todoItems={this.state.todoItems} deleteTodoItem={this.deleteTodoItem} />
        <AddItem addTodoItem={this.addTodoItem} />
      </div>
    );
  }
}

export default App;
