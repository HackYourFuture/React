import React, { Component } from 'react';


export default class Todo extends Component {
    handel = (e) => {
      console.log(e.target.value)  
     }
    render() {
        let { task, date, deadline, done , mark} = this.props;
        return (
            <div className="todo">
                <h3> {task}</h3>

                <h4>Deadline: {deadline}</h4>
                <label>{done}</label><input Checked ={mark} onChange={(e) => this.handel(e)} type="checkbox" className="check" />
            </div>

        )
    }




}