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
        const { editingDescription, editingDeadline } = this.props.todosStore

        const descriptionText = <textarea placeholder="enter new todo" rows="3" cols="60" onChange={e => editingDescription(e)} />;
        const deadLineTime = <input type="date" className="deadline-input" onChange={e => editingDeadline(e)} />;

        return (
            <form onSubmit={this.handleSubmit} className="addingContainer">
                <label> {descriptionText} </label><br/>
                <label> Dead line : {deadLineTime} </label>
                <button type="submit" className="createButton" value="Create new task" >
                    Create new task
                     <FaPlus />
                </button>
            </form>
        )
    }
} 