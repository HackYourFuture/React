import React from "react";
import Deadline from "./Deadline";

export class Description extends React.Component {
  render() {
    const { description, deadline } = this.props;
    return (
      <span>
        {description} <Deadline deadline={deadline} />
      </span>
    );
  }
}

export default Description;
