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
                        deadline: this.dateString("2018-3-9")
                    },
                    {
                        task: "pay phone bill",
                        deadline: this.dateString("2018-3-27")
                    },
                    {
                        task: "plan summer vacation",
                        deadline: this.dateString("2018-4-14")
                    }
                ]}
            />      
        );
    }
}
