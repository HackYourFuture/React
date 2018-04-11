import React from 'react';
import { observer, inject } from 'mobx-react'

@inject('TodoStore')
@observer
export default class AddTodoForm extends React.Component {

    render() {
       
        const {
            createTodo,
            addTodoForm,
            changeTodoFormField
        } = this.props.TodoStore;
        const {
            description,
            deadline,
        } = addTodoForm

        return (
            <div className='addTodoForm'>
                <input
                    type="text"
                    placeholder="Add new todo item"
                    value={description}
                    onChange={(e) => changeTodoFormField(e.target.value, 'description')} />
                <input
                    type="date"
                    value={deadline}
                    onChange={(e) => changeTodoFormField(e.target.value, 'deadline')} />
                <input type="submit" value="Submit" onClick={createTodo}
                />
            </div>
        );
    }
}


