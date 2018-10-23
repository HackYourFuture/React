'use strict';
import React, { Component } from 'react';

class Description extends Component{
    render(){
        const doneStyle = {
            textDecoration: 'line-through',
            color: 'grey'
          };
        const notDoneStyle = {
            color: 'red'
        };
        return(
            <label style = {this.props.done ? doneStyle : notDoneStyle}>
                <input type="checkbox" value="" defaultChecked = {this.props.done} onChange = {(e) => this.props.changeState(this.props.id, e)}/>          
                {this.props.descrip}, <Date deadline = {this.props.deadline}/>
                <br/> 
            </label>
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