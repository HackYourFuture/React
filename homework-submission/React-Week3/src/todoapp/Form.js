import React, { Component } from 'react';

class Form extends Component {
    render() {
        const { addTodoItem } = this.props;
        return (
            <form onSubmit={addTodoItem}>
                <input type="text" placeholder="description: " name="description" />
                <input type="text" placeholder="deadline: " name="deadline" />
                <input type="submit" placeholder="Add " name="submit" />
            </form>
        );
    }
}
export default Form;
