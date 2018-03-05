import React, { Component } from "react";
import TaskItem from "./TaskItem.js";
import AddingContainer from "./AddingContainer.js"

export let todoArray = [
    { id: 3, description: 'Get out of bed', deadLine: '2017-10-15', done: false },
    { id: 2, description: 'Brush teeth', deadLine: '2017-10-14', done: false },
    { id: 1, description: 'Eat breakfast', deadLine: '2017-10-13', done: false }
]

class TodoList extends Component {
    state = {
        tasks: todoArray
    }

    nextId = () => {
        if (this.state.tasks.length === 0) {
            return 1; 
        }
        let uniqueId = this.state.tasks[0].id;
        return uniqueId += 1;
    }

    addingTask = (description, deadLine) => {
        this.setState((previousState) => ({
            tasks: [{ id: this.nextId(), description: description, deadLine: deadLine, done: false }, ...previousState.tasks]
        })
        )
    }
    handleCheckingBox = (taskId) => {
        let newState = this.state.tasks
        newState.map(task => {
            (taskId !== task.id) ? task : task.done = !task.done
        })
        return this.setState({tasks: newState})
    }
    remove = (taskId) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== taskId)
        }))
    }
    edit = (taskId, newDescription) => {
        let newState = this.state.tasks
        newState.map(task => {
            (taskId !== task.id) ? task : task.description = newDescription
        })
        return this.setState({tasks: newState})
    }
    render() {
        console.log(this.state)
        let tasks = this.state.tasks.map((task, index) =>
            <TaskItem
                taskId={task.id}    
                description={task.description}
                deadLine={task.deadLine}
                key={task.id}
                handleCheckingBox={this.handleCheckingBox}
                onRemove={this.remove}
                onEdit={this.edit}
            />
        );
        return (
            <div>
                <AddingContainer addingTask={this.addingTask} />
                <ul className="list">
                    {tasks}
                </ul>
            </div>
        );
    }
}

export default TodoList;
