import React from 'react';
import TodoList from './TodoList';
import Todos from './Todos';

export default class App extends React.Component {
  renderTodos(Todos) {
    return Todos.map((todo, index) => {
      return (
        <TodoList key={index} text={todo.text} />
      );
    })
  }
  render() {
    return (
      <div>
        <h1>Todo list:</h1>
        {this.renderTodos(Todos)}
      </div>
    );
  }
}