import React, { Component } from 'react';

export default class AddToDo extends Component {
    render() {
        return (<div>
            <input
                type= 'text'
                placeholder= "Please write here the description for your new todo"
                value= {this.props.newDescription}
                onChange= {this.props.handleNewToDoInputChange}
            />
            <button onClick = {this.props.handleAddToDo}>Add Todo</button>
            <button onClick = {this.props.handleAskToClear}>Clear</button>
        </div>);
    }
}