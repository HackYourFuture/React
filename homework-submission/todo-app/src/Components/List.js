import React, { Component } from "react";
import '../App.css';
import Task from './Task';
import Checkbox from './Checkbox';
import { observer, inject } from 'mobx-react';

@inject('TasksStore')
@observer

class List extends Component {
    render() {
        const { TasksStore } = this.props;
        return (
            <div className='List'>
                <ul>
                    {TasksStore.todos.map((todo, id) => (
                        <li className={todo.done ? 'checked' : ''} key={id} >
                            <Checkbox
                                id={todo.id}
                                checkbox={todo.done}
                                handleCheck={TasksStore.handleCheck}
                            />

                            <Task
                                id={id}
                                todo={todo}
                                handleRemove={TasksStore.handleRemove}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;