import React from 'react';

export default class TaskDate extends React.Component {
  render() {
    return (
      <span className='task-data'>{this.props.date}</span>
    );
  }
}