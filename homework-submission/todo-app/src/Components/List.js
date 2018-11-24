import React, { Component } from "react";
import '../App.css';
import Checkbox from './Checkbox';
import Task from './Task';

class List extends Component {
    render() {
        const { todos, handleCheck } = this.props;
        return (
            <div className='List'>
                <ul>
                    {todos.map((todo) => (
                        <li className={todo.done ? 'checked' : ''} key={todo._id}>
                            <Checkbox
                                id={todo._id}
                                done={todo.done}
                                handleCheck={handleCheck}
                            />
                            <Task
                                todo={todo}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;