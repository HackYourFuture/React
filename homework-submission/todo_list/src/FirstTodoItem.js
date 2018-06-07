import React, { Component } from "react";

class FirstTodoItem extends Component {



    render() {
        const items = [
            {
                task: 'Get out of bed',
                date: 'Wed Sep 13 2017'
            },
            {
                task: 'Brush teeth',
                date: 'Thu Sep 14 2017'
            },
            {
                task: 'Eat breakfast',
                date: 'Fri Sep 15 2017'
            }
        ];

        return (
            <ul>
                <li>Get out of bed, Wed Sep 13 2017</li>
                <li>Brush teeth,Thu Sep 14 2017</li>
                <li>Eat breakfast,Fri Sep 15 2017</li>
            </ul>
        )
    }

}



export default FirstTodoItem;