import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import Button from './button';

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return (
      <div className="row">
        <li className="listItem">{item.name}</li>
        <Button
          name="X"
          className="deleteButton"
          onClick={() => this.delete(item.key)}
          key={item.key}
        >
          delete
        </Button>
      </div>
    );
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="thelist">
        <FlipMove duration={250} easing="ease-in">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}
export default TodoItems;
