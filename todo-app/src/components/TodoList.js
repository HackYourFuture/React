import React, { Component } from "react";
import TaskItem from "./TaskItem.js";
import AddingContainer from "./AddingContainer.js"
import myTodoList from "./myTodoList.json"

class TodoList extends Component {
    state = {
        tasks: myTodoList
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
        const newState = this.state.tasks
        newState.forEach(task => {
            // eslint-disable-next-line
            (taskId !== task.id) ? task : task.done = !task.done 
        })
        this.setState({tasks: newState})
    }
    remove = (taskId) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== taskId)
        }))
    }
    edit = (taskId, newDescription) => {
        const newState = this.state.tasks
        newState.forEach(task => {
            // eslint-disable-next-line
            (taskId !== task.id) ? task : task.description = newDescription 
        })
        this.setState({tasks: newState})
    }
    render() {
        console.log(this.state)
        const todoArray = this.state.tasks
        const tasks = todoArray.map((task, index) =>
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
        if (!todoArray.length) {
            return (
                <div>
                    <AddingContainer addingTask={this.addingTask} />
                    <div className="emptyList"> No Tasks to do!!</div>
                </div>    
            )
        } else {
            return (
                <div>
                    <AddingContainer addingTask={this.addingTask} />
                    <ul className="list">
                        {tasks}
                    </ul>
                </div>
            )
        }    
    }
}

export default TodoList;
