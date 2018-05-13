
import React, { Component } from 'react';
import ToDoOutput from './ToDoOutput';

export default class ToDoList extends Component {

    render() {
        const title = 'Todo List of Homework2';
        const { listTodo, allTodo, handleToggleDone } = this.props;
        return (
            <div>
                <h1>{title}</h1>
                {listTodo.length === 0 ? <p>No items... </p> :
                    listTodo.map((element, indexOfEach) => (
                        <ToDoOutput
                            todo={element.description}
                            deadline={element.deadline}
                            key={element.id}
                            handleToggleDone={handleToggleDone}
                        />
                    ))
                }

            </div>
        )
    }
};
