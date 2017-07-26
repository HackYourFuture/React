import React, { Component } from 'react';
import AddToDo from './AddToDo.js';
import ClearToDos from './ClearToDos.js';

export default class Header extends Component {
    render() {
        return (this.props.clearIsClicked ?
            <ClearToDos
                handleAskToClear = {this.props.handleAskToClear}
                handleClear = {this.props.handleClear}
            /> :
            <AddToDo
                newDescription = {this.props.newDescription}
                handleNewToDoInputChange = {(event) => this.props.handleNewToDoInputChange(event)}
                handleAddToDo = {this.props.handleAddToDo}
                handleAskToClear = {this.props.handleAskToClear}
            />);
    }
}