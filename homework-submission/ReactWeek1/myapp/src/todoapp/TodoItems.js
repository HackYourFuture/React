import React, { Component } from "react";
import ListItem from "./ListItems";

class TodoItems extends Component {
    render() {
        const items = [
            {
                task: "Get out of bed",
                date: "Wed Sep 13 2017"
            },
            {
                task: "Brush teeth",
                date: "Thu Sep 14 2017"
            },
            {
                task: "Eat breakfast",
                date: "Fri Sep 15 2017"
            }
        ];

        return (
            <div>
                {items.map((element, index) => (
                    <ListItem
                        key={index}
                        todoTask={element.task}
                        taskDate={element.date}
                    />
                ))}
            </div>
        );
    }
}

export default TodoItems;
