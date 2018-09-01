import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';


class TodoList extends React.Component {
  render() {
    const list = this.props.listObj.map(
      (item, i) =>
        <TodoItem key={i}
          todo={item}
          editing={this.props.editing}
          checkBoxHandler={this.props.checkBoxHandler}
          deleteHandler={this.props.deleteHandler}
          editHandler={this.props.editHandler}
          updateHandler={this.props.updateHandler}
        />
    );
    const content = list.length === 0 ? <p> No items... </p> : <ul>{list}</ul>;
    return (
      <div id='todoList'>
        <h3>Todo List</h3>
        {content}
      </div>
    );
  }
}

export default TodoList;