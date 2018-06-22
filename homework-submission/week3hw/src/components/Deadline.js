import React from "react";

export class Deadline extends React.Component {
  render() {
    const { deadline } = this.props;
    return <time> {deadline}</time>;
  }
}

export default Deadline;
