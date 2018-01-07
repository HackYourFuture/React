//jshint esnext: true

import React, { Component } from 'react'

import Button from './Button';
import InputField from './InputField';
import './styles/addTodoItem.css';

export default class AddTodoItem extends Component {

    state = {
        adding: false,
        toBeAddedItem: '',
        toBeAddedDeadline: ''
    }



    toggleAddFrom = event => {
        this.setState({ adding: !this.state.adding });

        //clearing fields for if it's a cancel
        this.setState({
            toBeAddedDeadline: '',
            toBeAddedItem: ''
        });
    }

   handleChangeTodoItem = event => {
       this.setState({ toBeAddedItem: event.target.value });
   }

   handleChangeDeadline = event => {
        this.setState({ toBeAddedDeadline: event.target.value })
   }

   handleSubmit = event => {
       event.preventDefault();
   }


   handleAddTodo = () => {
    const { toBeAddedItem, toBeAddedDeadline } = this.state;
    this.props.handleAddTodo(toBeAddedItem, toBeAddedDeadline);
    this.setState({
        toBeAddedDeadline: '',
        toBeAddedItem: ''
    });
    this.setState({ adding: false })
   }

    showForm = () => {
        if (this.state.adding) {
            return (
            <div className='addTodoForm'>
                <form onSubmit={this.handleSubmit}>
                    <div className='formInputWrapper'>
                        <InputField 
                            type='text' 
                            placeholder='Todo item' 
                            className='todoInput'
                            value={this.state.toBeAddedItem} 
                            handleChange={this.handleChangeTodoItem} 
                        />
                        <InputField 
                            type='text'
                            placeholder='Deadline' 
                            className='deadlineInput'
                            value={this.state.toBeAddedDeadline} 
                            handleChange={this.handleChangeDeadline} 
                        />
                    </div>
                    <div className='formButtonsWrapper'>
                        <Button 
                            className='addTodoButton'  
                            buttonContent='Add' 
                            onClick={this.handleAddTodo} 
                            isDisabled={this.state.toBeAddedItem.trim() === ''} />
                        <Button 
                            className='cancelAddButton'
                            buttonContent='Cancel' 
                            onClick={this.toggleAddFrom}/>
                    </div>
                </form>
            </div>
        )
        }
    }

    render() { 
        return (
            <div>
                {!this.state.adding && <button className='toggleAddForm' onClick={this.toggleAddFrom} >Add a todo item</button>}
                {this.showForm()}
            </div>
        )
    }
}
 