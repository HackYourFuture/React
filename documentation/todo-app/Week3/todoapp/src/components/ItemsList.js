import React, { Component } from 'react';
// import '../App.css';
// import TodoJsonList from '../TodoJsonList';
// import { addTodo } from './InputForm';


class ItemsList extends Component {

    render() {
        return (
            <div className='list-format'>
                {this.state.TodoJsonList.map((todo, index) => {
                    return (
                        <div key={index + 1} className='list-format'>
                            <p>{index + 1}</p>
                            <input type='checkbox' className='checkBox' onChange={(event) => { this.props.checkItem(todo, index, event) }} />
                            <p className={'todo-desc' + (todo.done ? ' completed' : '')}><strong>Description: </strong>{todo.description}.</p>
                            <p className={(todo.done ? ' completed' : '')}><strong>Deadline: </strong>{todo.deadline}</p>
                            <button className='remove-item' onClick={(event) => this.props.deleteItem(index)}> X </button>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ItemsList;