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
            id,
            handelUpdateTask
        } = this.props
        return (
            <div>
                <button className='TodoFunctionality-list-items-buttons' onClick={() =>this.setState({
                    UpdateButton: <UpdateButton id={id} handelUpdateTask={handelUpdateTask} handelDeleteUpdateTask={this.handelDeleteUpdateTask}/>
                })}>Edit</button>
                {this.state.UpdateButton}
            </div>

        )
    }
}