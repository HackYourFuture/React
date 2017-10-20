import React from 'react';
import TodoList from './components/TodoList';
import Todos from './components/todos';

export default class App extends React.Component {
  renderTodos(Todos) {
    return Todos.map((todo, index) => {
      return (
        <TodoList
          key={index}
          todo={todo}
        />
      );
    })
  }
  render() {
    return (
      <div>
        <h1>TodoList:</h1>
        {this.renderTodos(Todos)}
      </div>
    );
  }
}