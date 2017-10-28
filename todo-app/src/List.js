import ListItem from './ListItem.js';
import React, { Component } from 'react';

export default class List extends Component {
    handleListItem = (toDoItem, toDoIndex) => {
        if (toDoItem.toDoStatus === 'normal') {
            return <ListItem
                key = {toDoIndex}
                index = {toDoIndex}
                description = {toDoItem.description}
                done = {toDoItem.done}
                handleDone = {(index, checked) =>
                    this.props.handleDone(index, checked)}
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