import React from 'react';
import Task from './Task';

const TaskList = props => {
    return ( <ul className = "task-list" > {
            props.tasks.map(task =>
                <Task key = {
                    task.id
                }
                id = {
                    task.id
                }
                name = {
                    task.name
                }
                completed = {
                    task.completed
                }
                toggleComplete = {
                    props.toggleComplete.bind(null, task)
                }
                deleteTask = {
                    props.deleteTask
                }
                />
            )
        } </ul>
    );
};

export default TaskList;
