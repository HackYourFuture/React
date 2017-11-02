import React, { Component } from 'react';
import Description from './description'
import TodoBox from './todoBox'
import './App.css'

class todo extends Component {
    render() {
        return (
            <div class = 'todoList'>
                <div class = 'todo'>
                    <li><TodoBox done={this.props.done}/></li>
                    </div>
                    <div class ='Description'>
                        <li>Description description={this.props.description} /></li>
                        </div>
                        </div>
        )
    }
}
export default todo