import React, { Component } from "react";
import ClickToEdit from 'react-click-to-edit'
import { inject, observer } from 'mobx-react';

@inject('todoS')
@observer    

class TodoItems extends Component {
    render() {

        const { handleToggleCheck,
            handleRemoveTodo } = this.props.todoS
        
        const {
            description,
            deadline,
            createdAt,
            done,
            id
        } = this.props.todo
        
        return (
            <tr className='todoItems'>
                <td>
                    <abbr title='click the text for editing'>
                        <ClickToEdit
                            endEditing={(value) => alert(`new value: ${value}`)}
                        >
                            {description}
                        </ClickToEdit>
                    </abbr>
                </td>
                <td>
                    <abbr title='click the date for editing'>
                    <ClickToEdit
                        endEditing={(value) => alert(`new value: ${value}`)}
                    >
                        {deadline}
                        </ClickToEdit>
                    </abbr>    
                </td>
                <td>{createdAt}</td>
                <td
                    className='done-icon'
                    onClick={() => handleToggleCheck(id)}
                >
                    {done ? <span>✔️</span> : <span>⬜</span>}
                </td>
                <td
                    className='remove-icon'
                    onClick={() =>
                        handleRemoveTodo(id)}
                >
                    <span>✖️</span>
                </td>
            </tr>
        )
    }
}

export default TodoItems;
