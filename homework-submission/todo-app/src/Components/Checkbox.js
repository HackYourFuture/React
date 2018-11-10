import React, { Component } from 'react';
class Checkbox extends Component {
    render() {
        return (
            <div>
                <input
                    type='Checkbox'
                    defaultChecked={this.props.checkbox}
                    onClick={() => this.props.handleCheck(this.props.id)}
                />
            </div>
        )
    }
}
export default Checkbox;