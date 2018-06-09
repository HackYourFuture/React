import React, { Component } from "react";
// import TodoItems from './TodoItems'
class ListItems extends Component {
    render() {
        let { todoTask, taskDate } = this.props;
        return (
            <div>
                <h2>Task : {todoTask}</h2>
                <p>Date : {taskDate}</p>
            </div>
        );
    }
}

export default ListItems;
