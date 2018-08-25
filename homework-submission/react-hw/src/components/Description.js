import React, { Component } from "react";
import Date from "./Date";

class Description extends React.Component {
  render() {
    return (
      <p>
        {this.props.todo}, <Date deadline={this.props.deadline} />
      </p>
    );
  }
}

export default Description;
