import React, { Component } from "react";

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.sendInput = this.props.addItem;
  }

  render() {
    return (
      <form onSubmit={this.sendInput} >
        <label htmlFor="description">description</label>
        <input type="text" name="description" id="description" />
        <label htmlFor="deadline" >Deadline</label>
        <input type="date" name="deadline" id="deadline" />
        <input type="submit" value="Add" />
      </form >
    );
  }

}