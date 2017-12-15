import React from 'react';
import TaskText from './TaskText';
import TaskDate from './TaskDate';
import './task.css';

export default class Task extends React.Component {
  render() {
    const { text ,date } = this.props.task;

    return (
      <li className='task-item'>
        <TaskText text={text} />, <TaskDate date={date} />
      </li>
    );
  }
}