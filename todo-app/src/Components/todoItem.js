//jshint esnext: true

import React from 'react';
import './styles/todoItem.css';


export default class TodoItem extends React.Component {
    render (){
        const {description, deadline, done, id } = this.props.data;
        return (
            <li className="todoItem">
                <div>
                    <span>{deadline}</span>
                    <label for={`item${id}`} className={done ? 'markDone' : 'markUndone'}></label>
                    <input type="checkbox" id={`item${id}`} onClick={() => this.props.handleIsItDone(this.props.data)}/>
                </div>
                <p className={done ? 'done' : 'notDone'}>{description}</p>
            </li>
        )
    }
} 