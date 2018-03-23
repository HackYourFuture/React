import React, { Component } from "react";
import { inject, observer } from "mobx-react"

@inject("todosStore")
@observer
export default class FeaturesContainer extends Component {

    render() {
        const { todosList, deleteAllCompleted, markAllTodos, unMarkAllTodos } = this.props.todosStore

        const completedTasks = todosList.filter(task => task.done === true).length
        const incompletedTasks = todosList.filter(task => task.done === false).length

        return (
            <div className="features-container">
                <button className="delete-all-button" onClick={() => deleteAllCompleted()}>
                    Delete all completed todos
                </button>
                <button className="mark-all-button" onClick={() => markAllTodos()}>
                    Mark all as done
                </button>
                <button className="unMark-all-button" onClick={() => unMarkAllTodos()}>
                     Unmark all as not done
                </button>
                <span className="incomplete-counter">{incompletedTasks} still needs to be done </span>
                <span className="complete-counter">{completedTasks} task/s are done </span>
            </div>
        )
    }
}