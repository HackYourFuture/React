
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

export default class TopHeader extends Component {

    render() {
        const Clock = (props) => {
            return (
                <div className="clocking">
                    <h2>It is {props.date.toLocaleTimeString()}.</h2>
                    <h2>Week 2 of React Homework!</h2>
                </div>
            );
        }
        return (
            <header className="App-header">
                <Clock date={new Date()} />
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Jamshid's ToDo app</h1>
            </header>
        );
    }
};
