import React from 'react';
import TaskText from './TaskText';
import TaskDeadLine from './TaskDeadLine';

export default class Task extends React.Component {

  render() {

    return (
      <li className="task-list"> 
        <TaskText text={this.props.task.text}/>
         Deadline: <TaskDeadLine deadline={this.props.task.deadline}/>
      </li>
    )
  }

}
