import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return <li key={this.Index}>{this.TodoItem}</li>;
  }
}

export default TodoItem;