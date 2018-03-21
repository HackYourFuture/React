import React from "react";

const defaultState = {
    description: "",
    deadline: ""
}

export default class AddTodo extends React.Component {

    state = defaultState;

    changeInput = (e, field) => {
        this.setState({
            [field]: e.target.value
        });
    }

    render() {
        const { description, deadline } = this.state;
        const { addTodo, nextId } = this.props.todoItems;
        return (
            <section className="add-form">
                <input type="text"
                    value={description}
                    placeholder="enter new todo . . ."
                    onChange={(e) => this.changeInput(e, "description")}
                    id="text-input"
                />
                <input type="date"
                    value={deadline}
                    onChange={(e) => this.changeInput(e, "deadline")}
                />
                <button onClick={() => {
                    addTodo(nextId, description, deadline)
                    this.setState(defaultState)
                }}>
                    Add
                </button>
            </section>
        );
    }
}
