import React from 'react'

export default class Task extends React.Component{
    render(){
        return (
        <div>
            {this.props.task}
        </div>
        )
    }
}