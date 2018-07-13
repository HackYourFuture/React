import React, { Component } from 'react';
 
class Description extends Component{
    render(){
        const {description} = this.props;
        return (
                <strong> {description}: </strong>
        );
    }
}

export default Description;