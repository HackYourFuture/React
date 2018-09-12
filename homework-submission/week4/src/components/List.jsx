import React from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import TodoItem from "./TodoItem";


export default class List extends React.Component {
  render() {
      const { title, content } = this.props;
      console.log(content);
    return (
      <ul className={title}>
        {content}
      </ul>
    );
  }
}