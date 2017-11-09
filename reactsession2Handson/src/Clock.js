import React from 'react'

export default class Clock extends React.Component{
    render (){
        return(
            <div>{this.props.zoneString}    {this.props.timeString}</div>
        )
    }
}