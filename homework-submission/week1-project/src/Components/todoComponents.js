'use strict';
import React, { Component } from 'react';

class Description extends Component{
    render(){
        return(
            <h2>
                * {this.props.descrip}, <Date deadline = {this.props.deadline}/> 
            </h2>
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