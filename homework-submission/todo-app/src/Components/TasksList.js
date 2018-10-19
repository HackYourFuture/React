import React, { Component } from 'react';

import Tasks from './Tasks';

class TasksList extends Component {

    task = Tasks.map((task, i) => (
        <li key={i}>
            {"Task: " + task.description + " DeadLine: " + task.deadLine}
        </li>
    ));

    render() {
        return <ul>{this.task}</ul>;
    }

}

export default TasksList;