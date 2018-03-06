import React from "react";
import PropTypes from "prop-types";

export default class ListItems extends React.Component {

    render() {
        const { todos } = this.props;
        
        return (
            <ul>
                {todos.map(todo => {
                    return <li key={todo.id}>
                        {todo.task}, {todo.deadline}
                    </li>
                })}
            </ul>
        );
    }
}


ListItems.propTypes = {
    todos: PropTypes.array.isRequired
};
