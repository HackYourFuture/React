import React, { Component } from 'react';

export default class EditListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptionContainer: props.description
        };
    }
    render() {
        return (
            <li>
                <input
                    type = 'text'
                    placeholder= "Please write here the new description for the current todo"
                    value= {this.state.descriptionContainer}
                    onChange = {this.handleToDoDescriptionChange}
                />
                <button onClick = {() => {
                    if (this.state.descriptionContainer !== '') {
                        this.props.handleUpdateDescription(this.props.index,
                        this.state.descriptionContainer)
                    }
                }}>
                    Save
                </button>
                <button onClick = {() =>
                    this.props.handleChangeToNormalItem(this.props.index)}
                >
                    Cancel
                </button>
            </li>
        );
    }
    handleToDoDescriptionChange = (event) => {
        this.setState({
            descriptionContainer: event.target.value
        });
    }
}