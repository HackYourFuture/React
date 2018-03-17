import React, { Component } from 'react'
import Checkbox from './Checkbox' 
import DisplayDetails from './DisplayDetails'
import Input from './Input'

import '../App.css';

export default class Container extends Component {

    render() {
        const {
            todoItems,
            handelSelected,
            handelUpdateTask,
            handelDeleteTask,
            handelNewTask
        } = this.props

        return (
            <div className="Container">
                <div>
                    <div className="Task-Selector"><h3>Select your task:</h3></div>
                    <ul className="TodoList">
                        {todoItems.map((item, index) => {
                            return <li key={item.id} className="app-list">
                                <Checkbox
                                    id={item.id}    
                                    description={item.description}
                                    selected={item.selected}
                                    index={index}
                                    handelSelected={handelSelected}
                                />  
                            </li>
                        })}
                    </ul>
                    <div className="Input"><Input handelNewTask={handelNewTask} /></div>
                </div>
                <div className="TodoFunctionality">
                    <ul>
                        {todoItems.map((item, index) => {
                            return <li key={item.id} className="TodoFunctionality-list">
                                <DisplayDetails
                                    key={item.id}    
                                    id={item.id}
                                    description={item.description}
                                    deadline={item.deadline}
                                    selected={item.selected}
                                    index={index}
                                    handelUpdateTask={handelUpdateTask}
                                    handelDeleteTask={handelDeleteTask}
                                    
                                />
                            </li>
                        })}
                    </ul>
                </div>

            </div>

        )
    }
}