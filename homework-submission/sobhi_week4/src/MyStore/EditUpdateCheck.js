import React from "react";


class EditUpdateCheck extends React.Component {

    state = {
        done: this.props.done,
        updating: false
    };

    checkboxHandler = () => {
        this.setState({
            done: !this.state.done
        });
    };
    toggleUpdating = () => {
        this.setState({
            updating: !this.state.updating
        });
    };

    render() {
        const { done, updating } = this.state;
        const {
            description,
            deadline,
            removeTodo,
            index,
            updateTodo,
        } = this.props;

        const updatingForm = (
            <div>
                <form
                    className="updatingForm"
                    onSubmit={e => updateTodo(e, index, this.toggleUpdating)}>
                    <input type="text" defaultValue={description} name="description" />
                    <input type="date" defaultValue={deadline} name="deadline" />
                    <button>Update</button>
                </form>
                <button onClick={this.toggleUpdating}>Cancel</button>
            </div>
        );

        const updated = (
            <div className="updated">
                <input
                    type="checkbox"
                    defaultChecked={done ? true : false}
                    onChange={e => this.checkboxHandler()} />
                {description},{deadline}.
                <button onClick={this.toggleUpdating}>Edit</button>
            </div>
        );
        const remove = (
            <div>
                <button onClick={() => removeTodo(index)}>
                    Remove
                </button>

            </div>
        );
        return (

            <li className={done ? "lineThrough" : ""}>
                {updating ? updatingForm : updated}
                {remove}
            </li>
        )
    }
}
export default EditUpdateCheck;