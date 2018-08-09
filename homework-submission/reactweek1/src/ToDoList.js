import React, { Component } from 'react';

class ToDoList extends Component{
  render() {
    return (
      <li> {this.props.description}, {this.props.deadLine}</li>
    );
  }
}

export default ToDoList;