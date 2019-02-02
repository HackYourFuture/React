import React, { Component } from "react";
import Server from "./server";

class CommentForm extends Component {
  state = {
    text: '',
    isLiked: false,
  }

  handleValueChange = e => {
    this.setState({ text: e.target.value });
  };

  handleAdd = event => {
    event.preventDefault();
    Server.addComment({
      text: this.state.text,
      isLiked: false,
      date: Date(),
      author: {
        lastName: "marjana",
        firstName: "Joudi",
        avatarURL: "http://www.europe-together.eu/wp-content/themes/sd/images/user-placeholder.svg"
      }
    })
      .then(newComment => {
        this.setState({
          text: ''
        })
        this.props.onAdd(newComment)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleAdd} >
        <div>
          <input
            type="text"
            name="text"
            className="text-input"
            placeholder="enter comment"
            value={this.state.text}
            onChange={this.handleValueChange}
          />
          <input
            type="submit"
            name="add"
            className="button"
            value="add"
          />
        </div>
      </form>
    );
  }
}

export default CommentForm;
