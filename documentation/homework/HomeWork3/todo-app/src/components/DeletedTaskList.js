import React from 'react';
import DeletedTask from './DeletedTask';

const DeletedTaskList = props => {
    return ( <ul className = "task-list" > {
            props.tasks.map(task =>
                <DeletedTask key = {
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
                undoDelete = {
                    props.undoDelete
                }
                deleteForever = {
                    props.deleteForever
                }
                />
            )
        } </ul>
    );
};

export default DeletedTaskList;