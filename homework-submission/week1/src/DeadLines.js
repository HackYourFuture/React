import React from 'react';
import Description from './Description';

export default class DeadLines extends React.Component {
  render() {
    return (
      <strong>{this.props.deadline.toDateString()}</strong>
    );
  }
}