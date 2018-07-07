import React from 'react'
import {inject,observer} from 'mobx-react'

@inject('todoStore')
@observer
export default class TodoItem extends React.Component {
    toggleTodo = () => this.props.todoStore.toggleTodoCheck(this.props.todo)
    render() {
        const {isComplete,text} = this.props.todo
        return ( <li>
            <input type = "checkbox"
            onChange = {
                this.toggleTodo
            }
            checked = {
                isComplete
            }
            /> <span style = {
                {
                    textDecoration: isComplete ? 'line-through' : 'none'
                }
            } >
            {
                    text
                } </span> </li>
        )
    }
}
