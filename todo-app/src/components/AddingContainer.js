
import React, { Component } from "react";
import FaPlus from "react-icons/lib/fa/plus"


export default class AddingContainer extends Component {
    state = {
        description: "",
        deadLine: ""
    }
    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value })
    }
    handleDeadlineChange = (event) => {
        this.setState({ deadLine: event.target.value })

    }
    handleCreating = () => {
        const descriptionInput = this.state.description
        const deadLineInput = this.state.deadLine
        if (descriptionInput && deadLineInput) {
            this.props.addingTask(descriptionInput, deadLineInput)
        } else {
            alert("you should fill the values of description and deadline")
        }    
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const descriptionText = <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />;
        const deadLineTime = <input type="date" className="deadline-input" value={this.state.deadLine} onChange={this.handleDeadlineChange} />;

        return (
            <form onSubmit={this.handleSubmit} className="addingContainer">
                <label> Description : {descriptionText} </label>
                <label> Dead line : {deadLineTime} </label>
                <button className="createButton" value="Create new task" onClick={this.handleCreating}>
                    Create new task
                     <FaPlus />
                </button>
            </form>
        )
    }
} 