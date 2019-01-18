import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    const todos = this.props.data;
    const elements = todos.length > 0 ? todos.map((item, key) =>
      <TodoItem key={key} todo={item} handler={this.props.handler} />)
      : <p> No items </p>
    return (
      <div >
        <ul>
          {elements}
        </ul>
      </div>
    );
  }
}

export default TodoList;