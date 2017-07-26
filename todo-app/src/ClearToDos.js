import React, { Component } from 'react';

export default class ClearToDos extends Component {
    render() {
        return (<div>
            <span>Are you sure that you want to permanently clear the todo list?</span>
            <button onClick = {this.props.handleClear}>Clear</button>
            <button onClick = {this.props.handleAskToClear}>Cancel</button>
        </div>);
    }
}