import React, { Component } from 'react';
class Checkbox extends Component {
    render() {
        return (
            <input
                type='Checkbox'
                defaultChecked={this.props.Checkbox}
                onChange={() => this.props.handler(this.props.id)}
            />
        )
    }
}

export default Checkbox;