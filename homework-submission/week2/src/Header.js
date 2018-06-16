import React, {
    Component
} from 'react';
import './App.css';
import logo from './logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header" >
                <img src={logo}
                    className="App-logo"
                    alt="logo" />
                <h2 className="App-title" > Todo App </h2>
            </header >
        );
    }
}

export default Header;