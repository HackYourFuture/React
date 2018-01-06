import React from 'react';
import TaskText from './TaskText';
import TaskDeadLine from './TaskDeadLine';
import './index.css'

export default class Task extends React.Component {
     constructor(props) {
          super(props);
          
          this.toggleDone = this.toggleDone.bind(this);
    }
     
    toggleDone(event) {
        const checked = event.target.checked;
        this.props.onDone(checked, this.props.task.id);
    }
     
    render() {
        const { description , deadline , done } = this.props.task;
        const isDone = done? "done" : "";

        return (
            <li className={"task-list " + isDone}>
                <input
                    type='checkbox'
                    checked={done}
                    onChange={this.toggleDone}
                />
                <TaskText text={description} /><TaskDeadLine deadline={deadline} />
            </li>
        );
    }
}
