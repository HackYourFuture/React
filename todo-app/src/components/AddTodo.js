import React from "react";
import { observer, inject } from "mobx-react";

const defaultState = {
    description: "",
    deadline: ""
}

@inject("todos")
@observer    
export default class AddTodo extends React.Component {

    state = defaultState;

    changeInput = (e, field) => {
        this.setState({
            [field]: e.target.value
        });
    }

    addTodo = () => {
        const { description, deadline } = this.state;
        const { addTodo, nextId } = this.props.todoItems;

        if (description && deadline) {
            addTodo(nextId, description, deadline);
            this.setState(defaultState);
        }
    }

    render() {
        const { description, deadline } = this.state;
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
                <button onClick={this.addTodo}>
                    Add
                </button>
            </section>
        );
    }
}

