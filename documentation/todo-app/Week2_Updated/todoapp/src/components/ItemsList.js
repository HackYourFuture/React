import React, { Component } from 'react';
import '../App.css';
import TodoJsonList from '../TodoJsonList';
// import { addTodo } from './InputForm';


class ItemsList extends Component {

    state = {
        TodoJsonList
    }

    deleteTodo = (index) => {
        this.setState((prevState) => {
            let lastList = prevState.TodoJsonList;

            lastList.splice(index, 1);
            return {
                TodoJsonList: lastList
            }
        })
    }

    checkItem = (todo, index, event) => {
        this.setState((prevState) => {
            let lastList = prevState.TodoJsonList;
            todo.done = !todo.done;

            lastList.splice(index, 1, todo);

            return {
                TodoJsonList: lastList
            }

        })
    }


    render() {
        return (
            <div className='list-format'>
                <div>
                    {this.state.TodoJsonList.map((todo, index) => {
                        return (
                            <div key={index + 1} className='list-format'>
                                <p>{index + 1}</p>
                                <input type='checkbox' className='checkBox' onChange={(event) => { this.checkItem(todo, index, event) }} />
                                <p className={'todo-desc' + (todo.done ? ' completed' : '')}><strong>Description: </strong>{todo.description}.</p>
                                <p className={(todo.done ? ' completed' : '')}><strong>Deadline: </strong>{todo.deadline}</p>
                                <button className='remove-item' onClick={(event) => this.deleteTodo(index)}> X </button>
                            </div>
                        );
                    })}
                </div>

            </div>
        );
    }
}

export default ItemsList;