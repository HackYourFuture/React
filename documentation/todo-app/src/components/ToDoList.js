
import React, { Component } from 'react';
import ToDoOutput from './ToDoOutput';

export default class ToDoList extends Component {
    state = {
        list: [{
            todo: " Get out of bed",
            deadline: " Wed Sep 13 2017",
        },
        {
            todo: " Brush teeth",
            deadline: " Thu Sep 14 2017",
        },
        {
            todo: " Eat breakfast",
            deadline: " Fri Sep 15 2017",
        }]
    };
    render() {
        const title = 'Todo List of Homework1';
        return (
            <div>
                <h1>{title}</h1>
                {this.state.list.map((element, indexOfEach) =>
                    <ToDoOutput todo={element.todo} deadline={element.deadline} key={indexOfEach} />)}
            </div>
        )
    }
};