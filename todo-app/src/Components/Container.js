import React, {Component} from 'react';

export default class Container extends Component {

render() {

    const todos = this.props.todoItems.map((item) => {
        return <li> {`${item.id}- you have to: ${item.whatToDo} at: ${item.date}`} </li>})
    return (
        <div>
            <ul>
            {todos}
            </ul> 
        </div>    
        )
    }
}