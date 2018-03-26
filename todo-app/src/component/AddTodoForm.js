import React from 'react';
import { observer, inject } from 'mobx-react'

@inject('TodoStore')
@observer
export default class AddTodoForm extends React.Component {

    render() {
        const {
            TodoStore
        } = this.props;
        return (
            <form onSubmit={TodoStore.handleSubmit}>
                <input
                    type="text" placeholder="Add new todo item"
                    value={TodoStore.newDescription}
                    onChange={TodoStore.handleDescriptionChange} />
                <input
                    type="date"
                    value={TodoStore.newDeadline}
                    onChange={TodoStore.handleDateChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

