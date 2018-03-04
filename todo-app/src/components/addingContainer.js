
import React, { Component } from "react";
import FaPlus from "react-icons/lib/fa/plus"


export default class AddingContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: "",
            deadLine: ""
        }
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
         this.props.create(descriptionInput, deadLineInput)
    }

    render() {
        let description = <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />;
        let deadLine = <input type="text" value={this.state.deadLine} onChange={this.handleDeadlineChange} />;

        return (
            <div className="addingContainer">
                Description : {description}
                Dead line : {deadLine}
                <button className="createButton" value="Create new task" onClick={this.handleCreating}>
                    Create new task
                     <FaPlus />
                </button>
            </div>
        )
    }
} 