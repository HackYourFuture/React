//jshint esnext: true

import React, { Component, Fragment } from 'react'

import './styles/todoItem.css';
import Button from './Button';
import InputField from './InputField';


export default class TodoItem extends Component {

    handleRemove = () => { 
        this.props.handleRemove(this.props.data.id);
    }

    handleToggleEdit = () => { 
        this.props.handleToggleEdit(this.props.data.id);
    }

    handleUpdate = () => {
        this.props.handleUpdate(this.props.data.id);
    }

    handleChangeItem = event => {
        this.props.handleChangeItem(event);
    }

    handleChangeDeadline = event => {
        this.props.handleChangeDeadline(event);
    }
    
    toggleEditMode = () => {
        if (!this.props.isEditing) {
            return (
                <Button buttonContent='Edit' onClick={this.handleToggleEdit}/>
            )
        } else {
            return (
                <Fragment>  {/*Remember this is not understood why!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
                    <Button buttonContent='Update' onClick={this.handleUpdate} className='updateButton'  />
                    <Button buttonContent='Cancel' onClick={this.props.handleCancelEdit} className='cancelButton' />
                </Fragment>                
            )
        }
    }

    toggleTodoForm = () => {//Bad name
        if (this.props.isEditing){
            return (
                <Fragment>
                    <InputField
                        type='text'
                        className='todoDate input'
                        value={this.props.toBeUpdatedDeadline}
                        handleChange={this.handleChangeDeadline}
                    />
                    <InputField
                        type='text'
                        className='todoText input'
                        value={this.props.toBeUpdatedItem}
                        handleChange={this.handleChangeItem}
                    />
                </Fragment>
            )
        }

        const {text, deadline, done, id } = this.props.data;        
        const inputId = `item${id}`;        
        return (
            <Fragment>
                <div className="todoDate">
                    <span>{deadline}</span>
                    <label htmlFor={inputId} className={done ? 'markDone' : 'markUndone'}></label>
                    <input className='checkDone' type="checkbox" id={inputId} onClick={() => this.props.handleToggleDone(this.props.data.id)}/>
                </div>
                <div className='todoText'>
                    <p className={done ? 'done' : 'notDone'}>{text}</p>
                </div>
            </Fragment>
        )
    }

    render (){
        return (
            <li className="todoItem">
                    {this.toggleTodoForm()}
                <div className='manageTodo'>
                    {this.toggleEditMode()}
                    <Button buttonContent='remove' onClick={this.handleRemove} />
                </div>
            </li>
        )
    }
} 