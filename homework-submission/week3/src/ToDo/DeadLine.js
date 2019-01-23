import React from 'react';

export default class DeadLine extends React.Component {
  render() {

    return (
      <strong>{this.props.deadline.toDateString()}</strong>/**{this.props.deadline.toDateString()} */
    );
  }
}