import React, { Component } from 'react';

export default class RemainingTime extends Component {

    handleTiming = (deadLine) => {
        const currentTime = new Date()
        setTimeout(function () {
            
            
        }, 1000)
    }

    render() {
        const {
            deadline
        } = this.props
        return (
            <div>
            </div>

        )
    }
}