import React from 'react'
import './todo.css'

export default class ToDoStatus extends React.Component {    
    render() {
        return (
            <div className="toDo-Status-chx">
                <div>
                    <input
                        type="checkbox"
                        onChange={this.props.onChangeStatus}
                        checked={this.props.isDone}
                        name="isDone"
                    />
                </div>
                <div className="toDo-Status">( {this.props.isDone ? "Done" : "Not Done"} )</div>
            </div>
        )
    }
}