import React, { Component } from 'react';
import Todostatic from './components/Todostatic';
import Todosdynamic from './components/Todosdynamic';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todostatic: [
      { id: 1, content: ' Get out of bed', deadline: 'Wed Sep 13 2017' },
      { id: 2, content: 'Brush teeth', deadline: 'Thu Sep 14 2017' },
      { id: 3, content: 'Eat breakfast', deadline: 'Fri Sep 15 2017' },
    ],
    todosdynamic: [
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

  deleteTodo = id => {
    const todosdynamic = this.state.todosdynamicdynamic.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todosdynamic: todosdynamic,
    });
  };
  addTodo = todo => {
    todo.id = Math.random();
    let todosdynamic = [...this.state.todosdynamic, todo];
    this.setState({
      todosdynamic: todosdynamic,
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todostatic todostatic={this.state.todostatic} />
        <Todosdynamic todosdynamic={this.state.todosdynamic} deleteTodo={this.deleteTodo} />

        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
