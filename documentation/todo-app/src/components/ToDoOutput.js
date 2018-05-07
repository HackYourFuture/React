
import React, { Component } from 'react';

export default class ToDoOutput extends Component {

    render() {
        const { todo, deadline } = this.props;
        return (
            <div className="ToDoOutput">
                <span><strong>{todo}</strong>{deadline}</span>
            </div>
        );
    }
};
