import React, { Component } from 'react';

export default class Input extends Component {
    state = {
        input: ''
    }

    handleInput = event => {
        this.setState({ input: event.target.value })
    }

    render() {
        const{
            handelNewTask
        } = this.props
        return (
            <div>
                <h3>Add new task to your list.</h3>
                <input onChange={this.handleInput} value={this.state.input}></input>
                <button onClick={()=> handelNewTask(this.state.input)}>Save</button>
            </div>
        )
    }
}