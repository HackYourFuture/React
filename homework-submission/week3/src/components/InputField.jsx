import React from 'react'

export default class InputField extends React.Component {
    render() {
        return (
        <label>
            {this.props.label}
            <input 
                type={this.props.type} 
                value={this.props.value} 
                placeholder={this.props.placeholder}
                onChange={(e) => this.props.handleChange(e.target.value)} 
            />
        </label>
        );
    }   
}