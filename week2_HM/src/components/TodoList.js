import React, { Component } from 'react'

const data = require('../todo.json')

export default class TodoList extends Component{
    state = {
     mineTasks: data
    }
    handleChecked = (index) => {
        const mineTasks = this.state.mineTasks
        mineTasks[index].done = !mineTasks[index].done
        this.setState({
            mineTasks
       })
    }

    render() {
        const myTasks = data.map((task,index) => {
            if (task.done === true) {
                return (
                    <li className="list-group-item list-group-item-primary" key={task.id} className="unDoneTask" style={{ "textDecoration": "line-through" }}>
                        <input type="checkbox" onChange={() => this.handleChecked(index)} defaultChecked />
                        The {task.id} task is to {task.description} on {task.deadline}</li>
                )
            } else {
                return (
                    <li className="list-group-item list-group-item-primary" key={task.id} ><input type="checkbox" onChange={() => this.handleChecked(index)} />
                        The {task.id} task is to {task.description} on {task.deadline}</li>  
                )
            }
        })
        return (
            <ul className="list-group">
                <h2 className="list-group-item list-group-item-action list-group-item-danger" >Todo list</h2>
               {myTasks}                
            </ul>
        )
    }
}
