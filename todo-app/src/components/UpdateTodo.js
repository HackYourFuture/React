import React from "react";
import { inject, observer } from "mobx-react";


@inject("todosStore")
@observer    
export default class UpdateTodo extends React.Component {

    render() { 
        const { id } = this.props;

        const {
            editInputs,
            changeEditInput,
            closeEditing,
            saveUpdate
        } = this.props.todosStore;

        const { description, deadline } = editInputs;
        const dateInputValue = deadline.slice(0, 10);

        return (
            <div>
                <input type="text"
                    value={description}
                    className="update-input"
                    onChange={(e) => changeEditInput(e.target.value, "description")}
                />
                <input type="date"
                    value={dateInputValue}
                    className="update-input"
                    onChange={(e) => changeEditInput(e.target.value, "deadline")}
                />
                <button className="save-btn"
                    onClick={() => saveUpdate(id, description, deadline)}>
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
