import React, { Component } from "react";
import TodoItems from "./Todos";

export default class ListItems extends Component {

    dateString(date) {
        return new Date(date).toDateString();
    }

    render() {
        return (
            <TodoItems
                todos={[
                    {
                        task: "make dental appointment",
                        deadline: this.dateString("March 9, 2018")
                    },
                    {
                        task: "pay phone bill",
                        deadline: this.dateString("March 27, 2018")
                    },
                    {
                        task: "plan summer vacation",
                        deadline: this.dateString("April 14, 2018")
                    }
                ]}
            />      
        );
    }
}
