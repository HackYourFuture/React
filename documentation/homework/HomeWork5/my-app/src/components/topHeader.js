import React, {Component} from 'react';
import logo from '../logo.svg';

class TopHeader extends Component {
    render() {
        return ( <header className = "App-header" >
            <img src = {
                logo
            }
            className = "App-logo"
            alt = "logo" / >
            <h1 className = "App-title" > React todo - app </h1> </header>
        )
    }
}

export default TopHeader;