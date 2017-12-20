import React from 'react';
import AppTask from './AppTask';
import AppDate from './AppDate';

export default class Task extends React.Component {

  render() {
       return (
            <li className="task-list"> 
            Task: <AppTask description={this.props.task.description}/>
            <br/>
            Deadline: <AppDate deadline={this.props.task.deadline}/>
            </li>
       )
  }
}
