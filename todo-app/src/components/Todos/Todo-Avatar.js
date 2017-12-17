// jshint esnext: true

import React from 'react';

export default class Avatar extends React.Component {
    render(){
        return (
            <img src={this.props.avatar}/>
        )
    }
}