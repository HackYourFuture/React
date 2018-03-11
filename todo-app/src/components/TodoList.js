import React, { Component } from "react";
import TaskItem from "./TaskItem.js";

class TodoList extends Component {
   
    render() {
        console.log(this.props.tasks)
        const todoArray = this.props.tasks
        const tasks = todoArray.map((task, index) =>
            <TaskItem
                taskId={task.id}    
                description={task.description}
                deadLine={task.deadLine}
                isDone={task.done}
                creatingDate={task.creatingDate}
                key={task.id}
                handleCheckingBox={this.props.handleCheckingBox}
                onRemove={this.props.onRemove}
                onEdit={this.props.onEdit}
            />
        );
        if (!todoArray.length) {
            return (
                <div>
                    <div className="emptyList"> No Tasks to do!!</div>
                </div>    
            )
        } else {
            return (
                <div>
                    <ul className="list">
                        {tasks}
                    </ul>
                </div>
            )
        }    
    }
}

export default TodoList;
