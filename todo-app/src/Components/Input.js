import React, { Component } from 'react';
import '../App.css';

export default class Input extends Component {
    state = {
        description: '',
        date:''
    }

    handleDescription = event => {
        this.setState({ description: event.target.value })
    }

    handleDate = event => {
        this.setState({ date: event.target.value })
        console.log(this.state.date)
    }

    render() {
        const{
            handelNewTask
        } = this.props
        return (
            <div className='input-utilities'>
                <input className='input-description' onChange={this.handleDescription} placeholder="Write your description" value={this.state.description}></input>
                <input className='input-date' id="date" type="date" onChange={this.handleDate} value={this.state.date}></input>
                <button className='input-button' onClick={() => handelNewTask(this.state.description,this.state.date)}>Save</button>
            </div>
        )
    }
}