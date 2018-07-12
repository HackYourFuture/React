import React from "react";
import { observer, inject } from "mobx-react";

@inject("todoListStore")
@observer
class Form extends React.Component {
    render() {
        const { onSubmitForm } = this.props.todoListStore;

        return (
            <form onSubmit={onSubmitForm}>
                <input
                    type="text"
                    name="description"
                    placeholder="write the description"
                />
                <input type="text" name="deadline" placeholder="Deadline" />
                <input style={{ fontSize: "12px" }} type="submit" name="Submit" />
            </form>
        );
    }
}

export default Form;