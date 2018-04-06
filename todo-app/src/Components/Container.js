import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import CreateNewTask from './CreateNewTask'

import '../App.css';

@inject('data')
@observer
export default class Container extends Component {

    componentDidMount = () => {
        this.props.data.getAPI()
    }

    render() {

        const {
            todoList,
            setDone,
            startEditing,
            selectedToEdit,
            changeEditedTask,
            editedTask,
            updateTask,
            cancelEditing,
            deleteTask
        } = this.props.data

        return (

            <div className="Container">

                <div className="Task-Selector">
                    
                    <h3>Select your task:</h3>

                    <ul className="TodoList">
                        {todoList.map((task) => {
                            return (
                                <li key={task._id} >
                                    <div >
                                        <input type="checkbox" onChange={() => setDone(task._id)} defaultChecked={task.done} />
                                        {task.description}
                                        <div>
                                            {task.done === false ?
                                                <div>
                                                    {selectedToEdit === task._id ?
                                                        <div>
                                                            <input type="text" onChange={e => changeEditedTask(e)} value={editedTask} />
                                                            <button onClick={() => updateTask(task._id, editedTask)}>Save</button>
                                                            <button onClick={() => cancelEditing()}>Cancel</button>
                                                        </div>
                                                        :
                                                        <button className='TodoFunctionality-list-items-buttons' onClick={() => startEditing(task._id)}>Edit</button>
                                                    }
                                                </div>
                                                :
                                                <div>
                                                    <button className='TodoFunctionality-list-items-buttons' onClick={() => deleteTask(task._id, task.selected)}>Delete</button>
                                                </div>    
                                            }
                                            
                                        </div>

                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="Input">
                        <CreateNewTask />
                    </div>

                </div>

            </div>
        )
    }
}