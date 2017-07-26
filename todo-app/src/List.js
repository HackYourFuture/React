import React, { Component } from 'react';
import NormalListItem from './NormalListItem.js';
import EditListItem from './EditListItem.js';
import RemoveListItem from './RemoveListItem.js';

export default class List extends Component {
    handleListItem = (toDoItem, toDoIndex) => {
        if (toDoItem.toDoStatus === 'normal') {
            return <NormalListItem
                key = {toDoIndex}
                index = {toDoIndex}
                description = {toDoItem.description}
                done = {toDoItem.done}
                handleDone = {(index, checked) =>
                    this.props.handleDone(index, checked)}
                handleAskToEdit = {(index) =>
                    this.props.handleAskToEdit(index)}
                handleAskToRemove = {(index) =>
                    this.props.handleAskToRemove(index)}
            />;
        }
        else if (toDoItem.toDoStatus === 'edit') {
            return <EditListItem
                key = {toDoIndex}
                index = {toDoIndex}
                description = {toDoItem.description}
                handleUpdateDescription = {(index, description) =>
                    this.props.handleUpdateDescription(index, description)}
                handleChangeToNormalItem = {(index) =>
                    this.props.handleChangeToNormalItem(index)}
            />;
        }
        else if (toDoItem.toDoStatus === 'remove') {
            return <RemoveListItem
                key = {toDoIndex}
                index = {toDoIndex}
                handleRemoveToDo = {(index) =>
                    this.props.handleRemoveToDo(index)}
                handleChangeToNormalItem = {(index) =>
                    this.props.handleChangeToNormalItem(index)}
            />;
        }
    }
    render() {
        return (<ol>
            {this.props.toDos.map((toDoItem, toDoIndex) => {
                return this.handleListItem(toDoItem, toDoIndex);
            })}
        </ol>);
    }
}