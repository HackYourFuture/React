import React from 'react';
import TaskText from './TaskText';
import TaskDeadLine from './TaskDeadLine';

export default class Task extends React.Component {

  render() {
       const  { text , deadline }  = this.props.task;
       return (
            <li className="task-list"> 
            <TaskText text={text}/>
            Deadline: <TaskDeadLine deadline={deadline}/>
            </li>
       )
  }
}
