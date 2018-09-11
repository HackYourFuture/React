import React, { Component } from 'react';

class Checkbox extends Component {
    render(){
        return(
            <input 
                type = 'Checkbox' 
                defaultChecked = {this.props.item.done} 
                id = {this.props.id} 
                onChange = {()=>this.props.toggle(this.props.item)}
            />
        )
    }
}

export default Checkbox;
