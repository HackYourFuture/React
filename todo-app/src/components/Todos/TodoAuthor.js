// jshint esnext: true

import React from 'react';

export default class Author extends React.Component {
    render(){
        return (
            <h4>{this.props.author}</h4>
        )
    }
}