import React, { Component } from 'react';
import '../App.css';
import DatePicker from 'react-date-picker';


class Form extends Component {
    state = {
        description: '',
        deadline: new Date()
    };

    handleChange = evt => {
        this.setState({ description: evt.target.value })
    };

    handleDateChange = date => {
        this.setState({ deadline: date });

    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onAdd(this.state.description, this.state.deadline);
        this.setState({ description: '', deadline: new Date() });
    };

    render() {
        return (
            <div className="Form">
                <form onSubmit={this.handleSubmit}>
                    <input className="description"
                        onChange={this.handleChange}
                        value={this.state.description}
                        placeholder="Insert a todo"

                    />
                    <DatePicker
                        className="date_picker"
                        value={this.state.deadline}
                        onChange={this.handleDateChange}
                        minDate={new Date()}
                    />
                    <button type="submit">
                        Submit
                    </button>
                </form>

            </div>
        )
    }

}

export default Form;