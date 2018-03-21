import React from "react";


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

    render() {
        const { id } = this.props.todo;
        const { description, deadline } = this.state;
        const { toggleEdit, saveUpdate } = this.props.todoItems;
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
                    onClick={() => saveUpdate(id, description, deadline)}>
                    Save
                </button>
                <button className="cancel-btn"
                    onClick={() => toggleEdit(id)}>
                    Cancel
                </button>
            </div>
        );
    }
}
