import React, { Component } from "react";
import TaskItem from "./taskItem.js";
import AddingContainer from "./addingContainer.js"

export let todoArray = [
    { description: 'Get out of bed', deadLine: 'Wed Sep 13 2017' },
    { description: 'Brush teeth', deadLine: 'Thu Sep 14 2017' },
    { description: 'Eat breakfast', deadLine: 'Fri Sep 15 2017' }
]

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: todoArray
        }
    }
   
    addingTask = (description, deadLine) => {
        this.setState((previousState) => ({
                tasks: [ { description: description, deadLine: deadLine }, ...previousState.tasks]
            })
        )
        console.log(this.state)
    }
    render() {
        let tasks = this.state.tasks.map((task, index) =>
            <TaskItem
                description={task.description}
                deadLine={task.deadLine}
                key={index}
            />
        );
        return (
            <div>
                <AddingContainer create={this.addingTask} />
                <ul className="list">
                    {tasks}
                </ul>
            </div>
        );
    }
}

export default TodoList;
