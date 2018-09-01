import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    return (
    <li key={this.props.id}>
      {this.props.description}
    </li>
    );
  }
}
