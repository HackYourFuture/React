import React, { Component } from 'react';
import UpdateButton from './UpdateButton'
export default class EditTask extends Component {
    state = {
        UpdateButton:''
    }

    handelDeleteUpdateTask = () => {
        this.setState({
            UpdateButton:''
        })
    }
    render() {
        const {
            index,
            handelUpdateTask
        } = this.props
        return (
            <div>
                <button className='TodoFunctionality-list-items-buttons' onClick={() =>this.setState({
                    UpdateButton: <UpdateButton index={index} handelUpdateTask={handelUpdateTask} handelDeleteUpdateTask={this.handelDeleteUpdateTask}/>
                })}>Edit</button>
                {this.state.UpdateButton}
            </div>

        )
    }
}