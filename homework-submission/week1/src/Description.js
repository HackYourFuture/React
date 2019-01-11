import React from 'react';

export default class Description extends React.Component {
  render() {
    return (
      <li>
        <p id={this.props.id}>{this.props.todo}, {this.props.deadline}</p>
      </li>
    );
  }
}