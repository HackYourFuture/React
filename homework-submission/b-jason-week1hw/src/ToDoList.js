import React from "react";

export default class ToDoList extends React.Component {
    render() {
        let { todoTask, taskDate } = this.props;
        return (
            <div>
                <p className='App-body'><strong> Task : {todoTask} </strong></p>
                <p className='App-body'> Date : {taskDate}  </p>
            </div >
        );
    }
}