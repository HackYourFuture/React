import React, { Component } from 'react';

const todos = [
    { description: 'Get out of bed', deadline: 'Wed Sep 13 2017' },
    { description: 'Brush teeth', deadline: 'Thu Sep 14 2017' },
    { description: 'Eat breakfast', deadline: 'Fri Sep 15 201' },
];
const todoList = todos.map((item, i) => {
    return (
        <li className="todoList" key={i}>
            {item.description}
            <span>, {item.deadline}</span>
        </li>
    );

});

class Todos extends Component {
    render() {
        return (
            <div>
                <ul className="todosItim">
                    {todoList}
                </ul>
            </div>
        );
    }
}

export default Todos;
