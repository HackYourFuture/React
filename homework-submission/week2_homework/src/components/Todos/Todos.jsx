import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import Header from '../Header/Header';
import AddTodo from '../AddTodo/AddTodo';

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
