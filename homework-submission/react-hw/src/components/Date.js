import React from "react";

class Date extends React.Component {
  render() {
    return <time dateTime={this.props.time}> {this.props.deadline}</time>;
  }
}

export default Date;
