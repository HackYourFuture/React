import React from 'react';
import TodoElement from './TodoElement';
import { observer, inject } from 'mobx-react';

@inject('todos')
@observer
class TodoList extends React.Component {
  render() {
    const { todos } = this.props.todos;
    const list = todos.map((item, i) => <TodoElement key={i} todo={item} />);
    return (
      <div id='todoList'>
        <h2>My list of tasks</h2>
        {list.length === 0 ? <p className='No-todo'> No items... </p> : <ul>{list}</ul>}
      </div>
    );
  }
}

export default TodoList;