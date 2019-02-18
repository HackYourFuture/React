import React, { Component } from 'react';

class ApplicationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    generateId = () => '_' + Math.random().toString(36).substr(2, 9);

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addStudent({
            id: this.generateId(),
            firstName: this.state.firstName,
            lastName: this.state.lastName
        });
    };

    updateFirstName = (e) => {
        const { value } = e.target;
        this.setState({ firstName: value });
    }

    updateLastName = (e) => {
        const { value } = e.target;
        this.setState({ lastName: value });
    }
    
    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <label>
                    First name:
                    <input type="text" onChange={this.updateFirstName} />
                </label>
                <label>
                    Last name:
                    <input type="text" onChange={this.updateLastName} />
                </label>
                <input type="submit" />
            </form>
        )
    }
}

export default ApplicationForm;