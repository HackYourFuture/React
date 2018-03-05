
import React, { Component } from "react";
import FaPlus from "react-icons/lib/fa/plus"


export default class AddingContainer extends Component {
    state = {
        description: "",
        deadLine: "2018-03-05"
    }
    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value })
    }
    handleDeadlineChange = (event) => {
        this.setState({ deadLine: event.target.value })

    }
    handleCreating = () => {
        let descriptionInput = this.state.description
        let deadLineInput = this.state.deadLine
        if (descriptionInput && deadLineInput) {
            this.props.addingTask(descriptionInput, deadLineInput)
        } else {
            alert("you should fill the values of description and deadline")
        }    
    }

    render() {
        const descriptionText = <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />;
        const deadLineTime = <input type="date" className="deadline-input" value={this.state.deadLine} onChange={this.handleDeadlineChange} />;

        return (
            <div className="addingContainer">
                Description : {descriptionText}
                Dead line : {deadLineTime}
                <button className="createButton" value="Create new task" onClick={this.handleCreating}>
                    Create new task
                     <FaPlus />
                </button>
            </div>
        )
    }
} 