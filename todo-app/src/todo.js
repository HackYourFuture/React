import React from 'react'
import Task from './task.js'
import TaskDate from './TaskDate.js'
import State from './state.js'
import Picture from './Picture.js'
import './todo.css'

export default class Todo extends React.Component{
    render(){
        return (
        <div calssName='todo'>
            <div calssName='todo--info'>
                <Picture username={this.props.username} imageType={this.props.imageType} />
                <div><Task task={this.props.task} /></div>
                <div><State state={this.props.state} /></div>
            <div>
            <TaskDate TaskDate={this.props.TaskDate} />
            </div>
            </div>

        </div>
        )
    }
}