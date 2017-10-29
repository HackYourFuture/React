import React from 'react'
import Task from './task.js'
import TaskDate from './TaskDate.js'
import State from './state.js'
import Picture from './Picture.js'
import './todo.css'
import todos from './todos.js'

export default class Todo extends React.Component{
    render(){
        return (
        <div calssName='todo'>
            <div calssName='todo--info'>
                <Task task={this.props.task} />
            <div>
                <State status={this.props.status} /></div>
            </div>
            </div>

        )
    }
}