import React, { Component } from 'react'


export default class Buttons extends Component {

    render() {
        const {
            value,
            type,
            onClick } = this.props
        
        return (
            <input type={type} value={value} onClick={onClick}/>
        )
    }
}