import React, { Component } from 'react';

//component for static list, I guess nothing much to see here :o

class TodoListStatic extends Component {
  render() {
    return (
      <ul className="TodoItemStatic">
        <li className={this.props.className}>
          <p>
            {this.props.description} - <span>{this.props.deadline}</span>
          </p>
        </li>
      </ul>
    );
  }
}

export default TodoListStatic;
