import React, { Component } from "react";
import Server from "./server"

class List extends Component {
  state = {
    text: '',
    isLiked: false,
  }

  handleValueChange = event => {
    this.setState({ text: event.target.value });
  };

  handleUpdate = id => {
    const item = { text: this.state.text }
    Server.UpdateComment(id, item)
  }

  handleLike = id => {
    const flip = this.props.comments.isLiked = !this.props.comments.isLiked
    const item = { isLiked: flip }
    Server.UpdateComment(id, item)
    this.setState({ isLiked: flip })
  }

  handleDelete = id => {
    Server.deleteComment(id)
      .then((response) => {
        this.props.onDelete(response._id)
      })
  }


  render() {
    return (
      <div className="comment-list"
      >
        <input
          className="list-input"
          type="text"
          defaultValue={this.props.comments.text}
          onChange={this.handleValueChange}
          onKeyUp={() => this.handleUpdate(this.props.comments._id)}
        />

        <span>
          <input
            type="button"
            name="like"
            className={this.props.comments.isLiked === true ? 'button liked' : ' button'}
            onClick={() => this.handleLike(this.props.comments._id)}
            value='👍'
          />
          <input
            type="button"
            name="delete"
            value="delete"
            className="button"
            onClick={() => this.handleDelete(this.props.comments._id)}
          />
        </span>
      </div>

    );
  }
}

export default List;
