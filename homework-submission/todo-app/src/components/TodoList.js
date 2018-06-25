import React, { Component } from "react";
import Image from './Image';

class TodoList extends Component {

    render() {
        let todoTask = this.props.todoTask;
        let taskDate = this.props.taskDate;


        return (
            <div className="comment">


                <Image />
                <h2><strong>Task : {todoTask}</strong></h2>

                <h3><strong>Date : {taskDate} </strong></h3>
            </div>

        );
    }
}
export default TodoList;