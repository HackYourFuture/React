import React, { Component } from 'react';
import logo from './../logo.svg';
class TopHeader extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to react</h1>
            </header>
        );
    }
};

export default TopHeader;


//path names
//relative path
// from, this file  './'

// './../' higher up folder
// './' the same level
// './FOLDER_NAME/FILE'  for lower 
