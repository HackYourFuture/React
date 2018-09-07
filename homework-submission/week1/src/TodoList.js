import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
import { observer, inject } from 'mobx-react';

@inject('todos')
@observer
class TodoList extends React.Component {
  render() {
    const { todos } = this.props.todos;
    const list = todos.map((item, i) => <TodoItem key={i} todo={item} />);
    return (
      <div id='todoList'>
        <h3>Todo List</h3>
        {list.length === 0 ? <p> No items... </p> : <ul>{list}</ul>}
      </div>
    );
  }
}

export default TodoList;