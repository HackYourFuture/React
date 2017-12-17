
import React from 'react';


export default class TodoItem extends React.Component {
    render (){
        const {description, deadline, done } = this.props.data;
        return (
            <li className="todo-item">
                <div>
                    <span>{deadline}</span>
                    <input type="checkbox" onClick={() => this.props.handleIsItDone(this.props.data)}/>
                </div>
                {done ? <p className="done">{description}</p> : <p className="not-done">{description}</p>}
            </li>
        )
    }
} 