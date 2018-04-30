import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        const head_comment = 'REACT TODOS LIST - WEEK 1';
        return (
            <h1 className="Header">
            { head_comment }    
            </h1>
        )
    }
}