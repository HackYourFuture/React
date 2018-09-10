import React, { Component } from 'react';

class Checkbox extends Component {
    render(){
        return(
            <input 
                type='Checkbox' 
                defaultChecked = {this.props.checkbox} 
                id = {this.props.id} 
                onChange = {this.props.handler}
            />
        )
    }
}

export default Checkbox;
