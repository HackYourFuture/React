import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    return (
    <li key={this.props.id}>
      <span contentEditable={this.props.contentEditable} >
        {this.props.description}
        </span>
      {` deadline: `}
      <span contentEditable={this.props.contentEditable} type="date">
        {this.props.date}
      </span>
    </li>
    );
  }
}
