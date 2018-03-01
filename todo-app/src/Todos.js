import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItems extends Component {

    render() {
        const todoItems = this.props.todos;
        
        return (
            <ul>
                {todoItems.map((item, i) => {
                    return <li key={i}>
                        {item.task}, {item.deadline}
                    </li>
                })}
            </ul>    
        );
    }
}


TodoItems.propTypes = {
    todos: PropTypes.array
};
