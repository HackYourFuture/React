import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    const todos = this.props.data;
    const elements = todos.length > 0 ? todos.map((item, key) =>
      <TodoItem key={key} index={key} todo={item} handler={this.props.handler}
        deleteHandler={this.props.deleteHandler}
        updateHandler={this.props.updateHandler}
      />)
      : <p> No items </p>
    return (
      <ul>
        {elements}
      </ul>
    );
  }
}

export default TodoList;