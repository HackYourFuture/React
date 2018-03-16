import React, { Component } from 'react';

export default class UpdateButton extends Component {
    state = {
    update:''
    }

    handleUpdate = event => {
        this.setState({ update: event.target.value })
    }

    render() {
        const {
            index,
            handelUpdateTask,
            handelDeleteUpdateTask
        } = this.props
        return (
            <div>
                <input type="text" onChange={this.handleUpdate} value={this.state.update}/>
                <button onClick={() => handelUpdateTask(index, this.state.update)}>Save</button>
                <a href="" onClick={()=>handelDeleteUpdateTask}>Cancel</a>
            </div>

        )
    }
}