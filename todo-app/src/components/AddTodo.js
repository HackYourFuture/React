import React from "react";
import { inject, observer } from "mobx-react";


@inject("todoItems")
@observer    
export default class AddTodo extends React.Component {

    render() {
        const {
            nextId,
            addTodo,
            addFormInputs,
            changeAddFormInput,
        } = this.props.todoItems;

        const { description, deadline } = addFormInputs;
        
        return (
            <section className="add-form">
                <input type="text"
                    value={description}
                    placeholder=" enter new todo . . ."
                    onChange={(e) => {
                        changeAddFormInput(e.target.value, "description")
                    }}
                    id="text-input"
                />
                <input type="date"
                    value={deadline}
                    onChange={(e) => {
                        changeAddFormInput(e.target.value, "deadline")
                    }}
                />
                <button onClick={() => {
                    addTodo(nextId, description, deadline)
                }}>
                    Add
                </button>
            </section>
        );
    }
}
