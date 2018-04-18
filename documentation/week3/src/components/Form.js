import React, { Component } from 'react';

export default class Form extends Component {

    render() {
        return (
            <div className='Form'>
                <form onSubmit={(event) => this.props.handleSubmit(event)}>
                    
                    <label> Task :    
                       <input
                            type='text' placeholder='discription' value={this.props.discription}
                            onChange={(event) => this.props.handleDiscriptionChange(event)} 
                           // value={this.props.discription}
                       />
                    </label>
                    
                    <label> Date :
                       <input
                            type='date' placeholder='deadline' value={this.props.deadline}
                            onChange={(event) => this.props.handleDeadlineChange(event)}
                          //  value={this.props.deadline}
                       />
                    </label>

                    <button>Add</button>
                </form>
            </div>
        )
    }


}