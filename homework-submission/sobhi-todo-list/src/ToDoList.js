import React from "react";

export default class ToDoList extends React.Component {

    render() {

        let { todoTask, taskDate } = this.props;

        return (

            <div>

                <h2 className='App-body'> Task : {todoTask}</h2 >

                <p className='App-body'> Dead line : {taskDate}  </p>

            </div >

        );
    }

}