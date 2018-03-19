import React from "react";
import { observer, inject } from "mobx-react";

@inject("todos")
@observer    
export default class UpdateTodo extends React.Component {

    state = {
        description: this.props.todo.description,
        deadline: this.props.todo.deadline
    };

    changeInput = (e, field) => {
        this.setState({
            [field]: e.target.value
        });
    }

    saveUpdate = () => {
        const { id } = this.props.todo;
        const { description, deadline } = this.state;
        const { saveUpdate } = this.props.todoItems;

        if (description && deadline) {
            saveUpdate(id, description, deadline);
        }
        this.props.toggleEdit();
    }

    render() {
        const { description, deadline } = this.state;
        return (
            <div>
                <input type="text"
                    value={description}
                    className="update-input"
                    onChange={(e) => this.changeInput(e, "description")}
                />
                <input type="date"
                    value={deadline}
                    className="update-input"
                    onChange={(e) => this.changeInput(e, "deadline")}
                />
                <button className="save-btn"
                    onClick={this.saveUpdate}>
                    Save
                </button>
                <button className="cancel-btn"
                    onClick={this.props.toggleEdit}>
                    Cancel
                </button>
            </div>
        );
    }
}

export default UpdateTodo;