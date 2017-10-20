import React from 'react';

export default class TodoStatus extends React.Component {
  render() {
    return (
      <div> {this.props.status}<br/></div>
    );
  }
}