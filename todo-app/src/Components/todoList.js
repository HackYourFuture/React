//jshint esnext: true

import React, { Component, Fragment } from 'react'

import TodoItem from './todoItem';
import './styles/todoList.css';

export default class TodoList extends Component {

    state = {
        toBeUpdatedItem: '',
        toBeUpdatedDeadline: ''
    }

    handleCancelEdit = () => {
        this.props.handleToggleEdit();        
    }

    handleToggleEdit = id => {
        const todoItem = this.props.todos.find(item => item.id === id);
        this.setState({ 
            toBeUpdatedDeadline: todoItem.deadline,
            toBeUpdatedItem: todoItem.text
        });
        this.props.handleToggleEdit(id);
    }

    handleUpdate = (id) => {
        const { toBeUpdatedItem, toBeUpdatedDeadline } = this.state;
        this.props.handleUpdate(id, toBeUpdatedItem, toBeUpdatedDeadline);
    }

    handleChangeItem = event => {
        this.setState({ toBeUpdatedItem: event.target.value })
    }

    handleChangeDeadline = event => {
        this.setState({ toBeUpdatedDeadline: event.target.value })        
    }
    
    renderAllTodos = () => {
        const todoItems = this.props.todos;
        return todoItems.map(item => {
            return (
            <Fragment key={item.id}>
                <TodoItem 
                data={item}
                handleToggleDone={this.props.handleToggleDone}
                handleRemove={this.props.handleRemove}
                isEditing={this.props.isEditing === item.id}
                handleCancelEdit={this.handleCancelEdit}
                handleToggleEdit={this.handleToggleEdit}
                handleUpdate={this.handleUpdate}
                toBeUpdatedItem={this.state.toBeUpdatedItem}
                toBeUpdatedDeadline={this.state.toBeUpdatedDeadline}
                handleChangeItem={this.handleChangeItem}
                handleChangeDeadline={this.handleChangeDeadline}
                />
            </Fragment>
        )})

    }

    render() {
        return (
            <ul className="todosContainer">
                {this.props.todos.length === 0 ? //is it empty?
                    <h1 className='emptyListHeader'>No items to show</h1>
                    :
                    this.renderAllTodos()}
            </ul>
        )
    }
}