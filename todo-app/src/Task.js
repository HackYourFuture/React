import React from 'react';
import TaskText from './TaskText';
import TaskDate from './TaskDate';
import './task.css';

export default class Task extends React.Component {
	
    constructor(props) {
    super(props);

        // Events and bind to `this`
        this.toggleDone = this.toggleDone.bind(this);
    }

    toggleDone(event) {
        const checked = event.target.checked;
        this.props.onDoneChange(checked, this.props.task.id);
    }
  
    render() {
        const { description , deadline , done } = this.props.task;
        const isDone = done? "done" : "";

        return (
            <li className={"task-item " + isDone}>
                <input
                    type='checkbox'
                    checked={done}
                    onChange={this.toggleDone}
                />
                <TaskText text={description} />, <TaskDate date={deadline} />
            </li>
        );
    }
}
