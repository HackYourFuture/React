// jshint esnext: true

import React from 'react';

export default class Text extends React.Component {
    render(){
        return (<p>{this.props.text}</p>)
    }
}