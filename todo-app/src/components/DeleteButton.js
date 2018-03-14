import React, { Component } from "react";

export default class DeleteButtom extends Component {
    onDeletingAll = () => {
        this.props.onDeletingAll()
    }
    render() {
        return (
            <div className="delete-container">
                <button className="delete-all-button" onClick={ this.onDeletingAll }>
                    Delete all completed todos
                </button>
            </div>
        )
    }
}