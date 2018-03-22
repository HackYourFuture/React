import React, { Component } from 'react'
import Todos from "./todo-item"

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                <Todos todo="Get out of bed" todoTime="2018-12-02" />
                <Todos todo="Brush teeth" todoTime="2018-11-05" />
                <Todos todo="Eat breakfast" todoTime="2018-09-09" />

            </ul>
        )
    }
}