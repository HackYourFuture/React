// jshint esnext: true

import React from 'react';

export default class Date extends React.Component {
    render(){
        return (
            <p>{this.props.date.toLocaleString()}</p>
        )
    }
}