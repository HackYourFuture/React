import React, { Component } from "react";
import Todo from './Todo';

class Todolist extends Component {

    render() {

        const todos = [
            {
                id: 1,
                description: 'Get out of bed',
                deadline: 'Wed Sep 13 2017'
            },
            {
                id: 2,
                description: 'Brush teeth',
                deadline: 'Thu Sep 14 2017'
            },
            {
                id: 3,
                description: 'Eat breakfast',
                deadline: 'Fri Sep 15 2017'
            }
        ];

        return (
            <div className='all-todos' >
                <ul className='all-todos'>

                    {todos.map((todo) => {
                        return <Todo todo={todo} key={todo.id} />
                    })}

                </ul>
            </div>
        );
    }
}

export default Todolist;