import React, { Component } from "react";
import '../App.css';

import Task from './Task';
import Checkbox from './Checkbox';

class List extends Component {
    render() {
        return (
            <div className='List'>
                <ul>
                    {this.props.todos.map((todo, id) => (
                        <div className={todo.done ? 'checked' : ''} key={id} >
                            <Checkbox
                                id={todo.id}
                                checkbox={todo.done}
                                handleCheck={this.props.handleCheck}
                            />

                            <Task
                                id={id}
                                description={todo.description}
                                deadline={todo.deadline}
                                todo={todo}
                                handleRemove={this.props.handleRemove}
                            />
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;