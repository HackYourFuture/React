import React from "react";


export default class UpdateTodo extends React.Component {

    state = {
        description: this.props.description,
        deadline: ""
    };

    handleInputChange = (e, field) => {
        this.setState({
            [field]: e.target.value
        });
    }

    handleSaveUpdate = () => {
        const { description, deadline } = this.state;
        const { saveUpdate } = this.props;
        if (description && deadline) {
            saveUpdate(description, deadline);
        }  
    }

    handleCancelUpdate = () => {
        this.props.cancelUpdate();
    }

    render() {
        const { description, deadline } = this.state;
        return (
            <div>
                <input type="text" value={description}
                    className="update-input"
                    onChange={(e) => {
                        this.handleInputChange(e, "description")
                    }} />
                
                <input type="date" value={deadline}
                    className="update-input"
                    onChange={(e) => {
                        this.handleInputChange(e, "deadline")
                    }} />
                
                <button className="save-btn"
                    onClick={this.handleSaveUpdate}>
                    Save
                </button>

                <button className="cancel-btn"
                    onClick={this.handleCancelUpdate}>
                    Cancel
                </button>
            </div>
        );
    }
}
