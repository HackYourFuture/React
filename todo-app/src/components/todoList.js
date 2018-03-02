import React, { Component } from "react";
import TaskItem from "./taskItem.js";
import AddingContainer from "./addingContainer.js"

export let todoArray = [
    { description: 'Get out of bed', deadLine: 'Wed Sep 13 2017' },
    { description: 'Brush teeth', deadLine: 'Thu Sep 14 2017' },
    { description: 'Eat breakfast', deadLine: 'Fri Sep 15 2017' }
]

class TodoList extends Component {
    render() {
        let tasks = todoArray.map((task, index) =>
            <TaskItem
                description={task.description}
                deadLine={task.deadLine}
                key={index}
            />
        );
        console.log(todoArray)
        return (
            <div>
                <AddingContainer todos={todoArray}/>
                <ul className="list">
                    {tasks}
                </ul>
            </div>
        );
    }
}

export default TodoList;
