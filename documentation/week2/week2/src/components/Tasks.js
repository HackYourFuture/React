import React, { Component } from 'react';



class Tasks extends Component {


    render() {

        return (
            <div className='Tasks'>
            
            
                <span
                    style={
                        {
                            textDecoration: this.props.done ? 'line-through' : 'none',
                            color: this.props.done ? 'rgb(64, 18, 110)' : 'rgb(238, 233, 243)'
                        }

                    }>
                    <h2>Number of Task: {this.props.id}</h2>
                    <h2>{this.props.description}</h2>
                    <h2>{this.props.deadline}</h2>
                </span>

                <button className ="button"
                    onClick=
                    {
                        () =>
                            this.props.handleClick(this.props.id)
                    }
                >
                    {this.props.done ? 'Undo' : 'Do it'}

                </button>
            
            </div>
    
)
    }
}


export default Tasks;