import React, { Component } from "react";
import Comments from "./comments";
import Service from "./service";

class List extends Component {
  handleLike = () => {
    const id = this.props.post.id;
    const add = [...this.props.post.like, this.props.author];
    let remove = this.props.post.like.filter(
      name => name !== this.props.author
    );

    const newLikes = this.props.post.like.includes(this.props.author)
      ? remove
      : add;

    Service.updatePost(id, {
      like: newLikes
    }).then(response => {
      this.props.onAnyUpdate(response);
    });
  };

  render() {
    const { photoUrl, like, comment, description } = this.props.post;
    return (
      <div className="single-post">
        <img className="post-image" alt="img" src={photoUrl} />
        <h3>{description}</h3>
        <div className="post-base">
          <div className="post-info">
            <p className="likes-number">{like.length}likes</p>
            <p className="comments-number"> {comment.length} comments</p>
          </div>
          <form className="like-form">
            <input
              type="button"
              name="like"
              value="like"
              onClick={this.handleLike}
            />
            <input
              type="button"
              name="comment"
              value="comment"
              onClick={this.handleComment}
            />
          </form>
        </div>
        <div className="comments-list">
          {comment.map((comment, id) => {
            return (
              <Comments key={id} text={comment.text} author={comment.author} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default List;
