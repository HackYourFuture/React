import React from "react";
import todo from '../todo.json'
class Todos extends React.Component {

    item = todo.map((item) => (
        <li className='todoItem'>
            <p >{item.id + ' ' + item.description}</p>
            <p>{' DeadLine: ' + item.deadline}</p>
        </li>
    ));
    render() {
        const { firstName } = this.props;
        return (
            <div>
                <h1>{firstName + "'s To-do List"} </h1>
                <ul className='todoList'>{this.item}</ul>
            </div>
        )
    }
}

export default Todos