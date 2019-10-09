import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.className}>
        <p>
          {this.props.description} - <span>{this.props.deadline}</span>
        </p>
      </li>
    );
  }
}

export default TodoItem;
