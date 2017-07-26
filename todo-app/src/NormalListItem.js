import React, { Component } from 'react';

export default class NormalListItem extends Component {
    render() {
        return (
            <li style = {this.props.done ?
                {backgroundColor : "green"} :
                {backgroundColor : "red"}}>
                    <span>
                        {(this.props.index + 1) + ' - ' + this.props.description}
                    </span>
                    <input
                        type = 'checkbox'
                        checked = {this.props.done}
                        onChange = {(event) => 
                            this.props.handleDone(
                                this.props.index,
                                event.target.checked
                            )
                        }
                    />
                    <span>done</span>
                    <button
                        onClick = {() =>
                            this.props.handleAskToEdit(this.props.index)}
                    >
                        Edit
                    </button>
                    <button
                        onClick = {() =>
                            this.props.handleAskToRemove(this.props.index)}
                    >
                        Remove
                    </button>
            </li>
        );
    }
}