import React, { Component } from 'react'
import input from './buttons'
import InsertTasks from './insertTasks'
import {inject, observer} from 'mobx-react'

@inject("data")
@observer
export default class TodoList extends Component{
    render() {
        console.log(this.props.data)
        const { deletingTask, checkingBox, addingNewTask} = this.props.data
        const myTasks = this.props.data.tasksData.map((task, index) => {
            if (task.done === true) {
                return (
                    <li key={task.id}
                        className="unDoneTask"
                        style={{ "textDecoration": "line-through" }}>
                        <input type="checkbox"
                            onChange={() => checkingBox(index)}
                            defaultChecked />
                {index+1}- {task.description} on {task.deadline}
                        <input type="button" value="Remove"
                            onClick={() => deletingTask(index)} />
                    </li>
                )
            } else {
                return (
                    <li key={task.id} >
                        <input type="checkbox"
                            onChange={() => checkingBox(index)} />
                        {index+1}- {task.description} on {task.deadline}
                        <input type="button"value="Remove"
                            onClick={() => deletingTask(index)} />
                    </li>
                )
            }
        })
        return (
            <ul>
                <InsertTasks addingNewTask={addingNewTask}/>
                <h2>Todo list</h2>
               {myTasks}             
            </ul>
        )
    }
}
