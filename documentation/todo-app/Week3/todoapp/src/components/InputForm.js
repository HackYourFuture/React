import React, { Component } from 'react';
import '../App.css';
import TodoJsonList from '../TodoJsonList';

class InputForm extends Component {

    state = {
        TodoJsonList
    }

    itemInput = React.createRef();
    deadlineInput = React.createRef();

    addTodo = (event) => {
        event.preventDefault();
        // if (event.key === 'Enter') {
        const itemInput = this.itemInput.current.value;
        const deadlineInput = this.deadlineInput.current.value;

        if (!itemInput || !deadlineInput) {
            alert('Please fill up');
        }

        this.setState((prevState) => {
            let lastList = prevState.TodoJsonList;

            lastList.push({
                id: Date.now(),
                description: itemInput,
                deadline: deadlineInput,
                done: false
            });

            return {
                TodoJsonList: lastList
            }

        })

        this.itemInput.current.value = '';
        this.deadlineInput.current.value = '';
    }

    render() {
        return (
            <form className='input-form' onSubmit={this.addTodo}>
                <input
                    className='todo-input'
                    type='text'
                    placeholder='Add the task here, then press ENTER'
                    // onKeyUp={this.addTodo}
                    ref={this.itemInput}
                />
                <input className='deadline-input'
                    type='date'
                    placeholder='Pick your deadline'
                    ref={this.deadlineInput}
                />
                <button type='submit' className='add-button'>Add </button>
            </form>
        );
    }
}

export default InputForm;