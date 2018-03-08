import React from "react";
import PropTypes from "prop-types";


export default class ListItem extends React.Component {

    state = {
        done: this.props.todoItem.done
    }

    handleCheck = (e) => {
        this.setState({ done: e.target.checked });
    }

    removeTodo = () => {
        const todoId = this.props.todoItem.id;
        this.props.removeTodo(todoId);
    }

    render() {
        const { description, deadline } = this.props.todoItem;
        const crossedOut = this.state.done ? "crossedOut" : null;

        return (
            <div>
                <input type="checkbox"
                    checked={this.state.done}
                    onChange={this.handleCheck}
                    className="checkbox" />
                
                <label className={crossedOut}>
                    {description}, {new Date(deadline).toDateString()}
                </label> 

                <button onClick={this.removeTodo} className="remove-btn">X</button>
            </div>
        );
    }
}


ListItem.propTypes = {
    todoItem: PropTypes.object.isRequired
};
