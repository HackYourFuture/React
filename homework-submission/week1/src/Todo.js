import React, { Component } from 'react';
class Todo extends Component {
  render() {
    return (
      <li> {this.props.id} {this.props.description} {this.props.deadline}  </li>
    );
  }
}
export default Todo;
