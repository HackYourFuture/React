import React from "react";
import { inject, observer } from "mobx-react";


@inject("todoItems")
@observer    
export default class UpdateTodo extends React.Component {

    render() {
        const { todo, todoItems } = this.props;
        const { id, description, deadline } = todo;
        const {
            changeEditInput,
            cancelEdit,
            saveUpdate
        } = todoItems;

        return (
            <div>
                <input type="text"
                    value={description}
                    className="update-input"
                    onChange={(e) => {
                        changeEditInput(e.target.value, id, "description")
                    }}
                />
                <input type="date"
                    value={deadline}
                    className="update-input"
                    onChange={(e) => {
                        changeEditInput(e.target.value, id, "deadline")
                    }}
                />
                <button className="save-btn"
                    onClick={() => saveUpdate(id, description, deadline)}>
                    Save
                </button>
                <button className="cancel-btn"
                    onClick={cancelEdit}>
                    Cancel
                </button>
            </div>
        );
    }
}
