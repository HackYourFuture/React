'use strict';
import React, { Component } from 'react';

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {description:"", deadline: ""};
      }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    addNewTodo = (e) => {
        if(this.state.description !== "" && this.state.deadline !== ""){
            this.props.addTodo(this.state.description, this.state.deadline);
        }
    };
    render(){
        return(
            <div>
                <label>Description: </label>
                <input name="description" type="text" placeholder="input description" onChange = {this.handleChange} value={this.state.description}/>
                <label>   Deadline: </label>
                <input name="deadline" type="date"  onChange = {this.handleChange} value={this.state.deadline}/>
                <input type="button" value = "Add" onClick = {this.addNewTodo}/>
            </div>
        );
    }
}

export default TodoForm;