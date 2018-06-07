import React, { Component } from "react";
class Deadline extends Component {
    render() {
        return (
            <p>
                {this.props.time}
            </p>
        )
    }

}
export default Deadline;