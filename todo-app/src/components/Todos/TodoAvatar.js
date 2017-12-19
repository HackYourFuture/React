// jshint esnext: true

import React from 'react';
import './styles/TodoAvatar.css';

export default class Avatar extends React.Component {
    render(){
        return (
            <img src={this.props.avatar} alt={this.props.alt}/>
        )
    }
}