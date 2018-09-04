import React, { Component } from 'react';

class AddTodo extends Component {
    render(){
        return(
            <form onSubmit= {this.props.addItem}>
                <input type='text' placeholder='Todo' name='description'/>
                <input type='date' placeholder='DD/MM/YY' name='deadline'/><br/>
                <button type='submit'>Add</button>
            </form>
        )
    }
}

export default AddTodo;
