import React, { Component } from 'react'
import '../App.css';
import { observer, inject } from 'mobx-react'

@inject('data')
@observer
export default class CreateNewTask extends Component {

    render() {

        const {
            newTask,
            addNewTask,
            setNewTask,
        } = this.props.data

        return (
            <div className='input-utilities'>
                <input className='input-description' onChange={e => setNewTask(e, "description")} placeholder="Write your description" value={newTask.description}></input>
                <input className='input-date' id="date" type="date" onChange={e => setNewTask(e, "date")} value={newTask.date}></input>
                <button className='input-button' onClick={() => addNewTask(newTask.description, newTask.date)}>Save</button>
            </div>
        )
    }
}