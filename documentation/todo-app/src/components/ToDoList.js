
import React, { Component } from 'react';

export default class ToDoList extends Component {

    render() {
        const { todoId, todo, deadline, handleToggleDone, todoStatus } = this.props;

        return (
            <div>
                <div onClick={() => handleToggleDone(todoId)}  >
                    {todoStatus ? '✔️  ' : '⬜  '}
                    <span style={todoStatus ? { textDecoration: 'line-through' } : {}}><strong>{todo}</strong>{deadline}</span>
                </div>


            </div>
        )
    }
};
