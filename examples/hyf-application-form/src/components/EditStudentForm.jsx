import React, { Component } from 'react';

class EditStudentForm extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.editStudent({
            id: this.props.student.id,
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
        const { student } = this.props;
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <label>
                    First name:
                    <input type="text" defaultValue={student.firstName} onChange={this.updateFirstName} />
                </label>
                <label>
                    Last name:
                    <input type="text" defaultValue={student.lastName} onChange={this.updateLastName} />
                </label>
                <input type="submit" />
            </form>
        )
    }
}

export default EditStudentForm;