import React from "react";
import { inject, observer } from "mobx-react";


@inject("todosStore")
@observer    
export default class AddTodo extends React.Component {

    render() {
        const {
            addFormInputs,
            changeAddFormInput,
            addTodo,
        } = this.props.todosStore;

        const { description, deadline } = addFormInputs;
        
        return (
            <section className="add-form">
                <input type="text"
                    value={description}
                    placeholder="enter new todo . . . "
                    className="add-text-input"
                    onChange={(e) => {
                        changeAddFormInput(e.target.value, "description")
                    }}
                />
                <input type="date"
                    value={deadline}
                    onChange={(e) => {
                        changeAddFormInput(e.target.value, "deadline")
                    }}
                />
                <button onClick={addTodo}>
                    Add
                </button>
            </section>
        );
    }
}
