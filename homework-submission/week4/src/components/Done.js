import React, { Component } from 'react';

class Done extends Component {
    render() {
        const { done } = this.props;
        return (
            { done }.done ? <span> True </span> : <span> False </span>
        );
    }
}

export default Done;