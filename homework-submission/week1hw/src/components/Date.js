import React from "react";

export class Date extends React.Component {
  render() {
    return <time datetime={`${this.props.time}`}> {this.props.deadline}</time>;
  }
}
