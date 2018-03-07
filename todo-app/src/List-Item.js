import React from "react";
import PropTypes from "prop-types";

export default class ListItem extends React.Component {

    state = {
        done: this.props.todoItem.done
    }

    handleCheck = (e) => {
        this.setState({ done: e.target.checked });
    }

    render() {
        const { description, deadline } = this.props.todoItem;
        const crossedOut = this.state.done ? "crossedOut" : null;

        return (
            <section>
                <input type="checkbox" checked={this.state.done} onChange={this.handleCheck} />
                <label className={crossedOut}>
                    {description}, {new Date(deadline).toDateString()}
                </label> 
            </section>
        );
    }
}


ListItem.propTypes = {
    todoItem: PropTypes.object.isRequired
};

