<<<<<<< HEAD
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import moment from 'moment'

import '../App.css';

@inject('data')
@observer
export default class DisplayDetails extends Component {
    handleTime = (timeLeft) => {
        let taskDeadline = moment(timeLeft).toObject()
        return moment().to(moment([taskDeadline.years, taskDeadline.months, taskDeadline.date]))
    }
    render() {
        const {
            todoList,
            selectedToEdit,
            editedTask,
            deleteTask,
            updateTask,
            selectToEdit,
            changeEditedTask,
            setDone
        } = this.props.data

        // console.log(moment('2018-2-2').toObject())
        return (
            <div>
                {todoList.map((task) => {
                    if (task.selected === true) {
                        return (
                            <li key={task.id} className="TodoFunctionality-list">
                                
                                <div className='TodoFunctionality-list-items'>
                                    
                                    <div>
                                        <h2>#{task.id}</h2>
                                    </div>

                                    <div>
                                        <h2>{task.description}</h2>  <h4><br/>Deadline at:  {this.handleTime(task.deadline)}</h4>
                                    </div>

                                    <div>

                                        <div>
                                            {selectedToEdit === task.id ?
                                                <div>
                                                    <input type="text" onChange={e => changeEditedTask(e)} value={editedTask} />
                                                    <button onClick={() => updateTask(task.id, editedTask)}>Save</button>
                                                    <button onClick={() => selectToEdit(null)}>Cancel</button>
                                                </div> 
                                                :
                                                <button className='TodoFunctionality-list-items-buttons' onClick={() => selectToEdit(task.id)}>Edit</button>
                                            }
                                        </div>

                                        <div>
                                            <button className='TodoFunctionality-list-items-buttons' onClick={() => deleteTask(task.id, task.selected)}>Delete</button>
                                        </div>

                                        <div>
                                            {task.isDone === false ?
                                                <button className='TodoFunctionality-list-items-buttons' onClick={() => setDone(task.id)}>Done</button>
                                                :
                                                <button className='TodoFunctionality-list-items-buttons' onClick={() => setDone(task.id)}>UnDone</button>
                                            }
                                        </div>

                                    </div>

                                </div>

                            </li>
                        )
                    }
                })}
            </div>  
        )
    }
=======
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import moment from 'moment'

import '../App.css';

@inject('data')
@observer
export default class DisplayDetails extends Component {
    handleTime = (timeLeft) => {
        let taskDeadline = moment(timeLeft).toObject()
        return moment().to(moment([taskDeadline.years, taskDeadline.months, taskDeadline.date]))
    }
    render() {
        const {
            todoList,
            selectedToEdit,
            editedTask,
            deleteTask,
            updateTask,
            selectToEdit,
            changeEditedTask,
            setDone
        } = this.props.data

        // console.log(moment('2018-2-2').toObject())
        return (
            <div>
                {todoList.map((task) => {
                    if (task.selected === true) {
                        return (
                            <li key={task.id} className="TodoFunctionality-list">
                                
                                <div className='TodoFunctionality-list-items'>
                                    
                                    <div>
                                        <h2>#{task.id}</h2>
                                    </div>

                                    <div>
                                        <h2>{task.description}</h2>  <h4><br/>Deadline at:  {this.handleTime(task.deadline)}</h4>
                                    </div>

                                    <div>

                                        <div>
                                            {selectedToEdit === task.id ?
                                                <div>
                                                    <input type="text" onChange={e => changeEditedTask(e)} value={editedTask} />
                                                    <button onClick={() => updateTask(task.id, editedTask)}>Save</button>
                                                    <button onClick={() => selectToEdit(null)}>Cancel</button>
                                                </div> 
                                                :
                                                <button className='TodoFunctionality-list-items-buttons' onClick={() => selectToEdit(task.id)}>Edit</button>
                                            }
                                        </div>

                                        <div>
                                            <button className='TodoFunctionality-list-items-buttons' onClick={() => deleteTask(task.id, task.selected)}>Delete</button>
                                        </div>

                                        <div>
                                            {task.isDone === false ?
                                                <button className='TodoFunctionality-list-items-buttons' onClick={() => setDone(task.id)}>Done</button>
                                                :
                                                <button className='TodoFunctionality-list-items-buttons' onClick={() => setDone(task.id)}>UnDone</button>
                                            }
                                        </div>

                                    </div>

                                </div>

                            </li>
                        )
                    }
                })}
            </div>  
        )
    }
>>>>>>> 859297d475b9ef92c6eeab7d5cb4cba98c6cc573
}