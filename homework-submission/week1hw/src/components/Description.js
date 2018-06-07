import React from "react";
import { Date } from "./Date";

export class Description extends React.Component {
  render() {
    return (
      <p>
        {this.props.todo}, <Date deadline={this.props.deadline} />
      </p>
    );
  }
}
