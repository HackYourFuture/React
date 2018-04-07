import React, { Component } from 'react'
//import moment from 'moment';


export default class Task extends Component {
    setDate(date) {
        const time = new Date(date);
        return time.toDateString()
    }

    //pressWhenDone = () => console.log("Done")
    render() {
        const todo = this.props.todo;
        const taskTime = this.setDate(this.props.taskTime)
        return (
            <ul>
                <li>{todo} on {taskTime} </li>    
            </ul>
        )
    }
}
//<input type="checkbox" onChange={this.pressWhenDone}></input>