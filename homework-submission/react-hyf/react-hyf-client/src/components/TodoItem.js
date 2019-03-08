import React, { Component } from 'react';
import './todoItem.css';

export default class TodoItem extends Component {
  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <button className="removeTodo" onClick={e => this.removeTodo(this.props.id)}>
          X
        </button>
        {this.props.todo.text}
      </div>
    );
  }
}
