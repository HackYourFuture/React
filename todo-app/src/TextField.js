import React from 'react';


export default class TextField extends React.Component {

    render() {
        if (this.props.multiline) {
            return this.renderMultiLine();
        } else if (this.props.singleline) { 
            return this.renderSingleLine();
        } else {
            return this.renderDateForm();
        }
    };

    renderSingleLine() {
        return (
            <div>
                <input type="text" 
                className="form"
                value={this.props.value}
                onChange={this.props.onChange}
                />
            </div>
        );
    };

    renderDateForm() {
        return (
            <div>
                <input type="date" 
                className="date"
                value={this.props.value}
                onChange={this.props.onChange}
                />
            </div>
        );
    };
    
    renderMultiLine() {
        return (
            <div>
                <textarea className="form"
                value={this.props.value}
                onChange={this.props.onChange}
                />
            </div>
        );
    };
};

