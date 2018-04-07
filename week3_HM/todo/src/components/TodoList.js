import React, { Component } from 'react'
import input from './buttons'
import InsertTasks from './insertTasks'
//import DatePicker from 'react-datepicker';
//import moment from 'moment';

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
    handleAddingNewTask = (text, date) => {
        console.log(text, date)
        const ids = this.state.mineTasks.map(task => task.id)
        const newId = Math.max(...ids) + 1
        const newTask = {
            "id": newId,
            "description": text,
            "deadline": date,
            "done": false
        }
        this.setState({
            mineTasks: [
                ...this.state.mineTasks,
                newTask]
        })
    }
    handleDeleteTask = (index) => {
        console.log("deleting")
        const mineTasks = this.state.mineTasks
        const newMIneTasks = mineTasks.splice(index  , 1)
        this.setState({
        newMIneTasks
    })
    }
    render() {
        const myTasks = this.state.mineTasks.map((task, index) => {
            if (task.done === true) {
                return (
                    <li key={task.id}
                        className="unDoneTask"
                        style={{ "textDecoration": "line-through" }}>
                        <input type="checkbox"
                            onChange={() => this.handleChecked(index)}
                            defaultChecked />
                        The {task.id} task is to {task.description} on {task.deadline}
                        <input type="button" value="Remove"
                            onClick={() => this.handleDeleteTask(index)} />
                    </li>
                )
            } else {
                return (
                    <li key={task.id} >
                        <input type="checkbox"
                            onChange={() => this.handleChecked(index)} />
                        The {task.id} task is to {task.description} on {task.deadline}
                        <input type="button"value="Remove"
                            onClick={() => this.handleDeleteTask(index)} />
                    </li>
                )
            }
        })
        return (
            <ul>
                <InsertTasks handleAddingNewTask={this.handleAddingNewTask}/>
                <h2>Todo list</h2>
               {myTasks}                
            </ul>
        )
    }
}
