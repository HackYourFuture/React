import React, { Component } from 'react'
import Tasks from "./task"

export default class TodoList extends Component{
    render() {
        return (
            <ul class="list-group">
               <li class="list-group-item list-group-item-action list-group-item-primary"> <Tasks todo="Attend HYF less" taskTime="2019-01-13" /></li>
               <li class="list-group-item list-group-item-action list-group-item-secondary"><Tasks todo="get mine pass card from the gemeenta" taskTime="2019-01-14" />   </li>           
               <li  class="list-group-item list-group-item-action list-group-item-success">  <Tasks todo="what ever" taskTime="2019-01-015" />    </li>          
               <li class="list-group-item list-group-item-action list-group-item-danger"> <Tasks todo="what ever" taskTime="2019-07-01" />    </li>          
                
            </ul>
        )
    }
}