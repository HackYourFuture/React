import React, { Component } from "react"
import { inject, observer } from "mobx-react"


import FaPlus from "react-icons/lib/fa/plus"

@inject("todosStore")
@observer    
export default class AddingContainer extends Component {
   
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.todosStore.createTodo();
    }

    render() {
        const { createTaskForm, editingDescription, editingDeadline } = this.props.todosStore
        const { description } = createTaskForm 

        const descriptionText = <input type="text" value={description} onChange={e => editingDescription(e)} />;
        const deadLineTime = <input type="date" className="deadline-input" onChange={e => editingDeadline(e)} />;

        return (
            <form onSubmit={this.handleSubmit} className="addingContainer">
                <label> Description : {descriptionText} </label>
                <label> Dead line : {deadLineTime} </label>
                <button type="submit" className="createButton" value="Create new task" >
                    Create new task
                     <FaPlus />
                </button>
            </form>
        )
    }
} 