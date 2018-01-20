import React from 'react';


export default class TextField extends React.Component {

    render() {
        if (this.props.multiline) {
            return this.renderMultiLine();
        } else {
            return this.renderSingleLine();
        }
    }

    renderSingleLine() {
        return (
            <input type="text"
            value={this.props.value}
            onChange={this.props.onChange}
             />
        );
    }
    
    renderMultiLine() {
        return (
            <textarea 
            value={this.props.value}
            onChange={this.props.onChange}
            />
        );
    }
}

