
import React, { Component } from "react";

    class TodoItems extends Component {
        render() {
   
            const { description, deadline } = this.props;

    
            return (
                <div>
                    <strong>{this.props.myDate} </strong>{this.props.MyTask}
                </div>
            )
        }
    }

    export default TodoItems;

