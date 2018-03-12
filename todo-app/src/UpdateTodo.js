import React from "react";

const defaultState = {
    description: "",
    deadline: ""
}

export default class UpdateTodo extends React.Component {

    state = defaultState;

    handleInputChange = (e, field) => {
        this.setState({
            [field]: e.target.value
        });
    }

    handleSaveUpdate = () => {
        const { description, deadline } = this.state;
        if (description && deadline) {
            this.props.saveUpdate(description, deadline);
            this.setState(defaultState);
        }  
    }

    handleCancelUpdate = () => {
        this.props.cancelUpdate();
        this.setState(defaultState);
    }

    render() {
        const {  description, deadline } = this.state;
        return (
            <div>
                <input type="text" value={description}
                    className="update-input"    
                    onChange={(e) => this.handleInputChange(e, "description")} />
                
                <input type="date" value={deadline}
                    className="update-input"    
                    onChange={(e) => this.handleInputChange(e, "deadline")} />
                
                <button onClick={this.handleSaveUpdate} className="save-btn">
                    Save
                </button>
                <button onClick={this.handleCancelUpdate} className="cancel-btn">
                    Cancel
                </button>
            </div>
        );
    }
}
