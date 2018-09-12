import React from "react";


export default class List extends React.Component {
  render() {
      const { title, content } = this.props;
    return (
      <ul className={title}>
        {content}
      </ul>
    );
  }
}