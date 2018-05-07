import React, { Component } from 'react';
import logo from '../logo.svg';

class TopHeader extends Component {
    render() {
        const header = 'React K3M1RD1N Homework Todo-List';
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{header}</h1>
            </header>
        )
    };
}
export default TopHeader;