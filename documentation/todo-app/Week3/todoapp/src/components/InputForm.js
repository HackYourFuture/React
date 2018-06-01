import React, { Component } from 'react';
import '../App.css';
// import TodoJsonList from '../TodoJsonList';

class InputForm extends Component {


    itemInput = React.createRef();
    deadlineInput = React.createRef();


    render() {
        return (
            <form className='input-form' onSubmit={this.props.addItem}>
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