import React, { Component } from "react";

class List extends Component {
    render() {
        return (
            <div>
                <h2> Todo :{this.props.description} </h2>
                <h2> Deadline: {this.props.deadline}</h2>
            </div>
        );
    }
}

export default List;



