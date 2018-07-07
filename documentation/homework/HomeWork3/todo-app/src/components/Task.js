import React from 'react';

const Task = props => {
    return ( <li className = "task mdc-elevation--z1"
        key = {
            props.id
        } >
        <p className = {
            props.completed ? "completed" : null
        } > {
            props.name
        } </p> <div className = "icon-group" >
        <i className = "material-icons"
        onClick = {
            props.toggleComplete
        } > done </i> <i className = "material-icons"
        onClick = {
            props.deleteTask.bind(null, props.id)
        } > delete </i> </div> </li>
    );
};

export default Task;