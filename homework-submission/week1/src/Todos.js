import React, { Component } from "react";
import List from "./List";

class Todos extends Component {
    render() {
        const items = [
            {
                description: "Get out of bed",
                deadline: "Wed Sep 13 2017"
            },
            {
                description: "Brush teeth",
                deadline: "Thu Sep 14 2017"
            },
            {
                description: "Eat breakfast",
                deadline: "Fri Sep 15 2017"
            }
        ];

        return (
            <div>
                {items.map((item, id) => (
                    <List key={id} description={item.description} deadline={item.deadline} />
                ))}
            </div>
        );
    }
}
export default Todos;
