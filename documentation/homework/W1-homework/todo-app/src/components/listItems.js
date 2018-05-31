import React, { Component } from "react";

export default class ListItem extends Component{

    render() {
        let { todoTask, taskDate } = this.props;
        return (
            <div>
                <hr />    
                
                <h2><strong> Task : {todoTask}</strong></h2>
                 <h3><strong> {taskDate} </strong></h3>
                <hr />    
            </div>    
        );
    }
}