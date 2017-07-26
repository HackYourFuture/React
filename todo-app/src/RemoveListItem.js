import React, { Component } from 'react';

export default class RemoveListItem extends Component {
    render() {
        return (
            <li>
                <span>Are you sure that you want to permanently remove the current todo?</span>
                <button onClick = {() =>
                    this.props.handleRemoveToDo(this.props.index)}
                >
                    Remove
                </button>
                <button onClick = {() =>
                    this.props.handleChangeToNormalItem(this.props.index)}
                >
                    Cancel
                </button>
            </li>
        );
    }
}