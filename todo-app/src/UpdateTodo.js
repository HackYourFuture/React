import React from "react";

export default class UpdateTodo extends React.Component {

    state = {
        description: this.props.description,
        deadline: this.props.deadline
    };

    changeInput = (e, field) => {
        this.setState({
            [field]: e.target.value
        });
    }

    saveUpdate = () => {
        const { description, deadline } = this.state;
        const { saveUpdate } = this.props;
        if (description && deadline) {
            saveUpdate(description, deadline);
        }  
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
                    onClick={this.props.cancelUpdate}>
                    Cancel
                </button>
            </div>
        );
    }
}
