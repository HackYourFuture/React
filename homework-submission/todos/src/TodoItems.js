import React, { Component } from 'react';

class TodoItems extends Component {
  delete(key) {
    this.props.delete(key);
  }
  createTasks = item => {
    return (
      <li
        onClick={() => {
          this.delete(item.key);
        }}
        key={item.key}
      >
        {item.text}
      </li>
    );
  };
  render() {
    const todoEntries = this.props.entries;

    const listItems = todoEntries.map(this.createTasks);
    return <ul className="theList">{listItems}</ul>;
  }
}

export default TodoItems;
