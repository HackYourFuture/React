import React, { Component } from "react";
import Image from '../components/Image';

class TodoList extends Component {

    render() {
        let { todoTask, taskDate } = this.props;
        return (
            <div className="comment">


                <Image />
                <h2><strong>Task : {todoTask}</strong></h2>

                <h3><strong> {taskDate} </strong></h3>
            </div>

        );
    }
}
export default TodoList;