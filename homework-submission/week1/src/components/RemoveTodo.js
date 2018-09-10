import React, { Component } from 'react';

class RemoveTodo extends Component {
    render(){
        return(            
            <button onClick= {()=>{this.props.remove()}}>Remove</button>
        )
    }
}

export default RemoveTodo;
