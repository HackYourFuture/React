import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';


class TodoList extends React.Component {
  render() {
    const list = this.props.listObj.map((item, i) => <TodoItem key={i} todo={item} handler={this.props.handler} />);
    const content = list.length === 0 ? <p> No items... </p> : <ul> {list} </ul>;
    return (
      <div id='todoList'>
        <h3>Todo List</h3>
        {content}
      </div>
    );
  }
}

export default TodoList;