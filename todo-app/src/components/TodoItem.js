import React from 'react';

export default class TodoItem extends React.Component {
  render() {
    return (
      <div><ul>
      <li>{this.props.text}</li>
      </ul></div>
    )
  }
}