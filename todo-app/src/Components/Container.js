import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import DisplayDetails from './DisplayDetails'
import CreateNewTask from './CreateNewTask'

import '../App.css';

@inject('data')
@observer
export default class Container extends Component {

    render() {

        const {
            todoList,
            selected,
        } = this.props.data

        return (

            <div className="Container">

                <div className="Task-Selector">
                    <h3>Select your task:</h3>


                    <ul className="TodoList">
                        {todoList.map((task) => {
                            return (
                                <li key={task.id} className={task.timeout === true ? "toLate-list" : "inProgress-list"}>
                                    <div >
                                        <input type="checkbox" onChange={() => selected(task.id)} defaultChecked={task.selected} />
                                        {task.description}
                                        <div>
                                            Deadline: {task.deadline}
                                        </div>

                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <div className="TodoFunctionality">
                    <ul>
                        <DisplayDetails />
                    </ul>
                </div>

                <div className="Input">
                    <CreateNewTask />
                </div>

            </div>
        )
    }
}