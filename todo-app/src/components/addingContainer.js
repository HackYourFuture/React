import React, { Component } from "react";
import FaPlus from "react-icons/lib/fa/plus"


export default class AddingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: this.props.todos }
        this.addingTask = this.addingTask.bind(this)
    }
    addingTask() {
        let tasksList = this.state.tasks
        tasksList.push({ description: this.description.value, deadLine: this.deadLine.value });
        this.setState({ tasks: tasksList })
        console.log(this.state);
    }
    render() {
        let description = <input type="text" />;
        let deadLine = <input type="text" />;
        
        return (
            <form className="addingContainer">
                Description : {description}
                Dead line : {deadLine}
                <button className="createButton" value="Create new task" onClick={this.addingTask}>
                    Create new task 
                     <FaPlus />
                    </button>
            </form>
        )
    }
} 