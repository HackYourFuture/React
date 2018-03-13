import React from "react";

const defaultState = {
    description: "",
    deadline: ""
}

export default class TodoInput extends React.Component {

    state = defaultState;

    handleInputChange = (e, field) => {
        this.setState({
            [field]: e.target.value
        });
    }

    handleAddTodo = () => {
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
                <input type="text" value={description}
                    onChange={(e) => {
                        this.handleInputChange(e, "description")
                    }}
                    id="text-input" />
                
                <p>Deadline:</p>
                <input type="date" value={deadline}
                    onChange={(e) => {
                        this.handleInputChange(e, "deadline")
                    }} />

                <button onClick={this.handleAddTodo}>
                    Add
                </button>
            </section>
        );
    }
} 
