import React from "react";

const defaultState = {
    description: "",
    deadline: ""
}

export default class TodoInput extends React.Component {

    state = defaultState;

    changeInput = (e, field) => {
        this.setState({
            [field]: e.target.value
        });
    }

    addTodo = () => {
        const { description, deadline } = this.state;
        if (description && deadline) {
            this.props.addTodo(description, deadline);
            this.setState(defaultState);
        }  
    }

    render() {
        const { description, deadline } = this.state;
        return (
            <section className="form">
                <p>Enter todo:</p>  
                <input type="text"
                    value={description}
                    onChange={(e) => this.changeInput(e, "description")}
                    id="text-input"
                />
                <p>Deadline:</p>
                <input type="date"
                    value={deadline}
                    onChange={(e) => this.changeInput(e, "deadline")}
                />
                <button onClick={this.addTodo}>
                    Add
                </button>
            </section>
        );
    }
} 
