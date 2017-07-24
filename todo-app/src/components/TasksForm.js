import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import TaskItem from './TaskItem'

export default class TasksFrom extends Component {
    render() {
        const todos = this.props.todos
        return (
            <div>
                {todos.map((task,index) => {
                    return <TaskItem 
                        key={index}
                        task={task}
                        index={index}
                        handleSubmit={(description) => {
                            return this.props.handleSubmit(description,task.id)}
                        }
                        handleDelete={this.props.handleDelete}
                    />
                })}
                
            </div>
        );
    }

}



//export default TasksFrom;
