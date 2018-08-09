import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';


class TodoList extends React.Component {
  render() {
    const List = this.props.listObj.map((item, i) => <TodoItem key={i} description={item.description} deadline={item.deadline} />);
    return (
      <div id='todoList'>
        <h3>Todo List</h3>
        <ul> {List} </ul>
      </div>
    );
  }
}

export default TodoList;