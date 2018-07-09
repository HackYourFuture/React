import React from 'react';
import {inject,observer} from 'mobx-react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

@inject('todoS')
@observer

export default class AddTodoItem extends React.Component {

    render() {

        return ( <div className = 'add-todo-form' >
            <input type = 'text'
            placeholder = 'task'
            value = {
                this.props.todoS.defaultValue.description || ''
            }
            onChange = {
                (e) => this.props.todoS.handleFieldChange(e, 'description')
            }
            /> <DatePicker selected = {
                this.props.todoS.defaultValue.deadline
            }
            onChange = {
                this.props.todoS.handleDateChange
            }
            /> <button onClick = {
                this.props.todoS.addTodo
            } > Add task </button>
        </div>
        )
    }
}