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
        const { onAddingTodo, createTaskForm } = this.props.todosStore
        const {description,deadline} = createTaskForm

        const descriptionText = <textarea placeholder="enter new todo" value={description}  rows="3" cols="60" onChange={e => onAddingTodo(e.target.value, "description")} />;
        const deadlineTime = <input type="date" className="deadline-input" value={deadline !== "" ? deadline.slice(0,11) : ""} onChange={e => onAddingTodo(e.target.value, "deadline")} />

        return (
            <form onSubmit={this.handleSubmit} className="addingContainer">
                <label> {descriptionText} </label><br/>
                <label> Deadline : {deadlineTime} </label>
                <button type="submit" className="createButton" value="Create new task" >
                    Create new task
                     <FaPlus />
                </button>
            </form>
        )
    }
} 