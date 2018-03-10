import React, { Component } from 'react';
import logo from '../logo.svg';
export default class Header extends Component {

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-todo">TODO</h1>
                    <h3 className="App-title">Check what you have to do today:</h3>
                </header>    
            </div>
        )
    }
}