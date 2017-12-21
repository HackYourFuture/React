import React from 'react';
import TaskText from './TaskText';
import TaskDate from './TaskDate';
import './task.css';

export default class Task extends React.Component {
	
  constructor(props) {
    super(props);

    // Events and bind to `this`
    this.markAsDone = this.markAsDone.bind(this);
  }

  markAsDone(event) {
    const checked = event.target.checked;
    this.props.onDoneChange(checked, this.props.task.id);
  }
  
  render() {
    const { description ,deadline , done } = this.props.task;
	const is_done = done? "done" : "";

    return (
      <li className={"task-item " + is_done}>
	    <input
            type='checkbox'
            checked={done}
            onChange={this.markAsDone}
         />
         <TaskText text={description} />, <TaskDate date={deadline} />
      </li>
    );
  }
}
