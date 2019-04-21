import React, { Component } from 'react';

// COMPONENTS
import TodoItem from '../todoItem/TodoItem';
import Header from '../header/Header';
import AddTodo from '../addTodo/AddTodo';

export class Todos extends Component {
  render() {
    // Props
    const { todos, dltItem, toggleCheckbox, addTodo } = this.props;
    return (
      <React.Fragment>
        {/* List Header Component */}
        <Header title={'Dynamic Todo List'} />

        {/* Add Todo Component */}
        <AddTodo addTodo={addTodo} />

        {/* Todo Component */}
        {todos.map(item => (
          <TodoItem key={item.id} todo={item} dltItem={dltItem} toggleCheckbox={toggleCheckbox} />
        ))}
      </React.Fragment>
    );
  }
}

export default Todos;
