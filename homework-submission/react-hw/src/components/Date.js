import React, { Component } from "react";

class Date extends React.Component {
  render() {
    return <time datetime={`${this.props.time}`}> {this.props.deadline}</time>;
  }
}

export default Date;
