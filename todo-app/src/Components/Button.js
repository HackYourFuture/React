//jshint esnext: true

import React, { Component } from 'react'

export default class Button extends Component {

    handleClick = event => {
        event.preventDefault();
    }

    render() { 
        if (this.props.isDisabled){
            const className = this.props.className + ' disabled';  
            return (
                <button 
                    className={className} 
                    onClick={this.props.onClick}
                    disabled
                >
                {this.props.buttonContent}
                </button>
        )
        } else {
            const className = this.props.className;
            return (
                    <button 
                        className={className} 
                        onClick={this.props.onClick}
                    >
                    {this.props.buttonContent}
                    </button>
            )
        }
    }
}