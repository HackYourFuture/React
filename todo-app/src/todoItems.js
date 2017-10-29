import React, { Component } from 'react';
import TodoDescription from './todoDescription'
import TodoState from './todoState'

class todo extends Component {
    render() {
        return (
            <div className='todoList' className='todoState' className='Description'>
                <ul>
                    <li> <TodoDescription todoDescription={this.props.todoDescription} />
                        <TodoState done={this.props.done} />
                    </li>
                </ul>
                <br />
            </div>
        )
    }
}
export default todo
