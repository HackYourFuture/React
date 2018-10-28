import React, { Component } from "react";

class List extends Component {
    render() {
        return (
            <div className={this.props.done ? 'LineThrough' : ''}>
                <li>{this.props.description}, {this.props.deadline} </li>
            </div>
        );
    }
}

export default List;