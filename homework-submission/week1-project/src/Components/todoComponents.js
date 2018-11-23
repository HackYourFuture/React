'use strict';
import React, { Component } from 'react';

class Description extends Component{
    constructor(props){
        super(props);
        this.state = {
            onEdit: false,
        };
      }
    
    handleEdit = (e) => {
        if(e.target.name === 'edit')
            this.setState({onEdit: true});
        else
        this.setState({onEdit: false});
    
    }
    handleChange = (e) => {
        if(e.target.name === 'description')
            this.props.editTodo(this.props.id, e.target.value, this.props.deadline);
        else
        this.props.editTodo(this.props.id, this.props.description,  e.target.value);
    };

    render(){
        const doneStyle = {
            textDecoration: 'line-through',
            color: 'grey',
            paddingRight: '10px'
          };
        const notDoneStyle = {
            color: 'red',
            paddingRight: '10px'
        };
        return(
            <div>
                {!this.state.onEdit ?
                <label style = {this.props.done ? doneStyle : notDoneStyle}>
                    <input type="checkbox"  checked = {this.props.done} onChange = {(e) => this.props.changeState(this.props.id, e)}/>          
                    {this.props.description}, <Date deadline = {this.props.deadline}/>
                </label> :
                <div>
                    <input name="description" type="text" onChange = {this.handleChange} value={this.props.description}/>
                    <input name="deadline" type="date" onChange = {this.handleChange} value={this.props.deadline}/>
                </div>
                }
                {this.state.onEdit ? 
                <input type="button" name ="done" value="Done" onClick = {this.handleEdit}/> 
                : 
                <input type="button" name="edit" value="Edit" onClick = {this.handleEdit} />}
                {!this.state.onEdit && <input type="button" value="Remove" onClick = {(e) => this.props.removeTodo(this.props.id, e)}/>}
            </div>
            
        );
    }
}

class Date extends Component{
    render(){
        return(
            <time dateTime={this.props.time}> {this.props.deadline}</time>
        );
    }
}

export default Description;