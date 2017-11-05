import React from 'react'
import './todo.css'
import updateStatus from './toDos-DB.js'

export default class ToDoStatus extends React.Component {
    constructor(props) {
        super(props)
        /*this.state = {
            index: this.props.index,
            isDone: this.props.isDone
        }*/
    }
    toggleCheckbox = (event) => {
        //updateStatus(this.props.index, event.target.checked)
        event.target.value=event.target.checked
        this.props.onChange(event,this.props.index)
        
    }
    render() {
        return (
            <div className="toDo-Status-chx">
                <div>
                    <input
                        type="checkbox"
                        onClick={this.toggleCheckbox}
                        checked={this.props.isDone}
                        name="isDone"
                    />
                </div>
                <div className="toDo-Status">( {this.props.isDone ? "Done" : "Not Done"} )</div>
            </div>
        )
    }
}