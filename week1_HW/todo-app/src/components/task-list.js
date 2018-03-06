import React, { Component } from 'react'
import Tasks from "./task"

export default class TodoList extends Component{
    render() {
        return (
            <ul>
                <Tasks todo="Attend HYF less" taskTime="2018-03-04" />
                <Tasks todo="get mine pass card from the gemeenta" taskTime="2018-03-05" />              
                <Tasks todo="what ever" taskTime="2018-03-06" />              
                <Tasks todo="what ever" taskTime="2018-09-07" />              
                
            </ul>
        )
    }
}