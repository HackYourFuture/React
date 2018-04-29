import React from 'react';

export default class TasksList extends React.Component {
    constructor() {
        super();
    }

    remove(e) {
        const task = e.target.parentNode.querySelector('span').textContent;
        console.log(task);

        this.props.removeTask(task);
    }

    render() {
        if (this.props.tasks.length === 0) {
            return (
                <p>No tasks</p>
            )
        }

        return (
            <ul>
                {
                    this.props.tasks.map((elem, index) => (
                        <li key={index}>
                            <span>{elem}</span>
                            <button onClick={this.remove}>X</button>
                        </li>
                    ))
                }
            </ul>
        )
    }
}