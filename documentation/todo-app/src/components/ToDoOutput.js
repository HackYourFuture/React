
import React, { Component } from 'react';

export default class ToDoOutput extends Component {

    render() {
        const { id, todo, deadline, handleToggleDone } = this.props;
        const done = this.props.done ? '✔️' : '⬜';

        return (
            <div className="ToDoOutput">
                <span onClick={() => this.props.handleToggleDone(id)}>{done}</span>
                <span><strong>{todo}</strong>{deadline}</span>
            </div>
        );
    }
};
