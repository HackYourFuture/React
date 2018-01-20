import React from 'react';

export default class Button extends React.Component {


    handleClick = event => {
        event.preventDefault();

        if (!this.props.disabled && this.props.onClick) {
           this.props.onClick();
        }
    }

    render(){

        let className = 'Button'
        if (this.props.disabled) {
            className += ' Button-disabled'
        }
//disabled is for when text field is empty
        return(
            <button className={className}
            disabled={this.props.disabled}
            onClick={this.handleClick}>
            {this.props.label}
            </button>
        );
    }
}