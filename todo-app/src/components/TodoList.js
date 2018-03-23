import React, { Component } from "react";
import { observer , inject} from "mobx-react"

import TaskItem from "./TaskItem.js";

@inject('todosStore')
@observer    
class TodoList extends Component {
   
    render() {
        console.log(this.props)
        const { todosList } = this.props.todosStore
        const tasks = todosList.map((task) => 
            <TaskItem
                taskId={task.id}
                description={task.description}
                deadLine={task.deadLine}
                isDone={task.done}
                creatingDate={task.creatingDate}
                key={task.id}
            />
        );
        if (!todosList.length) {
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
