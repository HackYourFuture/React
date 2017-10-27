import React from 'react'
import './todo.css'
import updateStatus from './toDos-DB.js'

export default class ToDoStatus extends React.Component {
    constructor(props) {
        super(props)
        this.status = {
            index: this.props.index,
            toDoStatus: this.props.toDoStatus
        }
    }
    toggleCheckbox = () => {
        if (this.refs.chxToDoStatus.checked !== true) {
            updateStatus(this.status.index, "Not Done")
            this.setState({
                key: this.props.key,
                toDoStatus: "Not Done"
            }, () => { this.refs.valueToDoStatus.innerHTML = "( Not Done )" })
        } else {
            updateStatus(this.status.index, "Done")
            this.setState({
                index: this.props.key,
                toDoStatus: "Done"
            }, () => { this.refs.valueToDoStatus.innerHTML = "( Done )" })
        }
    }
    componentDidMount() {
        this.refs.chxToDoStatus.checked = (this.status.toDoStatus === "Done") ? true : false;
    }
    render() {
        return (
            <div className="toDo-Status-chx">
                <div>
                    <input
                        type="checkbox"
                        ref="chxToDoStatus"
                        onClick={this.toggleCheckbox}
                    />
                </div>
                <div className="toDo-Status" ref="valueToDoStatus">( {this.status.toDoStatus} )</div>
            </div>
        )
    }
}