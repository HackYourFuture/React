import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
@inject('todos')
@observer
export default class Form extends Component {

    render() {
        return (
            <div className='Form'>
                <form>
                    
                    <label> Task :    
                       <input type='text' placeholder='discription'
                            value={this.props.discription}
                            onChange={(event) => this.props.todos.createDiscription(event)} 
                        discription={this.props.discription}
                       />
                    </label>
                    
                    <label> Date :
                       <input type='date' placeholder='deadline' value={this.props.deadline}
                            onChange={(event) => this.props.todos.createDeadline(event)}
                        deadline={this.props.deadline}
                       />
                    </label>

                    <button onClick={(event) => this.props.todos.addNewTask(event)}>Add</button>
                </form>
            </div>
        )
    }


}