import React from "react";
import { inject, observer } from "mobx-react";


@inject("todosStore")
@observer    
export default class UpdateTodo extends React.Component {

    render() {
        const { _id, description, deadline } = this.props.todo;
        const dateInputValue = deadline.slice(0, 10);
        const {
            changeEditInput,
            closeEditing,
            saveUpdate
        } = this.props.todosStore;

        return (
            <div>
                <input type="text"
                    value={description}
                    className="update-input"
                    onChange={(e) => {
                        changeEditInput(_id, e.target.value, "description")
                    }}
                />
                <input type="date"
                    value={dateInputValue}
                    className="update-input"
                    onChange={(e) => {
                        changeEditInput(_id, e.target.value, "deadline")
                    }}
                />
                <button className="save-btn"
                    onClick={() => saveUpdate(_id, description, deadline)}>
                    Save
                </button>
                <button className="cancel-btn"
                    onClick={closeEditing}>
                    Cancel
                </button>
            </div>
        );
    }
}
