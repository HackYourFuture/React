import React from 'react';

export default class TodoStatus extends React.Component {
  render() {
    return (
      <div>status: {this.props.status}</div>
    );
  }
}