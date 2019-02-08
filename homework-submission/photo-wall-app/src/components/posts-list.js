import React, { Component } from "react";
import Comments from "./comments";
import Service from "./service";
import EditPost from "./edit-delete-post";

class List extends Component {
  state = {
    zoom: true
  };
  handleLike = () => {
    const { id, like } = this.props.post;
    const add = [...like, this.props.user];
    let remove = like.filter(name => name !== this.props.user);
    const newLikes = like.includes(this.props.user) ? remove : add;
    Service.updatePost(id, { like: newLikes }).then(response => {
      this.props.onAnyUpdate(response);
    });
  };

  passUpdates = updatedItem => {
    this.props.onAnyUpdate(updatedItem);
  };

  passDeletes = updatedItem => {
    this.props.onDelete(updatedItem);
  };

  zoomPost = () => {};

  render() {
    const { photoUrl, like, comment, description, author } = this.props.post;

    return (
      <div className="single-post">
        {this.props.user === author && (
          <EditPost
            post={this.props.post}
            onUpdate={this.passUpdates}
            onDelete={this.passDeletes}
          />
        )}
        <img
          className="post-image"
          alt="img"
          src={photoUrl}
          onClick={this.zoomPost}
        />
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
