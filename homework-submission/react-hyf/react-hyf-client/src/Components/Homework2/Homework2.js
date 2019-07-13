import React, { Component } from 'react';
import './Homework2.css';
import TodoItems from './Components/TodoItems/TodoItems';
import AddItem from './Components/AddItem/AddItem';

/**
 * This class component is the container of the Todo List application
 * @return Here is the return of the application
 */
class Homework2 extends Component {
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
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        {
          ...todoItem,
          id: Math.random() * 10 + 1,
        },
      ],
    });
  };

  render() {
    return (
      <div className="homework2">
        <h2 className="header-week2">Todo App</h2>
        <TodoItems todoItems={this.state.todoItems} deleteTodoItem={this.deleteTodoItem} />
        <AddItem addTodoItem={this.addTodoItem} />
      </div>
    );
  }
}

export default Homework2;
