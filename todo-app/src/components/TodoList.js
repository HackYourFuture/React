import React, { Component } from "react";
import { observer , inject} from "mobx-react"

import TaskItem from "./TaskItem.js";

@inject('todosStore')
@observer    
class TodoList extends Component {
    componentDidMount() {
        this.props.todosStore.getTodos()
    }
   
    render() {
        const { todosList } = this.props.todosStore
        
        const tasks = todosList.map(task => 
            <TaskItem
                key={task._id}
                taskId={task._id}
                description={task.description}
                deadline={task.deadline}
                isDone={task.done}
        
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
