import React, { Component } from 'react';


export default class User extends Component {

    addNewName(e) {
        const key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
            // this.setState({ name: e.target.value });
            console.log(e.target.value);
            this.props.changeName(e.target.value);
        }
    }
    
    render() {
        return (
            <div className="App-intro">
                <input
                    type="text"
                    onKeyDown={this.addNewName.bind(this)} />
                <div id="name">{this.props.name}</div>
            </div>
        );
    }
}