import React, { Component } from 'react';

export default class DeleteButton extends Component {
    handelDisabledButton = (selected) => {
        if (selected === false) {
            return true
        }else return false
    }
    render() {
        const {
            id,
            selected,
            handelDeleteTask
        } = this.props

        
        return (
            <div>
                <button className='TodoFunctionality-list-items-buttons' disabled={this.handelDisabledButton(selected)} onClick={() => handelDeleteTask(id, selected)}>Delete</button>
            </div>

        )
    }
}