import React from "react";

export default class TodoInput extends React.Component {

    state = {
        description: "",
        deadline: "",
        done: false
    }

    handleTextChange = e => {
        const description = e.target.value;
        this.setState({ description });      
    }

    handleDateChange = e => {
        const deadline = e.target.value;
        this.setState({ deadline });
    }

    addTodo = () => {
        const { description, deadline } = this.state;

        if (description && deadline) {
            this.props.addTodo(description, deadline);
            this.setState({ description: "" });
        }  
    }

    render() {
        return (
            <section id="form">
                <input type="text"
                    value={this.state.description}
                    onChange={this.handleTextChange}
                    id="text-input" />

                <input type="date" onChange={this.handleDateChange} />

                <button onClick={this.addTodo}>Add</button>
            </section>
        );
    }
} 
