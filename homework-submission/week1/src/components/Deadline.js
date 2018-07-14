import React, { Component } from 'react';

class Deadline extends Component{
    render(){
        const {deadline} = this.props;
        return (
                <span>{deadline}</span>
        );
    }

}

export default Deadline;