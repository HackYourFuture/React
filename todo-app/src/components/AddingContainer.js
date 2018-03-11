
import React, { Component } from "react";
import FaPlus from "react-icons/lib/fa/plus"
import moment from "moment"


export default class AddingContainer extends Component {
    state = {
        description: "",
        deadLine: ""
    }
    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value })
    }
    handleDeadlineChange = (event) => {
        this.setState({ deadLine: moment(event.target.value).format('ddd, DD MMM, YYYY') })

    }
    handleCreating = () => {
        const descriptionInput = this.state.description
        const deadLineInput = this.state.deadLine
        if (descriptionInput && deadLineInput) {
            this.props.onCreate(descriptionInput, deadLineInput)
        } else {
            alert("you should fill the values of description and deadline")
        }    
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({description: ""})
    }

    render() {
        const descriptionText = <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />;
        const deadLineTime = <input type="date" className="deadline-input" onChange={this.handleDeadlineChange} />;

        return (
            <form onSubmit={this.handleSubmit} className="addingContainer">
                <label> Description : {descriptionText} </label>
                <label> Dead line : {deadLineTime} </label>
                <button type="submit" className="createButton" value="Create new task" onClick={this.handleCreating}>
                    Create new task
                     <FaPlus />
                </button>
            </form>
        )
    }
} 