//jshint esnext: true

import React from 'react';
import './styles/todoItem.css';


export default class TodoItem extends React.Component {
    render (){
        const {description, deadline, done, id } = this.props.data;
        const inputId = `item${id}`;
        return (
            <li className="todoItem">
                <div className="todoState">
                    <span>{deadline}</span>
                    <label htmlFor={inputId} className={done ? 'markDone' : 'markUndone'}></label>
                    <input type="checkbox" id={inputId} onClick={() => this.props.handleToggleDone(this.props.data)}/>
                </div>
                <p className={done ? 'done' : 'notDone'}>{description}</p>
            </li>
        )
    }
} 