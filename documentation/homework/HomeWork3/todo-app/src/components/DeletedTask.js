import React from 'react';

const DeletedTask = props => {
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
            props.undoDelete.bind(null, props.id)
        } > undo </i> <i className = "material-icons"
        onClick = {
            props.deleteForever.bind(null, props.id)
        } > delete_forever </i> </div> </li>
    );
};

export default DeletedTask;