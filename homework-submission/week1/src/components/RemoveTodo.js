import React, { Component } from 'react';

class RemoveTodo extends Component {
    render(){
        return(            
                <button onClick= {()=>{this.props.remove(this.props.i)}} type='submit'>Remove</button>
        )
    }
}

export default RemoveTodo;
