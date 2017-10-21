import React from 'react'

export default class State extends React.Component{
    render(){
        return (
        <div>
            {this.props.state}
        </div>
        )
    }
}